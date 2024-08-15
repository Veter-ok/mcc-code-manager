import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { findBankByID } from '../utils/bankUtils'
import { IBank } from '../types/banksType'

const CashbackPage = () => {
    const params = useParams()
    const [bank, setBank] = useState<IBank>({id: 0, name: ''})

    useEffect(() => {
        const findedBank = findBankByID(Number(params.bankId))
        setBank(findedBank)
    }, [params.bankId])

    return (
        <div>
            <p className='text-center text-3xl'>{bank.name}</p>
        </div>
    )
}

export default CashbackPage