import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import { IconArrowsExchange,Icon3dCubeSphere, IconBuildingBank } from "@tabler/icons"
const styles = {
  logo_container:'p-5',
  logo:'text-4xl',
  nav_container:'m-0 absolute top-1/2 -translate-y-1/2  ',
  nav:'flex flex-col gap-14 bg-[#15181C] px-4 py-14 rounded-3xl',
  nav_link_active:'flex p-2 bg-yellow-500 rounded-md ',
  nav_link_inactive:'flex p-2 bg-red-500 rounded-md'
}

const links = [
  {
    path:'/cryptocurrencies',
    icon:<IconBuildingBank/>
  },
  {
    path:'/exchanges',
    icon:<IconArrowsExchange/>
  },
  {
    path:'/markets',
    icon:<Icon3dCubeSphere/>
  },
]

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
          {links.map((link) => (
            <NavLink to = {`${link.path}`} key = {link.path} className = {({isActive}) => (isActive ? styles.nav_link_active : styles.nav_link_inactive)} >
              {link.icon}
            </NavLink>
          ))}
        </div>
      </div>      
    </div>
  )
}

export default Sidebar