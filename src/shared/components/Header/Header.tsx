import { Link } from "react-router-dom";
import { navItem, navbar } from "./Header.css";
import { Icon } from "..";

export function Header() {
  return (
    <header>
      <nav>
        <ul className={navbar}>
          <Link className={navItem} to="/">
            <Icon type="home" size={20} />
          </Link>
          <Link className={navItem} to="/calendar">
            Calendario
          </Link>
          <Link className={navItem} to="/cart">
            Carrito de compras
          </Link>
          <Link className={navItem} to="/favorites">
            Favoritos
          </Link>
        </ul>
      </nav>
    </header>
  );
}
