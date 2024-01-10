import { CardType } from '../CardType';
import { ICard } from '../ICard';
import { IAdditional } from '../interfaces';
import { IAgeRestrictions } from '../interfaces/IAgeRestrictions';

export interface IDescriptions extends IAgeRestrictions {
  readonly text: string
  readonly additionalCards: IAdditional<CardType, ICard>
}
