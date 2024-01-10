import { CardType, ICard } from '@/core/types';

export const biology: ICard[] = [
  {
    type: CardType.Biology,
    description: '',
    weight: 1,
    chance: 1,
    isAgeRestrictions: false
  },
].filter(item => item.description !== '')
