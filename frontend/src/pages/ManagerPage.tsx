import { useState } from 'react'
import { Input } from '../components/ui/Input'
import { Select } from '../components/ui/select'

const ManagerPage = () => {
    const [maccCode, setMCCcode] = useState('')
    const [bank, setBank] = useState('')

  return (
    <div className='grid justify-center'>
        <form className='max-w-sm mx-auto'>
            <div className='text-xl text-center'>Добавить МСС код</div>
            <Select options={['1', '2']} onChange={setBank}/>
            <Input value={maccCode} onChange={setMCCcode} placeholder='МСС код' style='mt-2'/>
            <Input value={maccCode} onChange={setMCCcode} placeholder='Описание' style='mt-2'/>
            <button className='justify-center'>Добавить</button>
        </form>
    </div>
  )
}

export default ManagerPage