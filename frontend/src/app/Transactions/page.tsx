"use client"

import React, { useState, useEffect, useContext } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    TablePagination
} from "@mui/material"
import { FilterContext } from "../(contexts)/FilterContext"
import dayjs from "dayjs"
import Filter from "../(components)/Filter"

// Transaction type
interface Transaction {
    id: string
    sender: string
    receiver: string
    amount: number
    type: string
    createdAt: string // Stored as ISO string
}

// Dummy data generator
const generateDummyTransactions = (count: number): Transaction[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: `TXN${1000 + i}`,
        sender: `User ${i + 1}`,
        receiver: `User ${i + 2}`,
        amount: parseFloat((Math.random() * 1000).toFixed(1)),
        type: i % 2 === 0 ? "Deposit" : "Withdrawal",
        createdAt: dayjs().subtract(i, "day").toISOString() // Random past dates
    }))
}

export default function Transactions() {
    const filter = useContext(FilterContext)
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    if (!filter) {
        // Context is unavailable
        return <div>Loading or Error: Context is not available</div>
    }

    useEffect(() => {
        setTimeout(() => {
            setTransactions(generateDummyTransactions(50)) // Load 50 transactions
            setLoading(false)
        }, 1000)
    }, [])

    // Debug: Check the current filter state
    console.log("Current Filter:", filter)

    const filteredTransactions = transactions.filter((tx) => {
        const amountInRange = tx.amount >= filter.sliderCurrent[0] && tx.amount <= filter.sliderCurrent[1]

        // Debug: Check if the transaction amount is within range
        console.log("Amount Check:", tx.amount, filter.sliderCurrent[0], filter.sliderCurrent[1], amountInRange)

        const createdAtDate = dayjs(tx.createdAt)
        const dateInRange =
            (!filter.dateRange.startDate || createdAtDate.isAfter(filter.dateRange.startDate)) &&
            (!filter.dateRange.endDate || createdAtDate.isBefore(filter.dateRange.endDate))

        // Debug: Check if the transaction date is within range
        console.log("Date Check:", tx.createdAt, filter.dateRange.startDate, filter.dateRange.endDate, dateInRange)

        return amountInRange && dateInRange
    })

    const paginatedTransactions = filteredTransactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

    return (
        <div className="min-w-screen pt-8 px-6">
            <div className="m-10">
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Transactions
                </Typography>
            </div>

            <div className="my-[5%]">
                <Filter />
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-10">
                    <Typography>Loading...</Typography>
                </div>
            ) : (
                <>
                    <TableContainer component={Paper} sx={{ width: "100%", borderRadius: 2, overflow: "hidden" }}>
                        <Table sx={{ minWidth: "100%" }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Sender</TableCell>
                                    <TableCell>Receiver</TableCell>
                                    <TableCell align="right">Amount ($)</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Created At</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {paginatedTransactions.map((tx) => (
                                    <TableRow key={tx.id}>
                                        <TableCell>{tx.id}</TableCell>
                                        <TableCell>{tx.sender}</TableCell>
                                        <TableCell>{tx.receiver}</TableCell>
                                        <TableCell align="right">${tx.amount.toFixed(2)}</TableCell>
                                        <TableCell>{tx.type}</TableCell>
                                        <TableCell>{dayjs(tx.createdAt).format("YYYY-MM-DD HH:mm")}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={filteredTransactions.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={(_, newPage) => setPage(newPage)}
                        onRowsPerPageChange={(e) => {
                            setRowsPerPage(parseInt(e.target.value, 10))
                            setPage(0)
                        }}
                    />
                </>
            )}
        </div>
    )
}
