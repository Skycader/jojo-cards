import { Injectable } from '@angular/core';
import { ItemModelInterface } from '../../sweetbox/models/item.model';
import { PersistanceService } from '../../common/services/persistance.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private persistance: PersistanceService) {
    if (!persistance.getItem('storage')) {
      persistance.setItem('storage', {});
    }
  }

  getDiverseItems() {
    return Object.values(this.persistance.getItem('storage') || {}).filter(
      (value) => value !== 0,
    ).length;
  }

  addItem(item: ItemModelInterface, amount: number) {
    const storage = this.persistance.getItem('storage');
    if (!storage[item.title]) storage[item.title] = { ...item, amount: 0 };
    storage[item.title].amount += amount;
    if (storage[item.title].amount < 0) storage[item.title].amount = 0;
    this.persistance.setItem('storage', storage);
  }

  getItem(item: ItemModelInterface) {
    const storage = this.persistance.getItem('storage');
    return storage[item.title]?.amount;
  }

  getCards(type: string) {
    const commonCards = Object.values(
      this.persistance.getItem('storage'),
    )?.filter((card: any) => card.entity === 'card' && card.type === type);
    return commonCards;
  }
}
