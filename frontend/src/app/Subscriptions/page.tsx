import {  Typography } from "@mui/material"
import Filter from "../(components)/Filter";

export default function Subscriptions(){

    
    return(
        <div className="w-full">

            <div className="p-10">
                <Typography variant="h5" fontWeight={600}>Subscriptions</Typography>
            </div>

            <Filter/>

        </div>
    );
}