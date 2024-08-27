import { BANKS } from "../data";
import { IBank } from "../types";

export const findBankByID = (id: number):IBank => {
    for(let i = 0; i < BANKS.length; i++) {
        if (BANKS[i].id === id){
            return BANKS[i]
        }
    }
    return BANKS[0]
}

export const getAllBanksName = ():string[] => {
    const names = []
    for(let i = 0; i < BANKS.length; i++) {
        names.push(BANKS[i].name)
    }
    return names
}