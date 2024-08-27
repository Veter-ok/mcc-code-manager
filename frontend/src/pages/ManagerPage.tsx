import { useEffect, useState } from 'react'
import { Input, MCCcodeInput } from '../components/ui/Input'
import { Select } from '../components/ui/select'
import { getAllBanksName } from '../utils/bankUtils'
import { IMCCcode } from '../types'
import { BANKS, CASHBACK } from '../data'
import { findCashbackByBank } from '../utils/cashbackUtils'

const ManagerPage = () => {
    const [mccCode, setMCCcode] = useState('')
    const [description, setDescription] = useState('')
    const [bank, setBank] = useState(BANKS[0].id)
    const [cashBack, setCashback] = useState(0)
    const [allCashBacks, setAllCashbacks] = useState([{id: 0, bankId: 0, name: '', mcc: [0]}])

    useEffect(() => {
        const newAllCashBacks = findCashbackByBank(bank)
        setAllCashbacks(newAllCashBacks)
    }, [bank])

    const addNewMCCcode = () => {
        const mcc_code:IMCCcode = {
            id: 100000,
            value: Number(mccCode),
            description: description
        }
    }

  return (
    <div className='grid justify-center'>
        <form className='max-w-sm mx-auto'>
            <div className='text-xl text-center'>Добавить МСС код</div>
            <Select options={BANKS} onChange={setBank}/>
            <Select options={allCashBacks} onChange={setCashback}/>
            <MCCcodeInput value={mccCode} onChange={setMCCcode} placeholder='МСС код' style='mt-2'/>
            <Input value={description} onChange={setDescription} placeholder='Описание' style='mt-2'/>
            <button className='justify-center'>Добавить</button>
        </form>
    </div>
  )
}

export default ManagerPage