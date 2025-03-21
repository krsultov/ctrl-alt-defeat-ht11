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
    TablePagination,
    CircularProgress
} from "@mui/material"
import { styled } from "@mui/material/styles"
import Filter from "../(components)/Filter"

// Styled components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
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
        createdAt: new Date().toISOString(),
        completedAt: i % 3 === 0 ? null : new Date().toISOString()
    }))
}

export default function Transactions() {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    // Simulate data fetching
    useEffect(() => {
        setTimeout(() => {
            setTransactions(generateDummyTransactions(50)) // Generate 50 dummy transactions
            setLoading(false)
        }, 1000) // Simulate a 1-second API delay
    }, [])

    const handleChangePage = (_event: unknown, newPage: number) => setPage(newPage)
    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const paginatedTransactions = transactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

    return (
        <div className="w-full px-8 py-6">
            <Typography variant="h6" fontWeight="bold" gutterBottom>
                Transactions
            </Typography>

            <div className="p-10">
                <Filter />
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-10">
                    <CircularProgress />
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
                        count={transactions.length}
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
