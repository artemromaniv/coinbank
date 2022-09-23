import './App.css'
import {Routes, Route} from 'react-router-dom'
import Cryptocurrencies from './components/Cryptocurrencies'
import Sidebar from './components/Sidebar'
import Exchanges from './components/Exchanges'
import Markets from './components/Markets'

const styles = {
  App:'w-full h-screen bg-[#0A0B0E] flex flex-row',
  siedbar_container:'basis-1/8',
  main:'basis-7/8'
}

const  App = () => {

  return (
    <div className={styles.App}>
      <div className={styles.siedbar_container}>
        <Sidebar/>
      </div>
      <div className={styles.main}>
        <Routes>
          <Route path= '/' element = {<Cryptocurrencies/>} />
          <Route path= '/exchanges' element = {<Exchanges/>} />
          <Route path= '/markets' element = {<Markets/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
