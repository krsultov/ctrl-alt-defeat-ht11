import React from "react"
import Link from "next/link"
import { Button, Typography } from "@mui/material"

const Nav = () => {
    return (
        <div className="flex bg-accent-light justify-between p-3">
            <Typography variant="h4">
                <span className="text-primary font-bold">identi</span>
                <span className="text-secondary font-bold">Pay</span>
            </Typography>
            <div className="flex gap-x-3">
                <Button variant="outlined" color="primary" component={Link} href="/Signup">
                    Signup
                </Button>
                <Button variant="contained" color="primary" component={Link} href="/Login">
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Nav
