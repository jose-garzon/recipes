import { CalendarDay } from "./CalendarDay";
import { CalendarDayMobile } from "./CalendarDayMobile";

export interface CaledarWeek {}

const days = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

export function CaledarWeek(props: CaledarWeek) {
  return (
    <>
      <div className="hidden md:grid grid-cols-7 gap-4">
        {days.map((day) => (
          <CalendarDay name={day} />
        ))}
      </div>
      <div className="block md:hidden">
        {days.map((day) => (
          <CalendarDayMobile name={day} />
        ))}
      </div>
    </>
  );
}
