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
        <div>
          <NavLink to={'/'} className = {(isActive) => (isActive ? 'nav-link-active' : 'nav-link-inactive')} >
            Cryptocurrencies
          </NavLink>
        </div>
        <div>
          <NavLink to={'/exchanges'} className = {(isActive) => (isActive ? 'nav-link-active' : 'nav-link-inactive')} >
            Exchanges
          </NavLink>
        </div>
        <div>
          <NavLink to={'/markets'} className = {(isActive) => (isActive ? 'nav-link-active' : 'nav-link-inactive')} >
            Markets
          </NavLink>
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar