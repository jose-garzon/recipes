import { NavbarItem } from "./NavbarItem";
import { Logo } from "../Logo";

export function Navbar() {
  return (
    <nav className="flex flex-col items-center md:items-start p-4 md:p-8 h-full bg-gray-950 rounded-tr-xl rounded-br-xl">
      <Logo />
      <ul className="mt-14 text-stone-100 text-xl">
        <li>
          <NavbarItem to="/" icon="book">
            Recetas
          </NavbarItem>
        </li>
        <li>
          <NavbarItem to="/calendario" icon="calendar">
            Calendario
          </NavbarItem>
        </li>
        <li>
          <NavbarItem to="/carrito" icon="cart">
            Carrito
          </NavbarItem>
        </li>
      </ul>
    </nav>
  );
}
