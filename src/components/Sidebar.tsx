import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div>
      <div className="logo-container">
        <Link to={'/'} style = {{textDecoration: 'none'}} >
          <span className="logo">
            Coinbank
          </span>
        </Link>
      </div>

      <div className="nav-container">
        <div className="">
          <NavLink to={'/'}>
            Cryptocurrencies
          </NavLink>
        </div>
        <div className="">
          <NavLink to={'/exchanges'}>
            Exchanges
          </NavLink>
        </div>
        <div className="">
          <NavLink to={'/markets'}>
            Markets
          </NavLink>
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar