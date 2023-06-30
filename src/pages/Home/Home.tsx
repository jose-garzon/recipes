import { Typography } from "../../components/Typography";

export function Home() {
  return (
    <>
      <Typography component="h1">
        Encuentra y Planifica las Recetas de tu Semana
      </Typography>
      <section>
        <Typography component="h2" color="text" size="md">
          Categorias
        </Typography>
      </section>
      <section>
        <Typography component="h2" color="text" size="md">
          Recetas
        </Typography>
      </section>
    </>
  );
}
