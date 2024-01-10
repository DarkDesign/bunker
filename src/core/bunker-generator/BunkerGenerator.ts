import * as BunkerConfig from '@/config/bunker';
import Rand from 'rand-seed';
import { IBunker, IDescriptions, IItems, ILocation, IRooms } from '../types/bunker';
import { getRandomIndex, getRandomIntInclusive, ItemDeck, mergeAdditionalCards } from '../utils';

export class BunkerGenerator {
    private readonly _locations
    private readonly _descriptions
    private readonly _items
    private readonly _rooms

    public constructor(
        private readonly _random: Rand,
        private readonly _isAgeRestrictions: boolean
    ) {
        this._locations = new ItemDeck<ILocation>(BunkerConfig.locations, _isAgeRestrictions)
        this._descriptions = new ItemDeck<IDescriptions>(BunkerConfig.descriptions, _isAgeRestrictions)
        this._items = new ItemDeck<IItems>(BunkerConfig.items, _isAgeRestrictions)
        this._rooms = new ItemDeck<IRooms>(BunkerConfig.rooms, _isAgeRestrictions)
    }

    public generate(): IBunker {
        const locations = this._locations.get(
            getRandomIndex(this._random, this._locations.length)
        )

        const locationDescriptions = new ItemDeck<IDescriptions>([
            ...locations.descriptions,
            ...this._descriptions.items
        ], this._isAgeRestrictions)

        const locationRooms = new ItemDeck<IRooms>(locations.additionalRooms, this._isAgeRestrictions)

        const description = locationDescriptions.get(
            getRandomIndex(this._random, locationDescriptions.length)
        )


        const items = Array(
            getRandomIntInclusive(this._random, 1, 5)
        ).fill(null).map(_ => {
            const item = this._items.get(
                getRandomIndex(this._random, this._items.length)
            )
            return {
                name: item.name,
                status: item.statuses[
                    getRandomIndex(this._random, item.statuses.length)
                    ],
                statuses: item.statuses,
                isAgeRestrictions: item.isAgeRestrictions
            }
        })

        const roomCount = getRandomIntInclusive(this._random, 1, 5)

        const configRooms = Array(roomCount * 2).fill(null).map(
            _ => this._rooms.get(getRandomIndex(this._random, this._rooms.length))
        )

        const roomCards = new ItemDeck<IRooms>([
            ...configRooms,
            ...locationRooms.items
        ], this._isAgeRestrictions)

        const rooms = Array(
            roomCount
        ).fill(null).map(_ => {
            const room = roomCards.get(
                getRandomIndex(this._random, roomCards.length)
            )

            return {
                name: room.name,
                status: room.statuses[
                    getRandomIndex(this._random, room.statuses.length)
                    ],
                statuses: room.statuses,
                additionalCards: room.additionalCards,
                isAgeRestrictions: room.isAgeRestrictions
            }
        })


        return {
            size: BunkerConfig.size[
                getRandomIndex(this._random, BunkerConfig.size.length)
                ],
            duration: BunkerConfig.duration[
                getRandomIndex(this._random, BunkerConfig.duration.length)
                ],
            location: locations,
            description: description,
            items: items,
            rooms: rooms,
            additionalCards: mergeAdditionalCards([
                locations.additionalCards,
                description.additionalCards,
                ...rooms.map(room => room.additionalCards)
            ])
        }
    }
}
