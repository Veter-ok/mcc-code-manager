import { IBank, ICashBack } from "./types";

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
        mcc: [11, 222]
    },
    {
        id: 1,
        bankId: 0,
        name: '5% красота',
        mcc: [11, 222]
    }
]