'use client'

import { createContext, Dispatch, SetStateAction } from 'react';
import { DateRange } from "../(components)/DatePicker"; // Assuming you need this interface

interface FilterContextType {
  sliderValues: {
    minValue: number;
    maxValue: number;
  };
  setSliderValues: Dispatch<SetStateAction<{ minValue: number; maxValue: number }>>;
  sliderCurrent: number[];
  setSliderCurrent: Dispatch<SetStateAction<number[]>>;
  lastSelect: "5" | "10" | "20" | "50";
  setLastSelect: Dispatch<SetStateAction<"5" | "10" | "20" | "50">>;
  period: DateRange;
}

export const FilterContext = createContext<FilterContextType | undefined>(undefined);
