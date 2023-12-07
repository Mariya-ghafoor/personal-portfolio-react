import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

function Navbar() {
  const linkStyles = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active_link}` : styles.link;
  };
  return (
    <nav className={styles.nav}>
      <NavLink className={linkStyles} to="/">
        Home
      </NavLink>
      <NavLink className={linkStyles} to="/techstack">
        TechStack
      </NavLink>
      <NavLink className={linkStyles} to="/contact">
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
