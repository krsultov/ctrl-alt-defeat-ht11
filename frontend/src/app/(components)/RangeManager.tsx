'use client'

import { Box,  Divider,  TextField,  Typography } from "@mui/material"

export default function RangeManager(){


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
                    <TextField size="small" type="number" sx={{width: 0.8}} id="Min" />
                    <Typography>$</Typography>
                </div>
                <div>
                    <Divider orientation="vertical"/>
                </div>
                <div className="flex gap-2 items-center">
                    <Typography>Max: </Typography>
                    <TextField size="small" type="number" sx={{width: 0.8}} id="Max" />
                    <Typography>$</Typography>
                </div>
            </Box>

        </div>
    )
}