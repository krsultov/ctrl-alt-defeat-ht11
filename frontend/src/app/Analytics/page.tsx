"use client"
import { Button, Card, CardContent, Grid, Typography } from "@mui/material"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import loading from "../(assets)/loading.gif"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"

interface BankingData {
    totalTransactions: number
    totalDeposits: number
    totalWithdrawals: number
    totalRevenue: number
}

const Analytics: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data, setData] = useState<BankingData | null>(null)

    useEffect(() => {
        setTimeout(() => {
            setData({
                totalTransactions: 12543,
                totalDeposits: 8700,
                totalWithdrawals: 3600,
                totalRevenue: 150000
            })
            setIsLoading(false)
        }, 2000)
    }, [])

    const lineChartData = [
        { name: "Jan", transactions: 3000 },
        { name: "Feb", transactions: 4000 },
        { name: "Mar", transactions: 3500 },
        { name: "Apr", transactions: 5000 },
        { name: "May", transactions: 4500 }
    ]

    const barChartData = [
        { name: "Deposits", amount: 8700 },
        { name: "Withdrawals", amount: 3600 },
        { name: "Revenue", amount: 150000 }
    ]

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
                    Banking Analytics
                </Typography>
            </div>

            <Grid container spacing={4} className="mb-8">
                <Grid item xs={12} sm={6} md={3}>
                    <Card className="shadow-lg">
                        <CardContent>
                            <Typography variant="h6" className="text-gray-500">
                                Total Transactions
                            </Typography>
                            <Typography variant="h5" className="text-primary font-bold">
                                {data.totalTransactions}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className="shadow-lg">
                        <CardContent>
                            <Typography variant="h6" className="text-gray-500">
                                Total Deposits
                            </Typography>
                            <Typography variant="h5" className="text-primary font-bold">
                                ${data.totalDeposits}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className="shadow-lg">
                        <CardContent>
                            <Typography variant="h6" className="text-gray-500">
                                Total Withdrawals
                            </Typography>
                            <Typography variant="h5" className="text-primary font-bold">
                                ${data.totalWithdrawals}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card className="shadow-lg">
                        <CardContent>
                            <Typography variant="h6" className="text-gray-500">
                                Total Revenue
                            </Typography>
                            <Typography variant="h5" className="text-primary font-bold">
                                ${data.totalRevenue}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 shadow-lg">
                    <Typography variant="h6" className="text-gray-600 mb-4">
                        Transactions Overview (Line Chart)
                    </Typography>
                    <ResponsiveContainer width="100%" height={250}>
                        <LineChart data={lineChartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="transactions" stroke="#3b82f6" strokeWidth={2} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="bg-white p-6 shadow-lg">
                    <Typography variant="h6" className="text-gray-600 mb-4">
                        Revenue Breakdown (Bar Chart)
                    e</Typography>
                    <ResponsiveContainer width="100%" height={250}>
                        <BarChart data={barChartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="amount" fill="#3b82f6" barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default Analytics
