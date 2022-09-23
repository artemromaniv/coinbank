import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import { IconArrowsExchange,Icon3dCubeSphere, IconBuildingBank } from "@tabler/icons"
const styles = {
  logo_container:'p-5',
  logo:'text-4xl',
  nav_container:'m-0 absolute top-1/2 -translate-y-1/2 ',
  nav:'flex flex-col gap-14 bg-[#15181C] px-6 py-14',
  nav_link_active:'p-0.5 bg-yellow-500',
  nav_link_inactive:'p-0.5 bg-red-500'
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
            <NavLink to={'/'} className = {(isActive) => (isActive ? styles.nav_link_active : styles.nav_link_inactive)} >
              <IconBuildingBank/>
            </NavLink>
          </div>
          <div>
            <NavLink to={'/exchanges'} className = {(isActive) => (isActive ? styles.nav_link_active : styles.nav_link_inactive)} >
              <IconArrowsExchange/>
            </NavLink>
          </div>
          <div>
            <NavLink to={'/markets'} className = {(isActive) => (isActive ? styles.nav_link_active : styles.nav_link_inactive)} >
              <Icon3dCubeSphere/>
            </NavLink>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Sidebar