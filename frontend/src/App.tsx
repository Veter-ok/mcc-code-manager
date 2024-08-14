import Header from './components/Header'
import './index.css'
import BanksPage from './pages/BanksPage'

function App() {

  return (
    <>
      <Header/>
      <div className='mx-10 pt-10'>
        <BanksPage/>
      </div>
    </>
  )
}

export default App
