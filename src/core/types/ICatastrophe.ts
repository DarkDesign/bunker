import { CardType } from './CardType'
import { ICard } from './ICard'
import { IAdditional } from './interfaces'
import { IAgeRestrictions } from './interfaces/IAgeRestrictions';

export interface ICatastrophe extends IAgeRestrictions {
  readonly name: string
  readonly description: string
  readonly afterLeaving: string
  readonly additionalCards: IAdditional<CardType, ICard>
}
