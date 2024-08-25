import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { findBankByID } from '../utils/bankUtils'
import { IBank, ICashBack } from '../types'
import { Input } from '../components/ui/Input'
import { findCashbackByBank } from '../utils/cashbackUtils'
import CashbackBack from '../components/ui/CashbackBack'

const CashbackPage = () => {
    const params = useParams()
    const [bank, setBank] = useState<IBank>({id: 0, name: ''})
    const [currentlyCashBacks, setCurrentlyCashBacks] = useState<ICashBack[]>([{id: 0, bankId: 0, name: '', mcc: []}])
    const [value, setValue] = useState('')

    useEffect(() => {
        const findedBank = findBankByID(Number(params.bankId))
        setBank(findedBank)

        const findedCashBacks = findCashbackByBank(Number(params.bankId))
        console.log(findCashbackByBank)
        setCurrentlyCashBacks(findedCashBacks)
    }, [params.bankId])

    return (
        <div>
            <p className='text-center text-3xl'>{bank.name}</p>
            <div className='flex w-full justify-center mt-[40px]'>
                <Input 
                    placeholder='Название cashback-а'
                    value={value} 
                    onChange={setValue}/>
            </div>
            {currentlyCashBacks.map((cashbank) => 
                <CashbackBack key={cashbank.id} cashback={cashbank} />
            )}
        </div>
    )
}

export default CashbackPage