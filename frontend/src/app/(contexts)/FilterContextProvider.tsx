// FilterContextProvider.tsx
"use client" // Marks this as a client-side component

import React, { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react"
import { DateRange } from "../(components)/DatePicker" // Adjust path as needed

// Define the types for the filter state
interface FilterContextType {
    sliderValues: {
        minValue: number
        maxValue: number
    }
    setSliderValues: Dispatch<SetStateAction<{ minValue: number; maxValue: number }>>
    sliderCurrent: number[]
    setSliderCurrent: Dispatch<SetStateAction<number[]>>
    lastSelect: "5" | "10" | "20" | "50"
    setLastSelect: Dispatch<SetStateAction<"5" | "10" | "20" | "50">>
    period: DateRange
}

// Create the context with a default value (this can be changed later)
export const FilterContext = createContext<FilterContextType | undefined>(undefined)

// FilterContextProvider component
export default function FilterContextProvider({ children }: { children: ReactNode }) {
    const [values, setValues] = useState({ maxValue: 100, minValue: 0 })
    const [amount, setAmount] = useState<"5" | "10" | "20" | "50">("5")
    const [sliderCurrent, setSliderCurrent] = useState<number[]>([0, 100])

    return (
        <FilterContext.Provider
            value={{
                sliderValues: {
                    minValue: values.minValue,
                    maxValue: values.maxValue
                },
                setSliderValues: setValues,
                sliderCurrent: sliderCurrent,
                setSliderCurrent: setSliderCurrent,
                lastSelect: amount,
                setLastSelect: setAmount,
                period: {
                    startDate: "2025-03-12 00:00",
                    endDate: "2025-03-21 00:00"
                }
            }}
        >
            {children}
        </FilterContext.Provider>
    )
}
