import { CardType, ICard } from '@/core/types';

export const baggage: ICard[] = [
  {
    type: CardType.Baggage,
    description: '',
    weight: 1,
    chance: 1,
    isAgeRestrictions: false
  },
].filter(item => item.description !== '')
