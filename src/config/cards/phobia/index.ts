import { CardType, ICard } from '@/core/types';

export const phobia: ICard[] = [
  {
    type: CardType.Phobia,
    description: '',
    weight: 1,
    chance: 1,
    isAgeRestrictions: false
  },
].filter(item => item.description !== '')
