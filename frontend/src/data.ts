import {ICashBack, IMCCcode } from "./types";

export const CASHBACK:ICashBack[] = [
    {
        id: 0,
        bankId: 0,
        name: '5% транспорт',
        mcc: [0, 1, 2, 3]
    },
    {
        id: 1,
        bankId: 0,
        name: '5% красота',
        mcc: [11, 222]
    }
]

export const MCC_CODES:IMCCcode[] = [
    {
        id: 0,
        value: 4131,
        description: 'Услуги пассажирского транспорта'
    },
    {
        id: 1,
        value: 4729,
        description: '______'
    },
    {
        id: 2,
        value: 4789,
        description: 'Точки, предлагающие услуги по перевозке пассажиров'
    },
    {
        id: 3,
        value: 3990,
        description: 'Точки, относящиеся к экосистеме Яндекс'
    }
]