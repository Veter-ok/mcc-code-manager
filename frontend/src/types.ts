export interface IBank {
    id: number
    name: string
} 

export interface ICashBack {
    id: number
    bankId: number
    name: string
    mcc: number[]
}