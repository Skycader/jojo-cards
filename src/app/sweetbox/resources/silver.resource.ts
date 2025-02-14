import { ItemModelInterface } from '../models/item.model';

const index = [220];
export const silverCards: ItemModelInterface[] = [
  ...index.map((e) => {
    return {
      title: `${e}`,
      type: 'silver',
      shadow: 'box-shadow: 3px 9px 22px #984c94',
      entity: 'card',
      image: `assets/images/cards/silver/${e}.jpg`,
      sound: 'rare.m4a',
    } as ItemModelInterface;
  }),
];
