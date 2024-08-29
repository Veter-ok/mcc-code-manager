import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ICashBack } from '../types'
import { Input } from '../components/ui/Input'
import {searchCashbackByName } from '../utils/cashbackUtils'
import CashbackBlock from '../components/ui/CashbackBlock'
import { findBankByID } from '../utils/bankUtils'
import { BanksContext } from '../App'

const CashbackPage = () => {
    const params = useParams()
    const banks = useContext(BanksContext)
    const [cashbacks, setCashback] = useState([{id: 0, bankId: 0, name: '', mcc: []}])
    const [bank, setBank] = useState({id: 0, name: ''})
    const [currentlyCashBacks, setCurrentlyCashBacks] = useState<ICashBack[]>([{id: 0, bankId: 0, name: '', mcc: []}])
    const [value, setValue] = useState('')
    const [openedCashbackId, setOpenedCashbackId] = useState(-1)

    const fetchCashbacks = async () => {
        await fetch(
          "https://mcc-code-manager-backend.vercel.app/api/v1/cashbacks"
        ).then((response) => response.json())
         .then((data) => {
            setCashback(data)
            setCurrentlyCashBacks(data)
        })
    }

    useEffect(() => {
        const findedBank = findBankByID(banks, Number(params.bankId))
        setBank(findedBank)

        fetchCashbacks()
    }, [banks, params.bankId])

    const searchCashBack = (value: string) => {
        setValue(value)
        const newCashBacks = searchCashbackByName(cashbacks, value)
        setCurrentlyCashBacks(newCashBacks)
    }

    return (
        <div>
            <p className='text-center text-3xl'>{bank.name}</p>
            <div className='flex mx-auto min-w-[300px] w-1/2 justify-center mt-[40px]'>
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