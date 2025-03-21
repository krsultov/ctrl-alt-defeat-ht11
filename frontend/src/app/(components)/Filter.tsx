import { Typography } from "@mui/material";
import SelectAutoWidth from "./SelectAutoWidth";
import RangeManager from "./RangeManager";
import DatePicker from "./DatePicker";
import RangeSlider from "./RangeSlider";

export default function Filter() {

    return (
        <div className="w-full flex justify-center">
            <div className="bg-[#E6E6E6] flex flex-col border rounded-xl border-transparent max-w-[90%] px-4">
                <div className="flex mb-4 justify-start ">
                    <Typography className="p-3" variant="h6" fontWeight={300}>
                        Filters
                    </Typography>
                </div>
                <div className="mb-5 pb-3 flex flex-col items-center w-full">
                    <div className="flex flex-row items-center">
                        <div className="w-[40%] flex-1/3 sm:">
                            <SelectAutoWidth />
                        </div>
                        <div className="flex flex-2/3 items-center">
                            <DatePicker />
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="flex items-center flex-col sm:flex-row gap-5">
                            <RangeManager />
                            <RangeSlider />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}