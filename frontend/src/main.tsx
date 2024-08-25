import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RoutesController from './routes'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import BottomNavigation from './components/BottomNavigation'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
      <div className='px-8 pt-10'>
        <RoutesController/>
      </div>
      <BottomNavigation/>
    </BrowserRouter>
  </StrictMode>,
)
