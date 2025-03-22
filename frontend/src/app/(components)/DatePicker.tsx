'use client'

import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { useRef } from 'react';
import { Dayjs } from 'dayjs';
import { Box, Typography } from '@mui/material';

export interface DateRange {
  startDate: string | undefined,
  endDate: string | undefined
};

export default function BasicDateTimeRangePicker() {
  const value = useRef<[Dayjs | null, Dayjs | null]>(null);

  const dataRange = useRef<DateRange>({startDate: "", endDate: ""})

  function handleChange(newValue: [Dayjs | null, Dayjs | null]) {
    value.current = newValue
    dataRange.current.startDate = newValue[0]?.format("YYYY-MM-DD");
    dataRange.current.endDate = newValue[1]?.format("YYYY-MM-DD");
    console.log(dataRange.current)
  }

  return (
    <Box component="div" className="flex gap-5" sx={{ width: 350 }}>
    <Typography>Date period:</Typography>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer sx={{p:0}}  components={['DateTimeRangePicker']}>
        <DateRangePicker onChange={(e) => handleChange(e)} localeText={{ start: 'from', end: 'to' }} />
      </DemoContainer>
    </LocalizationProvider>
    </Box>
  );
}