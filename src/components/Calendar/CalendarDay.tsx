import { Typography } from "../Typography";
import { CalendarSlot } from "./CalendarSlot";

export interface CaledarDayProps {
  name: string;
}

export function CalendarDay(props: CaledarDayProps) {
  const { name } = props;
  return (
    <div className="flex flex-col gap-4">
      <Typography className="text-center" component="h3" color="text">
        {name}
      </Typography>
      <div className="p-3 border-2 gap-4 border-gray-950 flex-grow rounded-lg grid grid-rows-3">
        <CalendarSlot title="Desayuno" />
        <CalendarSlot title="Almuerzo" />
        <CalendarSlot title="Cena" />
      </div>
    </div>
  );
}
