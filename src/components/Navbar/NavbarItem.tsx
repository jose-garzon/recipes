import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Routes } from "../../App";
import { Icon, IconProps } from "../Icon";

interface NavbarItemProps {
  children: ReactNode;
  to: Routes;
  icon: IconProps["type"];
}

export function NavbarItem(props: NavbarItemProps) {
  const { to, children, icon } = props;

  const getSyles = (isActive: boolean) => {
    const base = "text-xl border-b-2 w-full block my-6 flex items-center gap-4";
    const inactive = "text-stone-100 border-transparent";
    const active = "text-amber-500 border-amber-500";
    return isActive ? `${base} ${active}` : `${base} ${inactive}`;
  };

  return (
    <NavLink className={({ isActive }) => getSyles(isActive)} to={to}>
      <Icon type={icon} size={24} />
      <span className="hidden sm:block">{children}</span>
    </NavLink>
  );
}
