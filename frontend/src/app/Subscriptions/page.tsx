"use client"

import { Typography } from "@mui/material"
import React from "react"
import Filter from "../(components)/Filter"

const subscriptions = [
    { title: "Netflix Personal HD", price: "7.99$", period: "Monthly" },
    { title: "Spotify Premium", price: "9.99$", period: "Monthly" },
    { title: "Amazon Prime", price: "14.99$", period: "Monthly" },
    { title: "Disney+ Family", price: "10.99$", period: "Monthly" },
    { title: "HBO Max", price: "15.99$", period: "Monthly" },
    { title: "Apple Music", price: "9.99$", period: "Monthly" },
    { title: "YouTube Premium", price: "11.99$", period: "Monthly" },
    { title: "Adobe Creative Cloud", price: "52.99$", period: "Monthly" },
    { title: "PlayStation Plus", price: "59.99$", period: "Yearly" },
    { title: "Xbox Game Pass Ultimate", price: "16.99$", period: "Monthly" },
    { title: "Hulu + Live TV", price: "69.99$", period: "Monthly" },
    { title: "Nintendo Switch Online", price: "3.99$", period: "Monthly" }
]

const SubscriptionGrid: React.FC = () => {
    return (
        <div className="min-w-screen pt-8 px-6">
            <div className="p-10">
                <Typography variant="h5" fontWeight={600}>
                    Subscriptions
                </Typography>
            </div>

            <Filter/>
            <div className="max-h-screen flex px-6 py-8">
                <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {subscriptions.map((sub, index) => (
                            <div
                                key={index}
                                className="p-6 flex flex-col rounded-lg bg-white"
                                style={{
                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
                                }}
                            >
                                <Typography variant="h6" className="font-semibold text-gray-800 ">
                                    {sub.title}
                                </Typography>
                                <Typography variant="subtitle2" className="text-gray-600">
                                    {sub.price} / {sub.period}
                                </Typography>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionGrid
