import { CaledarWeek } from "../../components/Calendar/CalendarWeek";
import { Input } from "../../components/Input";
import { Typography } from "../../components/Typography";

export function Calendar() {
  return (
    <div className="grid grid-rows-[auto_1fr] h-full">
      <div className="flex justify-between items-center mb-4">
        <Typography component="h1">Calendario</Typography>
        <Input className="w-1/2" icon="search" />
      </div>
      <CaledarWeek />
    </div>
  );
}
