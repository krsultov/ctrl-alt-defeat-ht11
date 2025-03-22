"use client"

import React, { useState, useEffect } from "react"
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
import Image from "next/image"
import { styled } from "@mui/material/styles"
import Filter from "../(components)/Filter"
import loading2 from "../(assets)/loading.gif"

// Styled components
const StyledTableCell = styled(TableCell)(() => ({
    fontWeight: "bold",
    backgroundColor: "#f5f5f5",
    borderBottom: "1px solid #ddd",
    padding: "16px"
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": { backgroundColor: theme.palette.action.hover },
    "&:hover": { backgroundColor: "#f0f0f0" }
}))

// Transaction type for TypeScript
interface Transaction {
    id: string
    sender: string
    receiver: string
    amount: number
    type: string
    metadata: Record<string, any>
    status: string
    signature: string
    createdAt: string
    completedAt: string | null
}

// Dummy Transactions Data
const generateDummyTransactions = (count: number): Transaction[] => {
    return Array.from({ length: count }, (_, i) => ({
        id: `TXN${1000 + i}`,
        sender: `User ${i + 1}`,
        receiver: `User ${i + 2}`,
        amount: parseFloat((Math.random() * 1000).toFixed(2)),
        type: i % 2 === 0 ? "Deposit" : "Withdrawal",
        metadata: { note: "Sample transaction" },
        status: i % 3 === 0 ? "Pending" : "Completed",
        signature: `SIG-${i + 100}`,
        createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(), // Random past date
        completedAt: i % 3 === 0 ? null : new Date().toISOString()
    }))
}

export default function Transactions() {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    // Filter states
    const [amountRange, setAmountRange] = useState<number[]>([0, 1000])
    const [selectedType, setSelectedType] = useState<string | null>(null)
    const [selectedDate, setSelectedDate] = useState<string | null>(null)

    // Fetch transactions
    useEffect(() => {
        setTimeout(() => {
            setTransactions(generateDummyTransactions(50))
            setLoading(false)
        }, 1000)
    }, [])

    // Handle filter updates
    const handleAmountChange = (newRange: number[]) => setAmountRange(newRange)
    const handleTypeChange = (type: string) => setSelectedType(type)
    const handleDateChange = (date: string) => setSelectedDate(date)

    // Filter transactions
    const filteredTransactions = transactions.filter(
        (tx) =>
            tx.amount >= amountRange[0] &&
            tx.amount <= amountRange[1] &&
            (!selectedType || tx.type === selectedType) &&
            (!selectedDate || tx.createdAt >= selectedDate) // Date filter
    )

    // Pagination
    const paginatedTransactions = filteredTransactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    const handleChangePage = (_event: unknown, newPage: number) => setPage(newPage)
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    return (
        <div className="min-w-screen pt-8 px-6">
            <div className="m-10">
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                    Transactions
                </Typography>
            </div>

            <div className="my-[5%]">
                <Filter
                    onPriceChange={handleAmountChange}
                    onPeriodChange={handleTypeChange}
                    onDateChange={handleDateChange}
                />
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-10">
                    <Image src={loading2} alt="loading..." width={50} height={50} />
                </div>
            ) : (
                <>
                    <TableContainer component={Paper} sx={{ width: "100%", borderRadius: 2, overflow: "hidden" }}>
                        <Table sx={{ minWidth: "100%" }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>ID</StyledTableCell>
                                    <StyledTableCell>Sender</StyledTableCell>
                                    <StyledTableCell>Receiver</StyledTableCell>
                                    <StyledTableCell align="right">Amount ($)</StyledTableCell>
                                    <StyledTableCell>Type</StyledTableCell>
                                    <StyledTableCell>Metadata</StyledTableCell>
                                    <StyledTableCell>Status</StyledTableCell>
                                    <StyledTableCell>Signature</StyledTableCell>
                                    <StyledTableCell>Created At</StyledTableCell>
                                    <StyledTableCell>Completed At</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {paginatedTransactions.map((tx) => (
                                    <StyledTableRow key={tx.id}>
                                        <TableCell>{tx.id}</TableCell>
                                        <TableCell>{tx.sender}</TableCell>
                                        <TableCell>{tx.receiver}</TableCell>
                                        <TableCell align="right">${tx.amount.toFixed(2)}</TableCell>
                                        <TableCell>{tx.type}</TableCell>
                                        <TableCell>{JSON.stringify(tx.metadata)}</TableCell>
                                        <TableCell>{tx.status}</TableCell>
                                        <TableCell>{tx.signature}</TableCell>
                                        <TableCell>{new Date(tx.createdAt).toLocaleString()}</TableCell>
                                        <TableCell>
                                            {tx.completedAt ? new Date(tx.completedAt).toLocaleString() : "N/A"}
                                        </TableCell>
                                    </StyledTableRow>
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
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </>
            )}
        </div>
    )
}
