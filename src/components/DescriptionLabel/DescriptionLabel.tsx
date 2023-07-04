import { Icon, IconProps } from "../Icon";
import { Typography, TypographyProps } from "../Typography";

export interface DescriptionLabelProps {
  label: string;
  icon: IconProps["type"];
  color?: TypographyProps["color"];
  weight?: TypographyProps["weight"];
}

export function DescriptionLabel(props: DescriptionLabelProps) {
  const { label, icon, color, weight } = props;
  return (
    <div className="flex gap-2">
      <Icon type={icon} />
      <Typography weight={weight} color={color} component="small">
        {label}
      </Typography>
    </div>
  );
}
