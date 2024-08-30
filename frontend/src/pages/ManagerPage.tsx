import { FormEvent, useContext, useEffect, useState } from 'react'
import { Input, MCCcodeInput } from '../components/ui/Input'
import { Select } from '../components/ui/Select'
import { IMCCcode } from '../types'
import { findCashbackByBank } from '../utils/cashbackUtils'
import { BanksContext, CashbacksContext } from '../App'

const ManagerPage = () => {
    const banks = useContext(BanksContext)
    const cashbacks = useContext(CashbacksContext)
    const [mccCode, setMCCcode] = useState('')
    const [description, setDescription] = useState('')
    const [bank, setBank] = useState(banks[0].id)
    const [cashBack, setCashback] = useState(0)
    const [allCashBacks, setAllCashbacks] = useState([{id: 0, bankId: 0, name: '', mcc: [0]}])

    useEffect(() => {
        const newAllCashBacks = findCashbackByBank(cashbacks, bank)
        setAllCashbacks(newAllCashBacks)
    }, [bank, cashbacks])

    const addNewMCCcode = (event: FormEvent) => {
        event.preventDefault()
        const mcc_code:IMCCcode = {
            id: 100000,
            value: Number(mccCode),
            description: description
        }
        console.log(mcc_code, cashBack)
    }

  return (
    <div className='grid justify-center'>
        <form onSubmit={(e) => addNewMCCcode(e)} className='max-w-sm mx-auto'>
            <div className='text-xl text-center'>Добавить МСС код</div>
            <Select options={banks} onChange={setBank}/>
            <Select options={allCashBacks} onChange={setCashback}/>
            <MCCcodeInput value={mccCode} onChange={setMCCcode} placeholder='МСС код' style='mt-2'/>
            <Input value={description} onChange={setDescription} placeholder='Описание' style='mt-2'/>
            <button type='submit' className='justify-center'>Добавить</button>
        </form>
    </div>
  )
}

export default ManagerPage