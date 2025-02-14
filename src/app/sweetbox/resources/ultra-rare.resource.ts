import { ItemModelInterface } from '../models/item.model';

const index = [
  44, 53, 55, 71, 84, 96, 109, 135, 141, 155, 170, 173, 197, 203, 427,
];
export const ultraRareCards: ItemModelInterface[] = [
  ...index.map((e) => {
    return {
      title: `${e}`,
      type: 'ultraRare',
      entity: 'card',
      image: `assets/images/cards/ultra-rare/${e}.jpg`,
      sound: 'rare.m4a',
    } as ItemModelInterface;
  }),
];
