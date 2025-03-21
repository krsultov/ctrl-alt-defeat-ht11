"use client"

import { Button, Typography } from "@mui/material"
import React from "react"
import Filter from "../(components)/Filter"

const subscriptions = Array(12).fill({
    title: "Netflix Personal HD",
    price: "7.99$",
    period: "Monthly"
})

const SubscriptionGrid: React.FC = () => {
    return (
        <div>
            <div className="p-10">
                <Typography variant="h5" fontWeight={600}>
                    Subscriptions
                </Typography>
            </div>

            <Filter />
            <div className="max-h-screen flex">
                <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {subscriptions.map((sub, index) => (
                            <div
                                key={index}
                                className="p-4 flex flex-col items-center rounded"
                                style={{
                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
                                }}
                            >
                                <Typography variant="h4" className="text-lg font-semibold text-gray-800">
                                    {sub.title}
                                </Typography>
                                <Typography variant="subtitle2" className="text-gray-600">
                                    {sub.price} {sub.period}
                                </Typography>
                                <Button
                                    style={{
                                        backgroundColor: "#8C080F",
                                        color: "#ffffff"
                                    }}
                                >
                                    UNSUBSCRIBE
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubscriptionGrid
