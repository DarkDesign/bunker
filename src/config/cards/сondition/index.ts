import { CardType, ICard } from '@/core/types';

export const condition: ICard[] = [
  {
    type: CardType.Condition,
    description: '',
    weight: 1,
    chance: 1,
    isAgeRestrictions: false
  },
].filter(item => item.description !== '')
