'use client'

import { Box,  Divider,  TextField,  Typography } from "@mui/material"
import { useContext, useEffect } from "react";
import { FilterContext } from "../(contexts)/FilterContext";

export default function RangeManager(){

    const filter = useContext(FilterContext)

    useEffect(() => {

    })
    
    function handleChangeMin(value:string | null){
        if(value){
            filter!.setSliderValues({maxValue: filter!.sliderValues.maxValue, minValue: parseInt(value)})
        }
    }

    function handleChangeMax(value:string | null){
        if(value){
            filter!.setSliderValues({maxValue: parseInt(value), minValue: filter!.sliderValues.minValue})
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
                    <TextField defaultValue={filter!.sliderValues.minValue} onChange={(e) => {handleChangeMin(e.currentTarget.value)}} size="small" type="number" sx={{width: 0.8}} id="Min" />
                    <Typography>$</Typography>
                </div>
                <div>
                    <Divider orientation="vertical"/>
                </div>
                <div className="flex gap-2 items-center">
                    <Typography>Max: </Typography>
                    <TextField defaultValue={filter!.sliderValues.maxValue} onChange={(e) => {handleChangeMax(e.currentTarget.value)}} size="small" type="number" sx={{width: 0.8}} id="Max" />
                    <Typography>$</Typography>
                </div>
            </Box>

        </div>
    )
}