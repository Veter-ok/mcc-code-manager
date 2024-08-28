import { useContext } from "react"
import BankBlock from "../components/ui/BankBlock"
import { BanksContext } from "../App"

const BanksPage = () => {
  const banks = useContext(BanksContext)

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {banks.map((bank) => 
            <BankBlock key={bank.id} bank={bank}/>
        )}
    </div>
  )
}

export default BanksPage