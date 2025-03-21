'use client'

import { Box,  Divider,  TextField,  Typography } from "@mui/material"
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { FilterContext } from "../(contexts)/FilterContext";

export interface RangeStateTypes {
    Min:{
        value: number,
        setValue: Dispatch<SetStateAction<number>>
    },
    Max:{
        value: number,
        setValue: Dispatch<SetStateAction<number>>
    }
}

export default function RangeManager(){
    const[minValue, setMinValue] = useState(0);
    const[maxValue, setMaxValue] = useState(100);

    const filter = useContext(FilterContext)

    if(filter){
        filter.SliderRange = {
            Min:{
                value: minValue,
                setValue: setMinValue
            },
            Max:{
                value: maxValue,
                setValue: setMaxValue
            }
        }
    }
    
    function handleChangeMin(value:string | null){
        if(value){
            setMinValue(parseInt(value))
        }
    }

    function handleChangeMax(value:string | null){
        if(value){
            setMaxValue(parseInt(value))
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
                    <TextField onChange={(e) => {handleChangeMin(e.currentTarget.value)}} size="small" type="number" sx={{width: 0.8}} id="Min" />
                    <Typography>$</Typography>
                </div>
                <div>
                    <Divider orientation="vertical"/>
                </div>
                <div className="flex gap-2 items-center">
                    <Typography>Max: </Typography>
                    <TextField onChange={(e) => {handleChangeMax(e.currentTarget.value)}} size="small" type="number" sx={{width: 0.8}} id="Max" />
                    <Typography>$</Typography>
                </div>
            </Box>

        </div>
    )
}