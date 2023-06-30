import { Link } from "react-router-dom";
import { Icon } from "../Icon";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-4 justify-center">
      <Icon type="book" className="text-stone-100" size={32} />
      <span className="text-3xl font-bold text-stone-100 hidden sm:block">
        Recipes
      </span>
    </Link>
  );
}
