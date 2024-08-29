import { MCC_CODES } from "../data";
import { ICashBack, IMCCcode } from "../types";

export const findCashbackByBank = (cashbacks:ICashBack[], bankId: number):ICashBack[] => {
    const newCashbacks = []
    for(let i = 0; i < cashbacks.length; i++){
        if (cashbacks[i].bankId === bankId){
            newCashbacks.push(cashbacks[i])
        }
    }
    return newCashbacks
}

export const searchCashbackByName = (cashbacks:ICashBack[], value: string):ICashBack[] => {
    const newCashbacks = []
    for(let i = 0; i < cashbacks.length; i++){
        if (cashbacks[i].name.includes(value) || cashbacks[i].mcc.indexOf(Number(value)) >= 0){
            newCashbacks.push(cashbacks[i])
        }
    }
    return newCashbacks
} 

export const findMCCcodeById = (id: number):IMCCcode => {
    for(let i = 0; i < MCC_CODES.length; i++){
        if (MCC_CODES[i].id === id){
            return MCC_CODES[i]
        }
    }
    return MCC_CODES[0]
}