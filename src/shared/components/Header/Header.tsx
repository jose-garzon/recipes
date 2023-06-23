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
          <Link className={navItem} to="/calendario">
            Calendario
          </Link>
          <Link className={navItem} to="/carrito">
            Carrito de compras
          </Link>
        </ul>
      </nav>
    </header>
  );
}
