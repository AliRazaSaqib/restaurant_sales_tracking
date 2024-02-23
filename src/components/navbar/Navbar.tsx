import { Link } from "react-router-dom";
import navStyles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={navStyles.navbar}>
      <div className={navStyles.container}>
        <div className={navStyles.nav_elements}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-menu">Create Menu</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
