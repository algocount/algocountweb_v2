import { NavLink } from 'react-router-dom'
import styles from './header.module.css'


const NavItem = (props) => {
  return (
        <NavLink className={`nav-link ${styles.NavItem}`} to={`/${props.children.toLowerCase() === "home" ? "" : props.children.toLowerCase()}`}>
            {props.children}
        </NavLink>
  );
};

export default NavItem;
