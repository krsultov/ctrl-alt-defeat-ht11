"use client"

import { Box, Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import React, { useContext, useEffect } from 'react';
import { FilterContext } from '../(contexts)/FilterContext';

function valuetext(value: number) {
    return `${value}°C`
}

const minDistance = 10

export default function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([0, 40]);

  const filter = useContext(FilterContext)

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]])
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)])
        }
    }
  };

  useEffect(() => {
    console.log(filter?.SliderRange?.Min.value)
    console.log(filter?.SliderRange?.Max.value)

  }, [filter?.SliderRange?.Min.value, filter?.SliderRange?.Max.value])

  return (
    <Box component="div" className="flex gap-5" sx={{ width: 300 }}>
        <Typography>Ammount:</Typography>
        <Slider
            min={(filter?.SliderRange?.Min.value) ? filter?.SliderRange?.Min.value : value[0]}
            max={(filter?.SliderRange?.Max.value) ? filter?.SliderRange?.Min.value : value[1]}
            step={10}
            size='small'
            marks
            getAriaLabel={() => 'Minimum distance'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
        />
    </Box>
  );
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
