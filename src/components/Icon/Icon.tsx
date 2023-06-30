import {
  TbBook,
  TbCalendarEvent,
  TbShoppingCart,
  TbSearch,
  TbClockHour9,
  TbCoffee,
} from "react-icons/tb";

import { IconBaseProps } from "react-icons";

const iconsList = {
  book: TbBook,
  calendar: TbCalendarEvent,
  cart: TbShoppingCart,
  search: TbSearch,
  clock: TbClockHour9,
  portion: TbCoffee,
};

export interface IconProps extends IconBaseProps {
  type: keyof typeof iconsList;
}

export function Icon(props: IconProps) {
  const { type, className, ...rest } = props;
  const Icon = iconsList[type];
  return <Icon className={`flex-shrink-0 ${className}`} {...rest} />;
}
