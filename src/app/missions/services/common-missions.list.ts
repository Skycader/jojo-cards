import { Injectable } from '@angular/core';
import { Mission } from './mission.class';
import { MissionConfig, MissionsService } from './missions.service';
import { TimeEnum } from '../models/time.list.enum';

@Injectable({
  providedIn: 'root',
})
export class CommonMissions {
  constructor(private mission: MissionsService) {}

  private commonMissions: MissionConfig[] = [
    {
      title:
        '🎁 Выполните все ежедневные миссии в течении суток, чтобы получить эту награду',
      step: 100,
      refreshTime: TimeEnum.DAY,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 1, amount: 3, xp: 10000 },
      autocomplete: true,
    },
    {
      title: '❤️  Отчистить Memos',
      step: 100,
      refreshTime: 0,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 2, xp: 100 },
    },
    {
      title: '❤️  Memos - добавить 1 карточку',
      step: 100,
      refreshTime: 0,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 200 },
      level: '⬜️🔵',
    },
    {
      title: '🇯🇵 1 практика японского языка на дуолинго',
      step: 25,
      refreshTime: TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 120 },
      level: '⬜️🔵',
    },
    {
      title: '🇯🇵 Сделать 1 новый урок японского на дуолинго',
      step: 25,
      refreshTime: TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 200 },
    },
    {
      title: '⛵️ Закончить уровень морязки',
      step: 100,
      refreshTime: TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 1000 },
    },
    {
      title: '💪 Упражнение "Велиосипед" - махи ногами лёжа 100 раз',
      step: 20,
      refreshTime: TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 120 },
    },
    {
      title: '💪 Сделать 10 отжиманий',
      step: 20,
      refreshTime: TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 40 },
    },
    {
      title: '💪 Сделать 20 скручиваний',
      step: 20,
      refreshTime: TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 40 },
    },
    {
      title: '💪 Сделать 10 приседаний',
      step: 20,
      refreshTime: TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 40 },
    },
    {
      title: '🥋 Сделать растяжку ног на кухне',
      step: 20,
      refreshTime: TimeEnum.HOUR,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 40 },
    },
    {
      title: '🥋 Сделать растяжку ног на коврике - с дисками гантелей',
      step: 50,
      refreshTime: TimeEnum.HOUR,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 400 },
    },
    {
      title: '🥋 Растяжка - продольный шпагат на полу',
      step: 50,
      refreshTime: TimeEnum.HOUR,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 400 },
    },
    {
      title: '🥋 Растяжка - поперечный шпагат у стенки',
      level: '110°',
      step: 50,
      refreshTime: TimeEnum.HOUR,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 400 },
    },
    {
      title: '💪 Махи ногами - 20 каждой ногой',
      step: 50,
      refreshTime: 10 * TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 250 },
    },
    {
      title: '💪 100 сжиманий кулаков - с эспандером',
      step: 10,
      refreshTime: 1 * TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 200 },
    },
    {
      title: '💪 2-х минутная тренировка прочности костяшек кулаков',
      step: 20,
      refreshTime: TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 200 },
    },
    {
      title: '🥋 Сделать [1. Широ, 2. Ао] Оби но Ката',
      step: 50,
      refreshTime: 6 * TimeEnum.HOUR,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 2, xp: 400 },
    },
    {
      title: '🧠 Собрать кубик рубика',
      step: 50,
      refreshTime: 3 * TimeEnum.HOUR,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 120 },
    },
    {
      title: '📖 Прочитать 1 главу книги',
      step: 50,
      refreshTime: TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 2, xp: 400 },
    },
    {
      title: '🧑‍💻 Убить демона в Raptorium',
      step: 50,
      refreshTime: TimeEnum.HOUR,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 200 },
    },
    {
      title: '🧑‍💻 Решить случайное regexp задание',
      step: 50,
      refreshTime: TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 400 },
    },
    {
      title: '🍏 Съесть яблоко',
      step: 100,
      refreshTime: TimeEnum.HOUR,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 40 },
    },
    {
      title: '🚿 Принять душ + холодный душ + 100 раз попрыгать',
      step: 50,
      refreshTime: TimeEnum.HOUR,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 250 },
    },
    {
      title: '💪 Тренировка икроножных мышц - 100 раз',
      step: 25,
      refreshTime: 10 * TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 200 },
    },
    {
      title:
        '💪 Тренировка мышц спины с 2 дисками по 2кг - 3 подхода по 20 раз',
      step: 50,
      refreshTime: TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 200 },
    },
    {
      title: '🧠 Решить упражнение по шахматам на lichess.org (всего 10)',
      step: 10,
      refreshTime: 10 * TimeEnum.SECOND,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 100 },
    },
    {
      title: '💪 Упражнения кегеля на 1 ноге по 50 раз, ноги назад 100 раз',
      step: 50,
      refreshTime: TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 400 },
    },
    {
      title: '🍹 Выпить стакан протеина после тренировки',
      step: 100,
      refreshTime: TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 200 },
    },
    {
      title: '💪 Вверх-вниз на коленях x100',
      step: 50,
      refreshTime: TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 200 },
    },
    {
      title: '💪 Держать ноги на весу - вперед и вбок 1 минуту',
      step: 50,
      refreshTime: TimeEnum.MINUTE,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 500 },
    },
    {
      title: '👕 Погладить вещи',
      step: 100,
      refreshTime: TimeEnum.SECOND,
      respawnTime: TimeEnum.DAY,
      reward: { keyType: 0, amount: 1, xp: 1000 },
    },
  ];

  public get(): Mission[] {
    let xp = 0;
    this.commonMissions.forEach(
      (mission) => (xp += mission.reward.xp * (100 / mission.step)),
    );
    return this.commonMissions.map((mission) => this.mission.make(mission));
  }
}
