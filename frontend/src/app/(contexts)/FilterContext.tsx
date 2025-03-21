import { createContext } from "react";
import { RangeStateTypes } from "../(components)/RangeManager"
import { LastSelectType } from "../(components)/SelectAutoWidth";
import { DateRange } from "../(components)/DatePicker";

interface FilterContextType{
    SliderRange: RangeStateTypes | null
    LastSelect: LastSelectType | null
    Period: DateRange | null
}
 
export const FilterContext = createContext<FilterContextType | null>({
    SliderRange: null,
    LastSelect: null,
    Period: null
})