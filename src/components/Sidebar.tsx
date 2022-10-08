import { NavLink } from "react-router-dom"
import { Link } from "react-router-dom"
import { IconArrowsExchange,Icon3dCubeSphere, IconBuildingBank } from "@tabler/icons"
const styles = {
  logo_container:'absolute p-5',
  logo:'text-4xl',
  nav_container:'m-0 absolute top-1/2 -translate-y-1/2  ',
  nav:'flex flex-col gap-14 bg-[#11111B] px-4 py-14 rounded-r-3xl',
  nav_link_active:'text-white flex p-2 bg-gradient-to-br from-[#F72585] to-[#2E354A] rounded-md ',
  nav_link_inactive:'text-white flex p-2 bg-gradient-to-br from-[#6E56FD] to-[#2E354A] rounded-md'
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
            {/* logo will be here later */}
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