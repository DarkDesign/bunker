import { Bunker } from '@/core/types';

export const rooms: Bunker.IRooms[] = [
  {
    name: '',
    status: '',
    statuses: [],
    additionalCards: {},
    isAgeRestrictions: false
  },
  {
    name: 'Мед. кабинет',
    status: '',
    statuses: [
      'в идеальном состоянии',
      'обесточен',
      'на входе электронный замок',
      'оборудование сломано',
      'вход завален',
      'в идеальном состоянии'
    ],
    additionalCards: {},
    isAgeRestrictions: false
  },
  {
    name: 'Склад с оружием',
    status: '',
    statuses: [
      'в идеальном состоянии',
      'на входе электронный замок',
      'всё оружие разобрано для чистки',
      'патронов нет',
      'вход завален',
      'на входе закрытая сейф-дверь',
      'в идеальном состоянии',
    ],
    additionalCards: {},
    isAgeRestrictions: false
  },
  {
    name: 'Мастерская',
    status: '',
    statuses: [
      'в идеальном состоянии',
      'обесточен',
      'на входе электронный замок',
      'оборудование сломано',
      'вход завален',
      'в идеальном состоянии'
    ],
    additionalCards: {},
    isAgeRestrictions: false
  },
  {
    name: 'Лаболатория',
    status: '',
    statuses: [
      'в идеальном состоянии',
      'обесточен',
      'на входе электронный замок',
      'оборудование сломано',
      'вход завален',
      'в идеальном состоянии'
    ],
    additionalCards: {},
    isAgeRestrictions: false
  },
  {
    name: 'Гараж с машиной',
    status: '',
    statuses: [
      'в идеальном состоянии',
      'на входе электронный замок',
      'в машине нет бензина',
      'машина сломана',
      'вход завален',
      'в идеальном состоянии'
    ],
    additionalCards: {},
    isAgeRestrictions: false
  },
  {
    name: 'Библиотека',
    status: '',
    statuses: [
      'в идеальном состоянии',
      'обесточен',
      'после пожара',
      'на входе электронный замок',
      'вход завален',
      'в идеальном состоянии'
    ],
    additionalCards: {},
    isAgeRestrictions: false
  },
  {
    name: 'Кухня',
    status: '',
    statuses: [
      'в идеальном состоянии',
      'обесточен',
      'на входе электронный замок',
      'оборудование сломано',
      'вход завален',
      'в идеальном состоянии'
    ],
    additionalCards: {},
    isAgeRestrictions: false
  },
  {
    name: 'Склад для продуктов',
    status: '',
    statuses: [
      'в идеальном состоянии',
      'обесточен',
      'на входе электронный замок',
      'вход завален',
      'в идеальном состоянии'
    ],
    additionalCards: {},
    isAgeRestrictions: false
  },
  {
    name: 'Тренажёрный зал',
    status: '',
    statuses: [
      'в идеальном состоянии',
      'обесточен',
      'на входе электронный замок',
      'оборудование сломано',
      'вход завален',
      'в идеальном состоянии'
    ],
    additionalCards: {},
    isAgeRestrictions: false
  },
  {
    name: 'Комната отдыха',
    status: '',
    statuses: [
      'в идеальном состоянии',
      'обесточен',
      'на входе электронный замок',
      'вход завален',
      'в идеальном состоянии'
    ],
    additionalCards: {},
    isAgeRestrictions: false
  },
  {
    name: 'Оранжерея',
    status: '',
    statuses: [
      'в идеальном состоянии',
      'обесточен',
      'на входе электронный замок',
      'нет растений (можно использовать под ферму)',
      'вход завален',
      'в идеальном состоянии'
    ],
    additionalCards: {},
    isAgeRestrictions: false
  },
].filter(item => item.name !== '')
