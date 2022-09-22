import './App.css'
import {Routes, Route} from 'react-router-dom'
import Cryptocurrencies from './components/Cryptocurrencies'
import Sidebar from './components/Sidebar'
import Exchanges from './components/Exchanges'
import Markets from './components/Markets'

const styles = {
  App:'w-full h-full bg-[#0A0B0E] flex',
  siedbar_container:'flex-0.1',
  main:'flex-0.9'
}

const  App = () => {

  return (
    <div className={styles.App}>
      <div className="sidebar-container">
        <Sidebar/>
      </div>
      <div className="main">
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
