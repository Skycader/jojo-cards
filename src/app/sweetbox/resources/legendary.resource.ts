import { ItemModelInterface } from '../models/item.model';

const index = [119, 133, 186, 200, 232, 233, 239, 667];

export const legendaryCards: ItemModelInterface[] = [
  ...index.map((e) => {
    return {
      title: `${e}`,
      type: 'legendary',
      entity: 'card',
      shadow: 'box-shadow: 3px 9px 32px rgb(204 82 179)',
      image: `assets/images/cards/legendary/${e}.jpg`,
      sound: 'legendary.m4a',
    } as ItemModelInterface;
  }),
];
