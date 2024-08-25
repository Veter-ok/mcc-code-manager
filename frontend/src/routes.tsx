import { Route, Routes } from "react-router-dom"
import BanksPage from "./pages/BanksPage"
import CashbackPage from "./pages/CashbackPage"
import ManagerPage from "./pages/ManagerPage"

const RoutesController = () => {
    return (
        <Routes>
            <Route path="/" element={<BanksPage/>}/>
            <Route path="cashback/:bankId" element={<CashbackPage/>}/>
            <Route path="/manager" element={<ManagerPage/>}/>
        </Routes>
    )
}

export default RoutesController