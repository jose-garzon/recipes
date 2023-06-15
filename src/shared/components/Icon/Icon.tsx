import { TbSearch } from "react-icons/tb";
import { IconBaseProps } from "react-icons";

export interface IconProps extends IconBaseProps {
  type: keyof typeof icons;
}

const icons = {
  search: TbSearch,
};

export function Icon(props: IconProps): JSX.Element {
  const { type, ...rest } = props;
  const SelectIcon = icons[type];
  return <SelectIcon {...rest} />;
}
