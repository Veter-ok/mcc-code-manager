import BankBlock from "../components/ui/BankBlock"
import { BANKS } from "../data"

const BanksPage = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {BANKS.map((bank) => 
            <BankBlock key={bank.id} bank={bank}/>
        )}
    </div>
  )
}

export default BanksPage