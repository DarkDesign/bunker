import { CardType } from '../CardType';
import { ICard } from '../ICard';
import { IAdditional } from '../interfaces';
import { IAgeRestrictions } from '../interfaces/IAgeRestrictions';

export interface IRooms extends IAgeRestrictions {
  readonly name: string
  readonly status: string
  readonly statuses: string[]
  readonly additionalCards: IAdditional<CardType, ICard>
}
