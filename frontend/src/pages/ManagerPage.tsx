import { useEffect, useState } from 'react'
import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/select'
import { getAllBanksName } from '../utils/bankUtils'

const ManagerPage = () => {
    const [maccCode, setMCCcode] = useState('')
    const [description, setDescription] = useState('')
    const [bank, setBank] = useState('')
    const [banksName, setBanksName] = useState([''])

    useEffect(() => {
        const newBanksName = getAllBanksName()
        setBanksName(newBanksName)
    }, [])

  return (
    <div className='grid justify-center'>
        <form className='max-w-sm mx-auto'>
            <div className='text-xl text-center'>Добавить МСС код</div>
            <Select options={banksName} onChange={setBank}/>
            <Input value={maccCode} onChange={setMCCcode} placeholder='МСС код' style='mt-2'/>
            <Input value={description} onChange={setDescription} placeholder='Описание' style='mt-2'/>
            <button className='justify-center'>Добавить</button>
        </form>
    </div>
  )
}

export default ManagerPage