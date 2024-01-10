import { CardType } from '../CardType';
import { ICard } from '../ICard';
import { IAdditional } from '../interfaces';
import { IDescriptions } from './IDescriptions';
import { IItems } from './IItems';
import { ILocation } from './ILocation';
import { IRooms } from './IRooms';

export interface IBunker {
  readonly location: ILocation
  readonly size: number
  readonly duration: string
  readonly description: IDescriptions
  readonly rooms: IRooms[]
  readonly items: IItems[]
  readonly additionalCards: IAdditional<CardType, ICard>
}
