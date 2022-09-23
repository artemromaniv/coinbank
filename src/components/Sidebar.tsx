import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"

const styles = {
  logo_container:'p-5',
  logo:'text-4xl',
  nav_container:'m-0 absolute top-1/2 -translate-y-1/2 ',
  nav:'flex flex-col gap-14'
}

const Sidebar = () => {
  return (
    <div >
      <div className={styles.logo_container} >
        <Link to={'/'} >
          <span className={styles.logo}>
            coinbank
          </span>
        </Link>
      </div>

      <div className={styles.nav_container}>
        <div className={styles.nav} >
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
    </div>
  )
}

export default Sidebar