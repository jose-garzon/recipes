import { Pill } from "../Pill";
import { Typography } from "../Typography";
import { CaledarDayProps } from "./CalendarDay";
import { CalendarSlot } from "./CalendarSlot";

export function CalendarDayMobile(props: CaledarDayProps) {
  const { name } = props;

  return (
    <div>
      <Typography className=" md:text-center my-2" component="h3" color="text">
        {name}
      </Typography>
      <div className="border-2 border-gray-950 rounded-xl p-2">
        <CalendarSlot
          title="Desayuno"
          element={<Pill variant="filled">Pollo frito</Pill>}
        />
        <CalendarSlot title="Almuerzo" />
        <CalendarSlot title="Cena" />
      </div>
    </div>
  );
}
