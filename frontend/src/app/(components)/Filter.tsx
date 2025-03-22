'use client'

import { Typography } from "@mui/material";
import SelectAutoWidth from "./SelectAutoWidth";
import DatePicker from "./DatePicker";
import RangeSlider from "./RangeSlider";
import { useState } from "react";

export default function Filter() {

    const [itemCount, setItemCount] = useState<number>(0);

    const handleItemCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemCount(Number(event.target.value));
    };

    return (

                <div className="w-full flex justify-center">
                    <div className="bg-[#E6E6E6] flex flex-col border rounded-xl border-transparent w-[90%] px-4">
                        <div className="flex mb-4 justify-start ">
                            <Typography className="p-3" variant="h6" fontWeight={300}>
                                Filters
                            </Typography>
                        </div>
                        <div className="mb-5 pb-3 flex flex-col justify-center items-center w-full">
                            <div className="flex flex-row items-center px-3 w-full gap-4">
                                <div className="w-[40%] flex-1/3 ">
                                    <SelectAutoWidth />
                                </div>
                                <div className="flex flex-1/3 items-center">
                                    <RangeSlider />
                                </div>
                                <div className="flex flex-1/3 items-center">
                                    <DatePicker />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
    );
}