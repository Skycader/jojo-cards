import { ItemModelInterface } from '../models/item.model';

const commonIndex = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 21, 22, 23, 24,
  25, 26, 27, 28, 29, 30, 31, 33, 34, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47,
  48, 50, 51, 54, 56, 57, 58, 59, 61, 62, 63, 65, 66, 67, 68, 69, 73, 74, 76,
  77, 78, 79, 80, 81, 82, 83, 86, 89, 90, 91, 92, 93, 94, 95, 97, 98, 101, 103,
  104, 105, 106, 107, 110, 112, 113, 114, 115, 116, 117, 120, 124, 125, 126,
  127, 128, 151, 253, 384, 468, 557,
];

export const commonCards: ItemModelInterface[] = [
  ...commonIndex.map((e) => {
    return {
      title: `${e}`,
      type: 'common',
      entity: 'card',
      image: `assets/images/cards/common/${e}.jpg`,
      sound: 'prize.m4a',
    } as ItemModelInterface;
  }),
];
