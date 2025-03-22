"use client"

import { createContext, useState } from "react"
import { Dayjs } from "dayjs"

export interface FilterState {
    sliderCurrent: number[]
    setSliderCurrent: (values: number[]) => void
    dateRange: [Dayjs | null, Dayjs | null]
    setDateRange: (range: [Dayjs | null, Dayjs | null]) => void
}

export const FilterContext = createContext<FilterState | null>(null)

export function FilterProvider({ children }: { children: React.ReactNode }) {
    const [sliderCurrent, setSliderCurrent] = useState<number[]>([0, 1000]) // Default range
    const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null]>([null, null]) // New date range state

    return (
        <FilterContext.Provider value={{ sliderCurrent, setSliderCurrent, dateRange, setDateRange }}>
            {children}
        </FilterContext.Provider>
    )
}
