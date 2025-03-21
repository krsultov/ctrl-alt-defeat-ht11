import { Typography } from "@mui/material";
import SelectAutoWidth from "./SelectAutoWidth";
import RangeSlider from "./RangeSlider";
import RangeManager from "./RangeManager";
import { DatePicker } from "@mui/x-date-pickers-pro";

export default function Filter(){
    return(
        <div className="flex justify-center ">
            <div className="bg-[#E6E6E6] w-[90%] border rounded-xl border-transparent">
                <Typography variant="h6" fontWeight={300} className="p-3">Filters</Typography>
                <div className="p-3 flex items-center gap-1 w-full">
                    <div className="w-[20%]">
                        <SelectAutoWidth/>
                    </div>

                    <span className="w-[2%]"></span>

                    <div className="flex w-[40%] gap-2 items-center">
                        <div className="flex items-center flex-col">
                            <RangeManager/>
                            <RangeSlider/>
                        </div>
                    </div>

                    <span className="w-[2%]"></span>

                    <div className="flex w-[30%] gap-2">
                        {/* <DatePicker/> */}
                    </div>
                    

                </div>
            </div>
        </div>
    )
}