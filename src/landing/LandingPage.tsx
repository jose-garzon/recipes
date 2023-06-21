import { Input } from "../shared/components";
import { Category } from "../shared/components";
import { categoriesSection, title } from "./LandingPage.css";

export function LandingPage() {
  return (
    <>
      <h1 className={title}>Encuentra las mejores recetas</h1>
      <Input id="search-recipes" label="Busqueda" initialIconType="search" />
      <h3>Categorias</h3>
      <section className={categoriesSection}>
        <Category label="Desayuno" />
        <Category label="Almuerzo" />
        <Category label="Cena" />
      </section>
      <h3>Recomendados</h3>
      <h3>Recetas</h3>
    </>
  );
}
