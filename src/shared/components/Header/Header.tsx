import { Link } from "react-router-dom";
import { navItem, navbar } from "./Header.css";

export function Header() {
  return (
    <header>
      <nav>
        <ul className={navbar}>
          <li className={navItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={navItem}>
            <Link to="/calendar">Calendar</Link>
          </li>
          <li className={navItem}>
            <Link to="/cart">Cart</Link>
          </li>
          <li className={navItem}>
            <Link to="/favorites">Favorite</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
