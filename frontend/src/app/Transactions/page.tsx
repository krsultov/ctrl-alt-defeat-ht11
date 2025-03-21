"use client"

import React, { useState } from "react"
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
import { styled } from "@mui/material/styles"

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

const transactions = Array.from({ length: 50 }, (_, i) => ({
    id: `TXN100${i + 1}`,
    column1: "Cell",
    column2: "Cell",
    column3: "Cell",
    column4: "Cell"
}))

export default function Transactions() {
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const paginatedTransactions = transactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

    return (
        <div className="w-full px-8 py-6">
            <Typography variant="h6" fontWeight="bold" gutterBottom>
                Transactions
            </Typography>
            <TableContainer component={Paper} sx={{ width: "100%", borderRadius: 2, overflow: "hidden" }}>
                <Table sx={{ minWidth: "100%" }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Head</StyledTableCell>
                            <StyledTableCell align="left">Head</StyledTableCell>
                            <StyledTableCell align="left">Head</StyledTableCell>
                            <StyledTableCell align="left">Head</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedTransactions.map((tx) => (
                            <StyledTableRow key={tx.id}>
                                <TableCell>{tx.column1}</TableCell>
                                <TableCell>{tx.column2}</TableCell>
                                <TableCell>{tx.column3}</TableCell>
                                <TableCell>{tx.column4}</TableCell>
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
        </div>
    )
}
