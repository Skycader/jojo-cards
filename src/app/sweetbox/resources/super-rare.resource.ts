import { ItemModelInterface } from '../models/item.model';

const index = [20, 35, 49, 52, 60, 72, 102, 134, 211, 219, 222, 225, 235, 585];
export const superRareCards: ItemModelInterface[] = [
  ...index.map((e) => {
    return {
      title: `${e}`,
      type: 'superRare',
      shadow: 'box-shadow: 3px 9px 62px #984c94',
      entity: 'card',
      image: `assets/images/cards/super-rare/${e}.jpg`,
      sound: 'rare.m4a',
    } as ItemModelInterface;
  }),
];
