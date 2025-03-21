'use client'

import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [ammount, setammount] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setammount(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 0.9 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Last</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={ammount}
          onChange={handleChange}
          autoWidth
          label="ammount"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}