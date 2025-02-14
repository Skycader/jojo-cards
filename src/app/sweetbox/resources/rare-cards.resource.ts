import { ItemModelInterface } from '../models/item.model';

const rareIndex = [
  11, 17, 32, 36, 64, 75, 85, 87, 88, 99, 100, 108, 123, 130, 138, 140, 143,
  144, 146, 156, 159, 162, 172, 178, 182, 188, 195, 196, 198, 204, 206, 208,
  217, 218, 223, 229, 231, 548, 658,
];

export const rareCards: ItemModelInterface[] = [
  ...rareIndex.map((e) => {
    return {
      title: `${e}`,
      type: 'rare',
      shadow: 'box-shadow: 3px 9px 62px #772464',
      entity: 'card',
      image: `assets/images/cards/rare/${e}.jpg`,
      sound: 'rare.m4a',
    } as ItemModelInterface;
  }),
];
