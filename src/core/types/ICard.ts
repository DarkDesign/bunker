import { CardType } from './index';
import { IAgeRestrictions } from './interfaces/IAgeRestrictions';

export interface ICard extends IAgeRestrictions {
  readonly type: CardType;
  readonly description: string;
  readonly weight: number;
  readonly chance: number;
}
