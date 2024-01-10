import { CardType, ICard } from '@/core/types';

export const health: ICard[] = [
  {
    type: CardType.Health,
    description: '',
    weight: 1,
    chance: 1,
    isAgeRestrictions: false
  },
].filter(item => item.description !== '')
