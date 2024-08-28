import { IBank } from "../types";

export const findBankByID = (banks:IBank[], id: number):IBank => {
    for(let i = 0; i < banks.length; i++) {
        if (banks[i].id === id){
            return banks[i]
        }
    }
    return banks[0]
}