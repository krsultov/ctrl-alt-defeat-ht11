"use client"

import { Box, Typography } from "@mui/material"
import Slider from "@mui/material/Slider"
import React from "react"

function valuetext(value: number) {
    return `${value}°C`
}

const minDistance = 10

export default function RangeSlider() {
    const [value, setValue] = React.useState<number[]>([0, 40])

    const handleChange = (event: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) {
            return
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]])
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)])
        }
    }

    return (
        <Box component="div" className="flex gap-5" sx={{ width: 300 }}>
            <Typography>Amount:</Typography>
            <Slider
                step={10}
                size="small"
                marks
                style={{ color: "#1B4965" }}
                getAriaLabel={() => "Minimum distance"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            />
        </Box>
    )
}
