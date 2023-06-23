import { Icon } from "..";
import {
  metadataText,
  nameText,
  recipeImage,
  recipeMetadata,
} from "./RecipeCard.css";

interface RecipeCardProps {
  name: string;
  servings: string;
  perparationTime: string;
  image: string;
}

export function RecipeCard(props: RecipeCardProps) {
  const { name, image, servings, perparationTime } = props;
  return (
    <div>
      <img className={recipeImage} src={image} alt={name} />
      <div className={recipeMetadata}>
        <span className={nameText}>{name}</span>
        <span title="porciones" className={metadataText}>
          <Icon type="servings" />
          {servings}
        </span>
        <span title="tiempo de preparación" className={metadataText}>
          <Icon type="clock" />
          {perparationTime}
        </span>
      </div>
    </div>
  );
}
