import { NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import {
  IconArrowsExchange,
  Icon3dCubeSphere,
  IconBuildingBank,
} from "@tabler/icons";
const styles = {
  logo_container: "absolute p-5",
  logo: "text-4xl",
  nav_container: "m-0 absolute top-1/2 -translate-y-1/2  ",
  nav_button: "flex flex-col gap-14 bg-[#11111B] px-2 py-8 rounded-r-3xl",
  nav_link: "flex p-2",
  nav_link_active: "text-peach",
  nav_link_inactive: "text-none",
};

const Sidebar = () => {
  return (
    <div>
      <div className={styles.nav_container}>
        <div className={styles.nav_button}>
            <NavLink
              to={''}
              className={({ isActive }) =>`${styles.nav_link} ${isActive ? 'bg-peach' : 'bg-none'}`}
            >
              <IconBuildingBank />
            </NavLink>
            <NavLink
              to={'/exchanges'}
              className={({ isActive }) =>`${styles.nav_link} ${isActive ? 'bg-peach' : 'bg-none'}`}
            >
              <IconArrowsExchange />
            </NavLink>
            <NavLink
              to={'/markets'}
              className={({ isActive }) =>`${styles.nav_link} ${isActive ? 'bg-peach' : 'bg-none'}`}
            >
              <Icon3dCubeSphere />
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
