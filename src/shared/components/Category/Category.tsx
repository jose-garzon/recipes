interface CategoryProps {
  label: string;
}

export function Category(props: CategoryProps) {
  const { label } = props;
  return (
    <div>
      <img src="" alt="" />
      <span>{label}</span>
    </div>
  );
}
