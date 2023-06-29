import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "../../App";

interface NavbarItemProps {
  children: ReactNode;
  to: Routes;
}

export function NavbarItem(props: NavbarItemProps) {
  const { to, children } = props;

  const getSyles = (isActive: boolean) => {
    const base = "text-xl border-b-2 w-full block my-6";
    const inactive = "text-stone-100 border-transparent";
    const active = "text-amber-500 border-amber-500";
    return isActive ? `${base} ${active}` : `${base} ${inactive}`;
  };

  return (
    <NavLink className={({ isActive }) => getSyles(isActive)} to={to}>
      {children}
    </NavLink>
  );
}
