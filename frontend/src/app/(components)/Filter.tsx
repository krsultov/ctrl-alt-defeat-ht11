import { Typography } from "@mui/material";
import SelectAutoWidth from "./SelectAutoWidth";
import RangeSlider from "./RangeSlider";
import RangeManager from "./RangeManager";
import DatePicker from "./DatePicker";

export default function Filter(){
    return(
        <div className="min-w-screen">
            <div className="bg-[#E6E6E6] w-[60%] flex flex-col border rounded-xl border-transparent min-w-screen">

                <div className="flex justify-start ">
                    <Typography className="p-3" variant="h6" fontWeight={300}>
                        Filters
                    </Typography>
                </div>

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

                    <div className="flex flex-col max-w-screen gap-2 items-center">
                        <Typography>Select a time range</Typography>
                        <DatePicker/>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}