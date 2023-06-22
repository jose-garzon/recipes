import { category, categoryImage } from "./Category.css";

interface CategoryProps {
  label: string;
  image: string;
}

export function Category(props: CategoryProps) {
  const { label, image } = props;
  return (
    <div className={category}>
      <img className={categoryImage} src={image} alt={label} />
      <span>{label}</span>
    </div>
  );
}
