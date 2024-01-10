import { CardType, ICard } from '../types';
import { IAdditional } from '../types/interfaces';

export function mergeAdditionalCards(
    additionalArray: IAdditional<CardType, ICard>[],
): IAdditional<CardType, ICard> {
    const keyArray = Array.from(
        new Set(
            additionalArray
                .map(item => Object.keys(item))
                .flat()
        )
    ) as unknown as CardType[]

    const result: IAdditional<CardType, ICard> = {}

    for (const key of keyArray) {
        if (!(key in result)) result[key] = []
        for (const element of additionalArray) {
            if (key in element) result[key]?.push(...element[key] as ICard[])
        }
    }

    return result
}
