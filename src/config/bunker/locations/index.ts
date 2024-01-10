import { Bunker } from '@/core/types';

export const locations: Bunker.ILocation[] = [
    {
        name: '',
        descriptions: [
            {
                text: '',
                additionalCards: {},
                isAgeRestrictions: false
            }
        ].filter(item => item.text !== ''),
        additionalRooms: [
            {
                name: '',
                status: '',
                statuses: [],
                additionalCards: {},
                isAgeRestrictions: false
            }
        ].filter(item => item.name !== ''),
        additionalCards: {},
        isAgeRestrictions: false
    },
    {
        name: 'Кладбище',
        descriptions: [
            {
                text: 'Старый заброшенный бункер, который используется для рабочих нужд. Наличие трупного запаха',
                additionalCards: {},
                isAgeRestrictions: false
            }
        ].filter(item => item.text !== ''),
        additionalRooms: [
            {
                name: '',
                status: '',
                statuses: [],
                additionalCards: {},
                isAgeRestrictions: false
            }
        ].filter(item => item.name !== ''),
        additionalCards: {},
        isAgeRestrictions: false
    },
].filter(item => item.name !== '')
