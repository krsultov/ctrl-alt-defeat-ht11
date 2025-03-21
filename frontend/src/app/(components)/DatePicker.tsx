'use client'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimeRangePicker } from "@mui/x-date-pickers-pro/DateTimeRangePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";

const today = dayjs()
const tommorow = today.add(1, "day")

export default function ResponsiveDateTimeRangePickers() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={["DateTimeRangePicker"]}
      >
        <DemoItem label="Responsive variant" component="DateTimeRangePicker">
          <DateTimeRangePicker defaultValue={[today, tommorow]} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}