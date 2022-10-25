import { NavLink } from "react-router-dom";
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

const links = [
  {
    path: "",
    icon: <IconBuildingBank />,
  },
  {
    path: "exchanges",
    icon: <IconArrowsExchange />,
  },
  {
    path: "markets",
    icon: <Icon3dCubeSphere />,
  },
];

const Sidebar = () => {
  return (
    <div>
      <div className={styles.nav_container}>
        <div className={styles.nav_button}>
          {links.map((link) => (
            <NavLink
              to={`/${link.path}`}
              key={link.path}
              className={({ isActive }) =>`${styles.nav_link} ${isActive ? 'text-peach' : 'bg-none'}`}
            >
              {link.icon}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
