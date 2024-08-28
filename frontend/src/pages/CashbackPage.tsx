import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IBank, ICashBack } from '../types'
import { Input } from '../components/ui/Input'
import { findCashbackByBank, searchCashbackByName } from '../utils/cashbackUtils'
import CashbackBlock from '../components/ui/CashbackBlock'
import { findBankByID } from '../utils/bankUtils'
import { BanksContext } from '../App'

const CashbackPage = () => {
    const params = useParams()
    const banks = useContext(BanksContext)
    const [bank, setBank] = useState<IBank>({id: 0, name: ''})
    const [currentlyCashBacks, setCurrentlyCashBacks] = useState<ICashBack[]>([{id: 0, bankId: 0, name: '', mcc: []}])
    const [value, setValue] = useState('')
    const [openedCashbackId, setOpenedCashbackId] = useState(-1)

    useEffect(() => {
        const findedBank = findBankByID(banks, Number(params.bankId))
        setBank(findedBank)

        const findedCashBacks = findCashbackByBank(Number(params.bankId))
        setCurrentlyCashBacks(findedCashBacks)
    }, [banks, params.bankId])

    const searchCashBack = (value: string) => {
        setValue(value)
        const newCashBacks = searchCashbackByName(value)
        setCurrentlyCashBacks(newCashBacks)
    }

    return (
        <div>
            <p className='text-center text-3xl'>{bank.name}</p>
            <div className='flex mx-auto w-1/2 justify-center mt-[40px]'>
                <Input 
                    placeholder='Название cashback-а / МСС-код'
                    value={value} 
                    onChange={searchCashBack}/>
            </div>
            <div className='grid justify-items-center mt-10 gap-8'>
                {currentlyCashBacks.map((cashbank) => 
                    <CashbackBlock key={cashbank.id} cashback={cashbank} openedId={openedCashbackId} setOpenedId={setOpenedCashbackId}/>
                )}
            </div>
        </div>
    )
}

export default CashbackPage