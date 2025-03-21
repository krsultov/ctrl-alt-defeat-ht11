"use client"

import { Button, Card, CardContent, Grid, Typography } from "@mui/material"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import loading from "../(assets)/loading.gif"

interface AnalyticsData {
    totalVisitors: number
    totalSignups: number
    totalLogins: number
    conversionRate: number
}

const Analytics: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data, setData] = useState<AnalyticsData | null>(null)

    useEffect(() => {
        setTimeout(() => {
            setData({
                totalVisitors: 5342,
                totalSignups: 2103,
                totalLogins: 4012,
                conversionRate: 39
            })
            setIsLoading(false)
        }, 2000)
    }, [])

    if (isLoading) {
        return (
            <div className="min-h-screen min-w-screen flex justify-center items-center ">
                <div className="flex justify-center items-center">
                    <Image src={loading} alt="Loading..." width={100} height={100} />
                </div>
            </div>
        )
    }

    return (
        <div className="min-w-screen">
            <div className="flex justify-between items-center mb-8">
                <Typography variant="h4" fontWeight={600}>
                    Analytics
                </Typography>
                <div className="flex gap-x-4">
                    <Button variant="outlined" color="primary">
                        Date Range
                    </Button>
                    <Button variant="contained" color="primary">
                        Export
                    </Button>
                </div>
            </div>

            <Grid container spacing={4} className="mb-8">
                <Grid item xs={12} sm={6} md={3}>
                    <Card className="shadow-lg">
                        <CardContent>
                            <Typography variant="h6" className="text-gray-500">
                                Transactions
                            </Typography>
                            <Typography variant="h5" className="text-primary font-bold">
                                {data.totalVisitors}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className="shadow-lg">
                        <CardContent>
                            <Typography variant="h6" className="text-gray-500">
                                Total Signups
                            </Typography>
                            <Typography variant="h5" className="text-primary font-bold">
                                {data.totalSignups}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className="shadow-lg">
                        <CardContent>
                            <Typography variant="h6" className="text-gray-500">
                                Total Logins
                            </Typography>
                            <Typography variant="h5" className="text-primary font-bold">
                                {data.totalLogins}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className="shadow-lg">
                        <CardContent>
                            <Typography variant="h6" className="text-gray-500">
                                Conversion Rate
                            </Typography>
                            <Typography variant="h5" className="text-primary font-bold">
                                {data.conversionRate}%
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 shadow-lg">
                    <Typography variant="h6" className="text-gray-600 mb-4">
                        Traffic Overview (Line Chart)
                    </Typography>
                    <div className="h-64 bg-gray-200 flex items-center justify-center">
                        <span>Line Chart Placeholder</span>
                    </div>
                </div>
                <div className="bg-white p-6 shadow-lg">
                    <Typography variant="h6" className="text-gray-600 mb-4">e</Typography>
                    <div className="h-64 bg-gray-200 flex items-center justify-center">
                        <span>Bar Chart Placeholder</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analytics
