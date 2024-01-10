import { Bunker } from '@/core/types';

export const items: Bunker.IItems[] = [
    {
        name: '',
        status: '',
        statuses: [],
        isAgeRestrictions: false
    },
    {
        name: 'Аптечка',
        status: '',
        statuses: [
            '',
            'частично использованная'
        ],
        isAgeRestrictions: false
    },
    {
        name: 'Удочка',
        status: '',
        statuses: [
            'сломанная',
            '',
        ],
        isAgeRestrictions: false
    },
    {
        name: 'Пистолет',
        status: '',
        statuses: [
            'без патронов',
            'с патронами',
        ],
        isAgeRestrictions: false
    },
    {
        name: 'Карта местности',
        status: '',
        statuses: [
            '',
            '',
            'отсутствует 1/3 ',
        ],
        isAgeRestrictions: false
    },
    {
        name: 'Компьютер',
        status: '',
        statuses: [
            '',
            'с доступом в интернет'
        ],
        isAgeRestrictions: false
    },
    {
        name: 'Мини электростанция',
        status: '',
        statuses: [
            ''
        ],
        isAgeRestrictions: false
    },
    {
        name: 'Топор',
        status: '',
        statuses: [
            '',
            'нет ручки'
        ],
        isAgeRestrictions: false
    },
    {
        name: 'Телевизор',
        status: '',
        statuses: [
            '',
            '',
            '',
            '+ 500 фильмов',
            'экран разбит'
        ],
        isAgeRestrictions: false
    },
    {
        name: 'Нож',
        status: '',
        statuses: [
            '',
            '',
            '',
            'тупой'
        ],
        isAgeRestrictions: false
    },
    {
        name: 'Лук со стрелами',
        status: '',
        statuses: [],
        isAgeRestrictions: false
    },
    {
        name: 'Пара раций',
        status: '',
        statuses: [],
        isAgeRestrictions: false
    },
    {
        name: 'Гаечный ключ',
        status: '',
        statuses: [],
        isAgeRestrictions: false
    },
    {
        name: 'Набор инструментов',
        status: '',
        statuses: [
            ''
        ],
        isAgeRestrictions: false
    },
    {
        name: 'Розовый дилдо',
        status: '',
        statuses: [
            '',
            '',
            '',
            '',
            '',
            'использованный'
        ],
        isAgeRestrictions: true
    },
].filter(item => item.name !== '')
