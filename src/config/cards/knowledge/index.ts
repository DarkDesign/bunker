import { CardType, ICard } from '@/core/types';

export const knowledge: ICard[] = [
  {
    type: CardType.Knowledge,
    description: '',
    weight: 1,
    chance: 1,
    isAgeRestrictions: false
  },
].filter(item => item.description !== '')
