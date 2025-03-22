import { createContext, Dispatch, SetStateAction } from "react";
import { DateRange } from "../(components)/DatePicker";

interface FilterContextType {
    sliderValues: {
        minValue: number,
        maxValue: number
    },
    setSliderValues: Dispatch<SetStateAction<{
        maxValue: number;
        minValue: number;
    }>>,
    sliderCurrent: number[],
    setSliderCurrent: Dispatch<SetStateAction<number[]>>,
    lastSelect: "5" | "10" | "20" | "50",
    setLastSelect: React.Dispatch<React.SetStateAction< "5" | "10" | "20" | "50">>,
    period: DateRange
}

export const FilterContext = createContext<FilterContextType | null>(null)