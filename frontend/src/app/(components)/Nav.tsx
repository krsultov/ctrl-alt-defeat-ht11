"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button, Typography } from "@mui/material"
import { useScreenWidth } from "../(customhooks)/useScreenWidth"
import TopDrawer from "./TopDrawer"

const Nav: React.FC = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const screenWidth = useScreenWidth()


    useEffect(() => {
        setIsAuth(true)
    }, [])

    return (
        <div className="flex bg-accent-light justify-between p-3">
            <Link href="/">
                <Typography variant="h4">
                    <span className="text-primary font-bold">identi</span>
                    <span className="text-secondary font-bold">Pay</span>
                </Typography>
            </Link>

            {isAuth ? (
                
                screenWidth <= 600 ? (
                    <div>
                        <TopDrawer/>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <Button>
                        <Link href="/Transactions">Transactions</Link>
                      </Button>
                      <Button>
                        <Link href="/Subscriptions">Subscriptions</Link>
                      </Button>
                      <Button>
                        <Link href="/Analytics">Analytics</Link>
                      </Button>
                      <Button>
                        <Link href="/BankAccounts">Bank Accounts</Link>
                      </Button>
                    </div>
                  )
            ) : (
                <div className="flex gap-x-3">
                    <Button variant="outlined" color="primary" component={Link} href="/Login">
                        Login
                    </Button>
                    <Button variant="contained" color="primary" component={Link} href="/Signup">
                        Signup
                    </Button>
                </div>
            )}
        </div>
    )
}

export default Nav
