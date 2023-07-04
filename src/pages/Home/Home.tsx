import { ButtonPill } from "../../components/Pill";
import { RecipeCard } from "../../components/RecipeCard";
import { Typography } from "../../components/Typography";

import defaultImage from "../../assets/img/recipe-default.jpg";
import { Input } from "../../components/Input";

export function Home() {
  return (
    <>
      <Typography component="h1">
        Encuentra y Planifica las Recetas de tu Semana
      </Typography>
      <section className="my-4 md:my-6">
        <Typography component="h2" color="text" size="md">
          Categorias
        </Typography>
        <div className="flex gap-2 mt-2 md:mt-4">
          <ButtonPill variant="outlined">Desayuno</ButtonPill>
          <ButtonPill variant="filled">Vegetariano</ButtonPill>
        </div>
      </section>
      <Input label="Search" icon="search" className="w-full lg:w-1/2" />
      <section className="my-4 md:my-6">
        <Typography component="h2" color="text" size="md">
          Recetas
        </Typography>
        <div className="mt-2 md:mt-4 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
          <RecipeCard
            image={defaultImage}
            name="Pollo frito"
            portions={4}
            time="30 mins"
          />
          <RecipeCard
            image={defaultImage}
            name="Pollo frito"
            portions={4}
            time="30 mins"
          />
          <RecipeCard
            image={defaultImage}
            name="Pollo frito"
            portions={4}
            time="30 mins"
          />
          <RecipeCard
            image={defaultImage}
            name="Pollo frito"
            portions={4}
            time="30 mins"
          />
        </div>
      </section>
    </>
  );
}
