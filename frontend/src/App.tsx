import React, { useState } from "react";
import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom";
import RoutesController from "./routes";
import BottomNavigation from "./components/BottomNavigation";
import Header from "./components/Header";

export const BanksContext = React.createContext([{id: 0, name: ''}])

function App() {
    const [banks, setBanks] = useState([{id: 0, name: ''}])

    const fetchBanks = async () => {
        await fetch(
          "https://mcc-code-manager-backend.vercel.app/api/v1/banks"
        ).then((response) => response.json())
         .then((data) => setBanks(data))
    }

    useEffect(() => {
        fetchBanks()
    }, [])
    
   return (
        <BanksContext.Provider value={banks}>
            <BrowserRouter>
                <Header/>
                <div className='px-8 pt-10 pb-[80px]'>
                    <RoutesController/>
                </div>
                <BottomNavigation/>
            </BrowserRouter>
        </BanksContext.Provider>
       
   )
 }

 export default App