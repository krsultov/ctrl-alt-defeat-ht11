'use client'

import { ReactNode, useState } from "react";
import { FilterContext } from "./FilterContext";

export default function FilterContextProvider({ children }: { children: ReactNode }) {
    const [values, setValues] = useState({ maxValue: 40, minValue: 0 });
    const [amount, setAmount] = useState<"5" | "10" | "20" | "50">("5");
    const [SliderCurrent, setSliderCurrent] = useState<number[]>([0, 40]);

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
            period: {
                startDate: "2025-03-12 00:00",
                endDate: "2025-03-21 00:00"
            }
        }}>
            {children}
        </FilterContext.Provider>
    );
}