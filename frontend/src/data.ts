import { IBank, ICashBack, IMCCcode } from "./types";

export const BANKS:IBank[] = [
    {
        id: 0,
        name: "Альфа-Банк"
    }, 
    {
        id: 1,
        name: "ВТБ Банк"
    }, 
    {
        id: 2,
        name: "Т-Банк"
    }, 
    {
        id: 3,
        name: "Сбер"
    },
    {
        id: 5,
        name: "Райффайзен банк"
    },
]

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
        description: ''
    },
    {
        id: 1,
        value: 4729,
        description: ''
    },
    {
        id: 2,
        value: 4789,
        description: ''
    },
    {
        id: 3,
        value: 3990,
        description: ''
    }
]