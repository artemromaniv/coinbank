import './App.css'
import {Routes, Route} from 'react-router-dom'
import Cryptocurrencies from './components/Cryptocurrencies'
import Sidebar from './components/Sidebar'
import Exchanges from './components/Exchanges'
import Markets from './components/Markets'

const styles = {
  App:'w-full h-screen background flex flex-row overflow-hidden',
  siedbar_container:'lg:basis-1/12 hidden lg:flex',
  main:'lg:basis-11/12 w-full lg:pt-20'
}

const  App = () => {

  return (
    <div className={styles.App}>
      <div className={styles.siedbar_container}>
        <Sidebar/>
      </div>
      <div className={styles.main}>
        <Routes>
          <Route path= '/cryptocurrencies' element = {<Cryptocurrencies/>} />
          <Route path= '/exchanges' element = {<Exchanges/>} />
          <Route path= '/markets' element = {<Markets/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
