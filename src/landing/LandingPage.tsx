import { Input } from "../shared/components";
import { title } from "./LandingPage.css";

export function LandingPage() {
  return (
    <>
      <h1 className={title}>Encuentra las mejores recetas</h1>
      <Input id="search-recipes" label="Busqueda" initialIconType="search" />
      <h3>Categorias</h3>
      <h3>Recomendados</h3>
      <h3>Recetas</h3>
    </>
  );
}
