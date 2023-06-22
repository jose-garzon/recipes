import { recommendedContainer, recommendedImage } from "./RecommendedCard.css";

interface RecommendedCardProps {
  label: string;
  image: string;
}

export function RecommendedCard(props: RecommendedCardProps) {
  const { label, image } = props;
  return (
    <div className={recommendedContainer}>
      <img className={recommendedImage} src={image} alt={label} />
      <span>{label}</span>
    </div>
  );
}
