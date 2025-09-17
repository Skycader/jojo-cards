import { ItemModelInterface } from '../../sweetbox/models/item.model';

export interface CardModelInterface extends ItemModelInterface {
  found?: boolean;
  amount: number;
}
