import { ItemModelInterface } from '../models/item.model';

const index = [70, 122, 214];
export const premiumCards: ItemModelInterface[] = [
  ...index.map((e) => {
    return {
      title: `${e}`,
      type: 'premium',
      shadow: 'box-shadow: 3px 9px 62px #984c94',
      entity: 'card',
      image: `assets/images/cards/premium/${e}.jpg`,
      sound: 'legendary.m4a',
    } as ItemModelInterface;
  }),
];
