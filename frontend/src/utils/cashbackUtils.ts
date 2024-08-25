import { CASHBACK } from "../data";
import { ICashBack } from "../types";

export const findCashbackByBank = (bankId: number):ICashBack[] => {
    const cashbacks = []
    for(let i = 0; i < CASHBACK.length; i++){
        console.log(CASHBACK[i].bankId, bankId)
        if (CASHBACK[i].bankId === bankId){
            cashbacks.push(CASHBACK[i])
        }
    }
    return cashbacks
}