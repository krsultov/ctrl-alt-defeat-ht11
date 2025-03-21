'use client'

import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateTimeRangePicker } from '@mui/x-date-pickers-pro/DateTimeRangePicker';
import { useRef } from 'react';
import { Dayjs } from 'dayjs';

export interface DateRange {
  startDate: string | undefined,
  endDate: string | undefined
};

export default function BasicDateTimeRangePicker() {
  const value = useRef<[Dayjs | null, Dayjs | null]>(null);

  const dataRange = useRef<DateRange>({startDate: "", endDate: ""})

  function handleChange(newValue: [Dayjs | null, Dayjs | null]) {
    value.current = newValue
    dataRange.current.startDate = newValue[0]?.format("YYYY-MM-DD HH:mm");
    dataRange.current.endDate = newValue[1]?.format("YYYY-MM-DD HH:mm");
    // console.log(dataRange.current)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer sx={{p:0}}  components={['DateTimeRangePicker']}>
        <DateTimeRangePicker onChange={(e) => handleChange(e)} localeText={{ start: 'from', end: 'to' }} />
      </DemoContainer>
    </LocalizationProvider>
  );
}