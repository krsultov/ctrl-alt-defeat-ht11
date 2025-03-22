"use client"

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import { FilterContext } from '../(contexts)/FilterContext';

export default function SelectAutoWidth() {

    const filter = useContext(FilterContext)

    const handleChange = (value: "5" | "10" | "20" | "50") => {
        filter?.setLastSelect(value)
    }

    return (
        <div>
            <FormControl sx={{ m: 1, width: 0.9 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Last</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={filter?.lastSelect}
                    onChange={(event) => handleChange(event.target.value)}
                    autoWidth
                    label="ammount"
                >
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}
