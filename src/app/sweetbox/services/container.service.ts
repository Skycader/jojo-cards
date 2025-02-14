import { Injectable } from '@angular/core';
import { commonContainer } from '../containers/common.config';
import { ItemModelInterface } from '../models/item.model';
import { ContainerType } from '../models/container.type';

@Injectable({
  providedIn: 'root',
})
export class ContainerService {
  constructor() { }

  public generateContainer(cards: number, containerType: ContainerType) {
    const container: ItemModelInterface[] = [];
    while (cards--) {
      if (containerType === 'common')
        container.push(commonContainer.getRandomElement());
    }
    return container;
  }
}
