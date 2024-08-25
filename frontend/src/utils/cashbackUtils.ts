import { CASHBACK, MCC_CODES } from "../data";
import { ICashBack, IMCCcode } from "../types";

export const findCashbackByBank = (bankId: number):ICashBack[] => {
    const cashbacks = []
    for(let i = 0; i < CASHBACK.length; i++){
        if (CASHBACK[i].bankId === bankId){
            cashbacks.push(CASHBACK[i])
        }
    }
    return cashbacks
}

export const searchCashbackByName = (value: string):ICashBack[] => {
    const cashbacks = []
    for(let i = 0; i < CASHBACK.length; i++){
        if (CASHBACK[i].name.includes(value) || CASHBACK[i].mcc.indexOf(Number(value)) >= 0){
            cashbacks.push(CASHBACK[i])
        }
    }
    return cashbacks
} 

export const findMCCcodeById = (id: number):IMCCcode => {
    for(let i = 0; i < MCC_CODES.length; i++){
        if (MCC_CODES[i].id === id){
            return MCC_CODES[i]
        }
    }
    return MCC_CODES[0]
}