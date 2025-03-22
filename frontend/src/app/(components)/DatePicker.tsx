"use client"

import * as React from "react"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import { LocalizationProvider } from "@mui/x-date-pickers-pro/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs"
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker"
import { Box, Typography } from "@mui/material"
import { useContext, useRef } from "react"
import { FilterContext } from "../(contexts)/FilterContext"

export default function BasicDateTimeRangePicker() {
    const value = useRef<[Dayjs | null, Dayjs | null]>([null, null])

    // Safely get the context value
    const filterContext = useContext(FilterContext)

    if (!filterContext) {
        // If the context is not available, return an error or loading message
        return <Typography>Loading or Error: Context is not available</Typography>
    }

    const { setDateRange } = filterContext

    function handleChange(newValue: [Dayjs | null, Dayjs | null]) {
        value.current = newValue
        // Update the context with selected date range
        setDateRange({
            startDate: newValue[0]?.format("YYYY-MM-DD") || "",
            endDate: newValue[1]?.format("YYYY-MM-DD") || ""
        })
    }

    return (
        <Box component="div" className="flex gap-5" sx={{ width: 350 }}>
            <Typography>Date period:</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer sx={{ p: 0 }} components={["DateTimeRangePicker"]}>
                    <DateRangePicker onChange={handleChange} localeText={{ start: "from", end: "to" }} />
                </DemoContainer>
            </LocalizationProvider>
        </Box>
    )
}
