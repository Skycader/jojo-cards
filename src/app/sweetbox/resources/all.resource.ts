import { ItemModelInterface } from '../models/item.model';
import { commonCards } from './common-cards.resource';
import { goldCards } from './gold.resource';
import { legendaryCards } from './legendary.resource';
import { premiumCards } from './premium.resource';
import { rareCards } from './rare-cards.resource';
import { silverCards } from './silver.resource';
import { superRareCards } from './super-rare.resource';
import { ultraRareCards } from './ultra-rare.resource';

export const resourcesList: ItemModelInterface[] = [
  ...commonCards,
  ...rareCards,
  ...superRareCards,
  ...ultraRareCards,
  ...premiumCards,
  ...silverCards,
  ...goldCards,
  ...legendaryCards,
];
