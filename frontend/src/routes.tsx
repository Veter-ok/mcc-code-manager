import { Route, Routes } from "react-router-dom"
import BanksPage from "./pages/BanksPage"
import CashbackPage from "./pages/CashbackPage"

const RoutesController = () => {
    return (
        <Routes>
            <Route path="/" element={<BanksPage/>}/>
            <Route path="cashback/:bankId" element={<CashbackPage/>}/>
        </Routes>
    )
}

export default RoutesController