import { ICashBack } from "../../types"

interface ICashbackBlockProps {
    cashback: ICashBack
}

const CashbackBack:React.FC<ICashbackBlockProps> = ({cashback}) => {
    return (
        <div>
            {cashback.name}
        </div>
    )
}

export default CashbackBack