import { DescriptionLabel } from "../DescriptionLabel";
import { Typography } from "../Typography";

export interface RecipeProps {
  name: string;
  portions: number;
  time: string;
  image: string;
}

export function RecipeCard(props: RecipeProps) {
  const { image, name, time, portions } = props;
  return (
    <div className="flex flex-col-reverse p-4 aspect-video md:aspect-square rounded-lg overflow-hidden relative">
      <img
        className="-z-10 w-full h-full object-cover absolute inset-0"
        src={image}
        alt={name}
      />
      <div className="inset-0 absolute -z-[9] bg-gradient-to-t from-slate-950 via-transparent via-60% to-transparent opacity-80"></div>
      <div className="text-stone-100">
        <Typography component="p" color="light">
          {name}
        </Typography>
        <div className="flex justify-between flex-wrap">
          <DescriptionLabel
            color="light"
            icon="clock"
            label={time}
            weight="light"
          />
          <DescriptionLabel
            color="light"
            icon="portion"
            label={`${portions} porciones`}
            weight="light"
          />
        </div>
      </div>
    </div>
  );
}
