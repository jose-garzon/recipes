import { Input } from "../shared/components";
import { Category } from "../shared/components";
import {
  categoriesSection,
  landingSection,
  recommendedSection,
  title,
} from "./LandingPage.css";
import breakfastImage from "../assets/breakfast.jpg";
import { RecommendedCard } from "../shared/components/Recommended";

export function LandingPage() {
  return (
    <>
      <h1 className={title}>Encuentra las mejores recetas</h1>
      <Input id="search-recipes" label="Busqueda" initialIconType="search" />
      <section className={landingSection}>
        <h3>Categorias</h3>
        <div className={categoriesSection}>
          <Category label="Desayuno" image={breakfastImage} />
          <Category label="Almuerzo" image={breakfastImage} />
          <Category label="Cena" image={breakfastImage} />
        </div>
      </section>
      <section className={landingSection}>
        <h3>Recomendados</h3>
        <div className={recommendedSection}>
          <RecommendedCard label="Pollo frito" image={breakfastImage} />
          <RecommendedCard label="Pollo frito" image={breakfastImage} />
          <RecommendedCard label="Pollo frito" image={breakfastImage} />
        </div>
      </section>
      <section className={landingSection}>
        <h3>Recetas</h3>
        <div></div>
      </section>
    </>
  );
}
