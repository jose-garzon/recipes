import { ButtonPill } from "../../components/Pill";
import { Typography } from "../../components/Typography";

export function Home() {
  return (
    <>
      <Typography component="h1">
        Encuentra y Planifica las Recetas de tu Semana
      </Typography>
      <section className="my-6">
        <Typography component="h2" color="text" size="md">
          Categorias
        </Typography>
        <div className="flex gap-2 mt-4">
          <ButtonPill variant="outlined">Desayuno</ButtonPill>
          <ButtonPill variant="filled">Vegetariano</ButtonPill>
        </div>
      </section>
      <section className="my-6">
        <Typography component="h2" color="text" size="md">
          Recetas
        </Typography>
      </section>
    </>
  );
}
