import { CardType, ICard } from '@/core/types';

export const action: ICard[] = [
  {
    type: CardType.Action,
    description: '',
    weight: 1,
    chance: 1,
    isAgeRestrictions: false
  },
].filter(item => item.description !== '')
