import { ITransactionService } from "@interfaces/transaction.interfaces"
import { Request, Response } from "express"
import { boundMethod } from "autobind-decorator"

export class TransactionController {
    private readonly transactionService: ITransactionService

    constructor(transactionService: ITransactionService) {
        this.transactionService = transactionService
    }

    @boundMethod
    async completeTransaction(req: Request, res: Response) {
        const senderDid = req.query.did as string

        const transactionId = req.params.id
        const signedPayload = req.body.signedPayload as string

        const transaction = await this.transactionService.getTransactionById(parseInt(transactionId))

        if(!transaction) {
            return res.status(404).json({ message: "Transaction not found" })
        }

        if(transaction.status !== "pending") {
            return res.status(400).json({ message: "Transaction is not pending" })
        }

        const isPayloadValid = this.transactionService.verifyPayload(senderDid, signedPayload, transaction.payload)

        if (!isPayloadValid) {
            return res.status(400).json({ message: "Signature does not match payload" })
        }

        const updatedTransaction = await this.transactionService.patchTransaction(transaction.id, { status: "completed" })

        if(!updatedTransaction) {
            return res.status(500).json({ message: "Failed to update transaction" })
        }

        return res.json(updatedTransaction)
    }

    @boundMethod
    async initiateTransaction(req: Request, res: Response) {
        const recipientDid = req.query.did as string

        const amount = req.body.amount as number
        const metadata = req.body.metadata as string

        const transactionPayload = {
            recipientDid,
            amount,
            metadata
        }

        const createdPayload = await this.transactionService.createPayload(transactionPayload)

        if(!createdPayload) {
            return res.status(500).json({ message: "Failed to create payload" })
        }

        const createdTransaction = await this.transactionService.createTransaction({
            senderDid: null,
            signature: null,
            payload: createdPayload,
            status: "pending"
        })

        if (!createdTransaction) {
            return res.status(500).json({ message: "Failed to create transaction" })
        }

        return res.json(createdTransaction)
    }

    @boundMethod
    async getTransactionData(req: Request, res: Response) {
        const transactionId = req.params.id

        const transaction = await this.transactionService.getTransactionById(parseInt(transactionId))

        if(!transaction) {
            return res.status(404).json({ message: "Transaction not found" })
        }

        return res.json(transaction)
    }

    @boundMethod
    async getTransactionStatus(req: Request, res: Response) {
        const transactionId = req.params.id

        const transaction = await this.transactionService.getTransactionById(parseInt(transactionId))

        if(!transaction) {
            return res.status(404).json({ message: "Transaction not found" })
        }

        return res.json({ status: transaction.status })
    }
}