import { ItemModelInterface } from '../models/item.model';

const index = [111, 154, 201];

export const goldCards: ItemModelInterface[] = [
  ...index.map((e) => {
    return {
      title: `${e}`,
      type: 'gold',
      shadow: 'box-shadow: 3px 9px 62px #382434',
      entity: 'card',
      image: `assets/images/cards/gold/${e}.jpg`,
      sound: 'legendary.m4a',
    } as ItemModelInterface;
  }),
];
