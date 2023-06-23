import { category, categoryImage, categoryName } from "./Category.css";

interface CategoryProps {
  label: string;
  image: string;
}

export function Category(props: CategoryProps) {
  const { label, image } = props;
  return (
    <div className={category}>
      <img className={categoryImage} src={image} alt={label} />
      <span className={categoryName}>{label}</span>
    </div>
  );
}
