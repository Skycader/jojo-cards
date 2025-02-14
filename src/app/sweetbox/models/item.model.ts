export interface ItemModelInterface {
  title: string;
  image: string; //image of the prize
  sound: string; //path to file with sound
  type:
  | 'food'
  | 'common'
  | 'rare'
  | 'superRare'
  | 'ultraRare'
  | 'premium'
  | 'silver'
  | 'gold'
  | 'legendary';

  chance?: number;
  entity?: 'card';
  amt?: number;
  scale?: number;
  height?: number;
}

export interface CardModelInterface extends ItemModelInterface {
  shadow?: string;
  chance?: number;
  info: string;
  amount: number; //the amount of prize
  isRemoved: boolean; //removed up after seeing the card
  isTaken: boolean; //is the card taken from the package
  isShowingTitle: boolean; //the name of the prize
}
