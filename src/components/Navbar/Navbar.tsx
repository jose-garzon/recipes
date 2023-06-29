import { NavbarItem } from "./NavbarItem";

export function Navbar() {
  return (
    <nav className="p-8 h-full bg-gray-950 rounded-tr-xl rounded-br-xl">
      <span className="text-3xl font-bold text-stone-100">Recipes</span>
      <ul className="mt-14 text-stone-100 text-xl">
        <li>
          <NavbarItem to="/">Recetas</NavbarItem>
        </li>
        <li>
          <NavbarItem to="/calendario">Calendario</NavbarItem>
        </li>
        <li>
          <NavbarItem to="/carrito">Carrito</NavbarItem>
        </li>
      </ul>
    </nav>
  );
}
