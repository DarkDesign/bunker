import { CardType, ICard } from '@/core/types';

export const hobbies: ICard[] = [
  {
    type: CardType.Hobbies,
    description: '',
    weight: 1,
    chance: 1,
    isAgeRestrictions: false
  },
].filter(item => item.description !== '')
