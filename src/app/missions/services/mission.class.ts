import { PersistanceService } from '../../common/services/persistance.service';
import { RangService } from '../../rangs/services/rang.service';
import { StorageService } from '../../storage/services/storage.service';
import { keys } from '../../sweetbox/resources/keys.resource';
import { Streak } from '../models/streak.model';
import { CompletedPipe } from '../utils/pipes/completed.pipe';
import { MissionConfig } from './missions.service';

export class Mission {
  private disabledUntil = 0;
  private progress = 0;
  private requiredProgress = 0;
  private isCompletedUntil = 0;
  private stats: any = {
    progress: 0,
    disabledUntil: Date.now(),
    isCompletedUntil: Date.now(),
  };

  constructor(
    private config: MissionConfig,
    private deps: {
      rang: RangService;
      storage: StorageService;
      persistance: PersistanceService;
    },
  ) {
    this.stats = this.loadMissionStats(this.config.title) || this.stats;
    this.disabledUntil = this.stats.disabledUntil;
    this.progress = this.stats.progress;
    this.isCompletedUntil = this.stats.isCompletedUntil;
    this.refreshTodo();
    this.init();
  }

  unblock() {
    this.config.autocomplete = false;
  }

  setProgress(progress: number) {
    this.progress = progress;
  }

  setRequiredProgress(progress: number) {
    this.requiredProgress = progress;
  }

  public getConfig() {
    return {
      title: this.config.title,
      step: this.config.step,
      refreshTime: this.formatDuration(this.config.refreshTime),
      respawnTime: this.formatDuration(this.config.respawnTime),
      autocomplete: this.config.autocomplete,
      xp: this.config.reward.xp,
      level: this.config.level,
    };
  }

  public formatDuration(milliseconds: number) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days}d`;
    }
    if (hours > 0) {
      return `${hours}h`;
    }
    if (minutes > 0) {
      return `${minutes}m`;
    }
    return `${seconds}s`;
  }

  public today() {
    let day = new Date().toISOString().split('T')[0]; //2025-01-27
    // day = '2025-01-28';
    return day;
  }

  public setPrize(keyType: number, amount: number, xp?: number) {
    this.config.reward = {
      keyType,
      amount,
      xp: xp ? xp : this.config.reward.xp,
    };
  }

  private rewardCoef = 1;
  public setRewardCoef(coef: number) {
    this.rewardCoef = coef;
  }

  public earlyBirdReward() {
    return 1;
    // if (this.config.reward.keyType > 0) return 1;
    // const date = new Date();
    // if (date.getHours() < 12) return 3;
    // if (date.getHours() < 16) return 2;
    // return 1;
  }

  public getRewardCoef() {
    return this.rewardCoef * this.earlyBirdReward();
  }

  public getReward() {
    return this.config.reward;
  }

  public refreshTodo() {
    if (this.stats.todoDate === undefined) this.stats.todoDate = this.today();

    if (this.stats.todoDate !== this.today()) {
      this.stats.todoDate = this.today();
      this.stats.progress = 0;
      this.stats.isCompletedUntil = 0;
      this.stats.disabledUntil = 0;
      this.disabledUntil = 0;
      this.progress = 0;
      this.isCompletedUntil = 0;
    }
  }

  public complete() {
    let xpToday = this.deps.persistance.getItem('xp-today', 0);
    xpToday += this.config.reward.xp;
    this.deps.persistance.setItem('xp-today', xpToday);

    //Если игрок набрал 1000 опыта, то ударный режим пополнен новым днем
    if (xpToday >= 5000) Streak.markDoneToday();

    this.progress += this.config.step;
    const prevRang = this.deps.rang.getRang().rang;
    this.deps.rang.addXp(this.getConfig().xp);
    const newRang = this.deps.rang.getRang().rang;

    if (newRang !== prevRang) {
      setTimeout(() => this.deps.rang.congratsOnNewRang(), 300);
    }

    this.stats.progress = this.progress;

    this.disabledUntil = Date.now() + this.config.refreshTime;

    this.stats.disabledUntil = this.disabledUntil;

    if (this.progress < 100) {
      const audio = new Audio(`assets/audio/level-up.m4a`);
      audio.play();
    }

    if (this.progress >= 100) {
      const audio = new Audio(`assets/audio/mission-complete.m4a`);
      audio.play();

      this.deps.storage.addItem(
        keys[this.config.reward.keyType],
        this.config.reward.amount * this.getRewardCoef(),
      );
      this.progress = 0;
      this.stats.progress = this.progress;
      this.isCompletedUntil = Date.now() + this.config.respawnTime;
      this.stats.isCompletedUntil = this.isCompletedUntil;
    }

    const missions = this.deps.persistance.getItem('missions') || [];
    missions[this.config.title] = this.stats;
    this.deps.persistance.setItem('missions', missions);
  }

  public isDisabled() {
    return this.disabledUntil > Date.now();
  }

  public isCompleted() {
    return this.isCompletedUntil > Date.now();
  }

  public getProgress() {
    return this.progress;
  }

  public getRequiredProgress() {
    return this.requiredProgress;
  }

  public loadMissionStats(title: string) {
    if (this.deps.persistance.getItem('missions')) {
      return this.deps.persistance.getItem('missions')[title];
    } else {
      this.deps.persistance.setItem('missions', {});
      return null;
    }
  }

  public init() {
    if (!this.deps.persistance.getItem('missions')) {
      this.deps.persistance.setItem('missions', {});
    }

    const missions = this.deps.persistance.getItem('missions');
    missions[this.config.title] = this.stats;
    this.deps.persistance.setItem('missions', missions);
  }
}

Date.prototype.toISOString = function toIsoString() {
  const date = this;
  var tzo = -date.getTimezoneOffset(),
    dif = tzo >= 0 ? '+' : '-',
    pad = function (num: number) {
      return (num < 10 ? '0' : '') + num;
    };

  return (
    date.getFullYear() +
    '-' +
    pad(date.getMonth() + 1) +
    '-' +
    pad(date.getDate()) +
    'T' +
    pad(date.getHours()) +
    ':' +
    pad(date.getMinutes()) +
    ':' +
    pad(date.getSeconds()) +
    dif +
    pad(Math.floor(Math.abs(tzo) / 60)) +
    ':' +
    pad(Math.abs(tzo) % 60)
  );
};
