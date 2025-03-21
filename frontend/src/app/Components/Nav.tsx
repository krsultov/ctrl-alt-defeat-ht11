import React from "react"
import Link from "next/link"
import { Box, Button, Typography } from "@mui/material"
const Nav = () => {
    return (
        <div className="flex bg-accent-light justify-between">
            <Typography className="text-3xl">Logo</Typography>
            <Box>
                <Button variant="outlined" color="primary">
                    <Link href={"/Signup"}>Signup</Link>
                </Button>
                <Button variant="contained" color="primary">
                    <Link href={"/Login"}>Login</Link>
                </Button>
            </Box>
        </div>
    )
}

export default Nav
