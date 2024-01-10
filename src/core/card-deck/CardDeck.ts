import Rand from 'rand-seed'
import { ICard } from '../types'

export class CardDeck {

    public constructor(
        private readonly random: Rand,
        private items: ICard[] = []
    ) {
    }

    public get(): ICard {
        const randomIndex = this.getRandomIndex(this.items)
        const card = this.items[randomIndex]
        this.items = this.remove(this.items, randomIndex)
        return card
    }

    private remove(arr: readonly ICard[], index: number): ICard[] {
        return arr.filter((item, idx) => idx !== index)
    }

    private getRandomIndex(items: readonly ICard[]): number {
        let total: number = 0
        for (let i = 0; i < items.length; i++) {
            total += items[i].chance
        }

        const randomInt = Math.floor(this.random.next() * total)

        let index = 0;
        for (let s = items[0].chance; s <= randomInt; s += items[index].chance) {
            index++;
        }

        return index
    }
}
