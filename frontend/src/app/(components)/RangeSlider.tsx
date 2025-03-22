"use client"

import { Box, Typography } from "@mui/material"
import Slider from "@mui/material/Slider"
import { useContext, useEffect, useState } from "react"
import { FilterContext } from "../(contexts)/FilterContext"

const minDistance = 10

export default function RangeSlider() {
    const filter = useContext(FilterContext)

    // Local state to prevent shrinking effect
    const [localValue, setLocalValue] = useState(filter!.sliderCurrent)

    // Sync local state with context when necessary
    useEffect(() => {
        setLocalValue(filter!.sliderCurrent)
    }, [filter!.sliderCurrent])

    const handleChange = (_event: Event, newValue: number | number[], activeThumb: number) => {
        if (!Array.isArray(newValue)) return

        let updatedValues = [...newValue]

        if (activeThumb === 0) {
            updatedValues[0] = Math.min(newValue[0], localValue[1] - minDistance)
        } else {
            updatedValues[1] = Math.max(newValue[1], localValue[0] + minDistance)
        }

        setLocalValue(updatedValues) // Update only the displayed value

        // Update the global slider range without modifying min/max
        setTimeout(() => {
            filter!.setSliderCurrent(updatedValues)
        }, 100)
    }

    return (
        <Box component="div" className="flex gap-5" sx={{ width: 300 }}>
            <Typography>Amount:</Typography>
            <Slider
                min={filter!.sliderValues.minValue} // Static min value
                max={filter!.sliderValues.maxValue} // Static max value
                step={5}
                size="small"
                marks
                value={localValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
                disableSwap
            />
        </Box>
    )
}
