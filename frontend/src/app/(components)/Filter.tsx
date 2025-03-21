import { Typography, TextField } from "@mui/material";
import SelectAutoWidth from "./SelectAutoWidth";
import DatePicker from "./DatePicker";
import RangeSlider from "./RangeSlider";
import { useState } from "react";

export default function Filter() {

    return (
        <div className="w-full flex justify-center">
            <div className="bg-[#E6E6E6] flex flex-col border rounded-xl border-transparent max-w-[95%] px-4 py-4">
                <div className="flex mb-4 justify-start">
                    <Typography className="p-3" variant="h6" fontWeight={300}>
                        Filters
                    </Typography>
                </div>
                <div className="mb-5 pb-3 flex flex-col items-center w-full">
                    <div className="flex flex-row items-center w-full gap-4">
                        <div className="w-[20%]">
                            <TextField
                                label="Last"
                                type="number"
                                value={itemCount}
                                onChange={handleItemCountChange}
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div className="w-[40%]">
                            <RangeSlider />
                        </div>
                        <div className="w-[40%]">
                            <DatePicker />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}