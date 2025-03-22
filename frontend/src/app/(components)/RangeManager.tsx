'use client'

import { Box,  Divider,  TextField,  Typography } from "@mui/material"
import { useContext, useEffect, useRef } from "react";
import { FilterContext } from "../(contexts)/FilterContext";

export default function RangeManager(){

    const filter = useContext(FilterContext)

    const minTemp = useRef(filter?.sliderValues.minValue.toString())
    const maxTemp = useRef(filter?.sliderValues.maxValue.toString())

    useEffect(() => {
        minTemp.current = filter?.sliderValues.minValue.toString();
        maxTemp.current = filter?.sliderValues.maxValue.toString();
    }, [filter?.sliderValues]);
    
    function handleChangeMin() {
        if (minTemp.current) {
          const newMin = parseInt(minTemp.current);
      
          const newMax = filter!.sliderValues.maxValue;
      
          filter!.setSliderValues({
            minValue: newMin,
            maxValue: newMax,
          });

          filter!.setSliderCurrent([newMin, filter!.sliderCurrent[1]]);
        }
      }
      
      function handleChangeMax() {
        if (maxTemp.current) {
          const newMax = parseInt(maxTemp.current);
      
          const newMin = filter!.sliderValues.minValue;
      
          filter!.setSliderValues({
            minValue: newMin,
            maxValue: newMax,
          });
      
          filter!.setSliderCurrent([filter!.sliderCurrent[0], newMax]);
        }
      }

    return(
        <div >
            
            <Box
                className="flex gap-3"
                component="form"
                id="Field"
                name="Field"
                sx={{width: 1}}
                noValidate
                autoComplete="off"
            >
                <div className="flex gap-2 items-center">
                    <Typography>Min: </Typography>
                        <TextField
                            onKeyDown={(e) => { if (e.key === "Enter") handleChangeMin(); }}
                            defaultValue={minTemp.current}
                            onChange={(e) => { minTemp.current = e.target.value; }}
                            size="small"
                            type="number"
                            sx={{ width: 0.8 }}
                            id="Min"
                        />


                    <Typography>$</Typography>
                </div>
                <div>
                    <Divider orientation="vertical"/>
                </div>
                <div className="flex gap-2 items-center">
                    <Typography>Max: </Typography>
                        <TextField
                            onKeyDown={(e) => { if (e.key === "Enter") handleChangeMax(); }}
                            defaultValue={maxTemp.current}
                            onChange={(e) => { maxTemp.current = e.target.value; }}
                            size="small"
                            type="number"
                            sx={{ width: 0.8 }}
                            id="Min"
                        />
                    <Typography>$</Typography>
                </div>
            </Box>

        </div>
    )
}