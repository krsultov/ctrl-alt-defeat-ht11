"use client"

import { Typography, Box, Paper, Button, Modal, TextField } from "@mui/material"
import React, { useState } from "react"

const BankAccounts = () => {
    const [accounts, setAccounts] = useState([
        { id: 1, name: "Checking Account", balance: 1234.56 },
        { id: 2, name: "Savings Account", balance: 7890.12 },
        { id: 3, name: "Business Account", balance: 3456.78 }
    ]);

    const [open, setOpen] = useState(false);
    const [currentAccount, setCurrentAccount] = useState({ id: 0, name: "", balance: 0 });
    const [isEditing, setIsEditing] = useState(false);

    const handleOpen = (account = { id: 0, name: "", balance: 0 }) => {
        setCurrentAccount(account);
        setIsEditing(account.id !== 0);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        if (isEditing) {
            setAccounts(accounts.map(account => 
                account.id === currentAccount.id ? currentAccount : account
            ));
        } else {
            setAccounts([...accounts, { ...currentAccount, id: accounts.length + 1 }]);
        }
        handleClose();
    };

    const handleDelete = () => {
        setAccounts(accounts.filter(account => account.id !== currentAccount.id));
        handleClose();
    };

    return (
        <Box p={3} sx={{ width: '100%' }}>
            <Button variant="contained" color="primary" onClick={() => handleOpen()}>
                Add Bank Account
            </Button>
            <Box mt={3} sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 3,
                width: '100%',
            }}>
                {accounts.map((account) => (
                    <Box key={account.id} sx={{ minWidth: '300px' }}>
                        <Paper elevation={3}>
                            <Box p={3} borderRadius={4}>
                                <Typography variant="h6">{account.name}</Typography>
                                <Typography variant="body1">Balance: ${account.balance.toFixed(2)}</Typography>
                                <Button variant="contained" color="primary" onClick={() => handleOpen(account)}>
                                    Edit
                                </Button>
                            </Box>
                        </Paper>
                    </Box>
                ))}
            </Box>
            <Modal open={open} onClose={handleClose}>
                <Box p={3} bgcolor="background.paper" style={{ margin: 'auto', marginTop: '10%', width: '300px', borderRadius: '8px' }}>
                    <Typography variant="h6">{isEditing ? "Edit Account" : "Add Account"}</Typography>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Account Name"
                        value={currentAccount.name}
                        onChange={(e) => setCurrentAccount({ ...currentAccount, name: e.target.value })}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Account Balance"
                        type="number"
                        value={currentAccount.balance}
                        onChange={(e) => setCurrentAccount({ ...currentAccount, balance: parseFloat(e.target.value) })}
                    />
                    <Box mt={2} display="flex"  gap={0.5}>
                            <Button variant="contained" color="primary" onClick={handleSave}>
                                Save
                            </Button>
                            <Button variant="contained" onClick={handleClose}>
                                Cancel
                            </Button>
                        {isEditing && (
                            <Button variant="contained" color="secondary" onClick={handleDelete}>
                                Delete
                            </Button>
                        )}
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}

export default BankAccounts
