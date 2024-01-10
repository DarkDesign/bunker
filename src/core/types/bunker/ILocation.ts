import { CardType } from '../CardType';
import { ICard } from '../ICard';
import { IAdditional } from '../interfaces';
import { IAgeRestrictions } from '../interfaces/IAgeRestrictions';
import { IDescriptions } from './IDescriptions';
import { IRooms } from './IRooms';

export interface ILocation extends IAgeRestrictions {
  readonly name: string
  readonly descriptions: IDescriptions[]
  additionalRooms: IRooms[]
  additionalCards: IAdditional<CardType, ICard>
}
