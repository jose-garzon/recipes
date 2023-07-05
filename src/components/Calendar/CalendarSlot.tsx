import { ReactNode } from "react";
import { Typography } from "../Typography";

export interface CalendarSlotProps {
  title: string;
  element?: ReactNode;
}

export function CalendarSlot(props: CalendarSlotProps) {
  const { title, element } = props;
  return (
    <div className="flex flex-col md:items-center">
      <Typography component="p">{title}</Typography>
      {element}
    </div>
  );
}
