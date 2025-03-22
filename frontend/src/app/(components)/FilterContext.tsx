"use client"

import { createContext, useState } from "react"

interface FilterContextType {
    sliderValues: { minValue: number; maxValue: number }
    sliderCurrent: number[]
    setSliderCurrent: (value: number[]) => void
    setSliderValues: (value: { minValue: number; maxValue: number }) => void
}

export const FilterContext = createContext<FilterContextType | null>(null)

export default function FilterProvider({ children }: { children: React.ReactNode }) {
    const [sliderValues, setSliderValues] = useState({ minValue: 0, maxValue: 100 })
    const [sliderCurrent, setSliderCurrent] = useState([0, 100])

    return (
        <FilterContext.Provider value={{ sliderValues, sliderCurrent, setSliderCurrent, setSliderValues }}>
            {children}
        </FilterContext.Provider>
    )
}
