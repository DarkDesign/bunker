import { IAgeRestrictions } from '../types/interfaces/IAgeRestrictions';

export class ItemDeck<Item extends IAgeRestrictions> {
    private _items: Item[]

    public constructor(
        items: Item[],
        isAgeRestrictions: boolean
    ) {
        this._items = isAgeRestrictions
            ? items.filter(item => !item.isAgeRestrictions)
            : items
    }

    public get items(): Item[] {
        return this._items.slice(0)
    }

    public get length(): number {
        return this._items.length
    }

    public get(index: number): Item {
        if (index < 0 || index > this._items.length) return this._items[0]
        const item = this._items[index]
        this._items = this._items.filter((item, idx) => idx !== index)
        return item
    }
}
