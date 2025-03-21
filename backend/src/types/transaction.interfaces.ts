import { Transaction } from "@entities/Transaction"
import { TransactionPayload } from "@entities/TransactionPayload"

export interface ITransactionService {
    createPayload(payload: Partial<TransactionPayload>): Promise<TransactionPayload>
    createTransaction(transaction: Partial<Transaction>): Promise<Transaction>
    getTransactionById(id: number): Promise<Transaction | null>
    patchTransaction(id: number, updatedTransaction: Partial<Transaction>): Promise<Transaction | null>
    verifyPayload(senderDid: string, signedPayload: string, payload: TransactionPayload): boolean
}