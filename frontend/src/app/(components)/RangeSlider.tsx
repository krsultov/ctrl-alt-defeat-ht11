"use client"

import { Box, Typography } from '@mui/material';
import Slider from '@mui/material/Slider';
import { useContext} from 'react';
import { FilterContext } from '../(contexts)/FilterContext';

function valuetext(value: number) {
    return `${value}°C`
}

const minDistance = 10

export default function RangeSlider() {
  

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
            filter!.setSliderCurrent([Math.min(newValue[0], filter!.sliderCurrent[1] - minDistance), filter!.sliderCurrent[1]])
        } else {
            filter!.setSliderCurrent([filter!.sliderCurrent[0], Math.max(newValue[1], filter!.sliderCurrent[0] + minDistance)])
        }
    }

  return (
    <Box component="div" className="flex gap-5" sx={{ width: 300 }}>
        <Typography>Ammount:</Typography>
        <Slider
            step={10}
            size='small'
            marks
            getAriaLabel={() => 'Minimum distance'}
            value={filter!.sliderCurrent}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            disableSwap
        />
    </Box>
  )}
