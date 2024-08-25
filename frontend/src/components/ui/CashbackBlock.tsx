import { useEffect, useState } from "react"
import { ICashBack, IMCCcode } from "../../types"
import { findMCCcodeById } from "../../utils/cashbackUtils"

interface ICashbackBlockProps {
    cashback: ICashBack
    openedId: number
    setOpenedId(openedId: number): void
}

const CashbackBlock:React.FC<ICashbackBlockProps> = ({cashback, openedId,setOpenedId}) => {
    const [isOpened, setisOpened] = useState(false)
    const [mccCodes, setMccCodes] = useState<IMCCcode[]>([{id: 0, value: 0, description: ''}])

    const openList = () => {
        if (isOpened){
            setOpenedId(-1)
        }else{
            setOpenedId(cashback.id)
        }
    }

    useEffect(() => {
        if (openedId !== cashback.id){
            setisOpened(false)
        }else{
            setisOpened(true)
            const newMccCodes:IMCCcode[] = []
            for(let i = 0; i < cashback.mcc.length; i++){
                newMccCodes.push(findMCCcodeById(cashback.mcc[i]))
            }
            setMccCodes(newMccCodes)
        }
    }, [cashback.id, cashback.mcc, openedId])

    return (
        <> 
            <div onClick={() => openList()} className="pt-3 flex justify-center w-1/4 h-[60px] border-primary border-4 rounded-md p-2">
                <div className="basis-2/3 text-center">{cashback.name}</div>
                {openedId === cashback.id ?
                <div>close</div>
                :
                <div>open</div>
                }
            </div>
            {openedId === cashback.id ?
            <div className="mt-[-20px] justify-center w-1/4 h-fit border-primary border-4 rounded-md p-2">
                {mccCodes.map((mccCode, index) => 
                    <div key={mccCode.id} className="flex my-[2px]">
                        <div key={index} className="text-center basis-1/3">{mccCode.value}</div>
                        <div>{mccCode.description}</div>
                    </div>
                )}
            </div>
            :
            <></>
            }
        </>
    )
}

export default CashbackBlock