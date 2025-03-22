'use client'

import { Typography } from "@mui/material";
import SelectAutoWidth from "./SelectAutoWidth";
import DatePicker from "./DatePicker";
import RangeSlider from "./RangeSlider";
import { FilterContext } from "../(contexts)/FilterContext";
import { useState } from "react";
import RangeManager from "./RangeManager";

export default function Filter() {
    const[values, setValues] = useState({maxValue: 100, minValue: 0})
    const [amount, setAmount] = useState<"5" | "10" | "20" | "50">("5")
    const [SliderCurrent, setSliderCurrent] = useState<number[]>([0, 40]);
    const [itemCount, setItemCount] = useState<number>(0);

    const handleItemCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemCount(Number(event.target.value));
    };

    return (
            <FilterContext.Provider value={{
                sliderValues: {
                    minValue: values.minValue,
                    maxValue: values.maxValue
                },
                setSliderValues: setValues,
                sliderCurrent: SliderCurrent,
                setSliderCurrent: setSliderCurrent,
                lastSelect: amount,
                setLastSelect: setAmount,
                period:{
                    startDate: "2025-03-12 00:00" ,
                    endDate: "2025-03-21 00:00"
                }
            }}>
                <div className="w-full flex justify-center">
                    <div className="bg-[#E6E6E6] flex flex-col border rounded-xl border-transparent max-w-[90%] px-4">
                        <div className="flex mb-4 justify-start ">
                            <Typography className="p-3" variant="h6" fontWeight={300}>
                                Filters
                            </Typography>
                        </div>
                        <div className="mb-5 pb-3 flex flex-col items-center w-full">
                            <div className="flex flex-row items-center">
                                <div className="w-[40%] flex-1/3 sm:">
                                    <SelectAutoWidth />
                                </div>
                                <div className="flex flex-2/3 items-center">
                                    <DatePicker />
                                </div>
                            </div>
                            <div className="flex gap-2 items-center">
                                <div className="flex items-center flex-col sm:flex-row gap-5">
                                    <RangeManager />
                                    <RangeSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FilterContext.Provider>
    );
}