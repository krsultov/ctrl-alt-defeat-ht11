"use client"

import { Typography } from "@mui/material"
import SelectAutoWidth from "./SelectAutoWidth"
import RangeSlider from "./RangeSlider"
import DatePicker from "./DatePicker"
import { useContext } from "react"
import { FilterContext } from "../(contexts)/FilterContext"

export default function Filter() {
    const filter = useContext(FilterContext)

    return (
        <div className="w-full flex justify-center">
            <div className="bg-[#E6E6E6] flex flex-col border rounded-xl border-transparent w-[90%] px-4">
                <Typography className="p-3" variant="h6" fontWeight={300}>
                    Filters
                </Typography>
                <div className="flex flex-row items-center px-3 w-full gap-4">
                    <SelectAutoWidth />
                    <RangeSlider />
                    <DatePicker />
                </div>
            </div>
        </div>
    )
}
