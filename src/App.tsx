import './App.css'
import {Routes, Route} from 'react-router-dom'
import Cryptocurrencies from './components/Cryptocurrencies'
import Sidebar from './components/Sidebar'
import Exchanges from './components/Exchanges'
import Markets from './components/Markets'

const  App = () => {

  return (
    <div className="App">
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
