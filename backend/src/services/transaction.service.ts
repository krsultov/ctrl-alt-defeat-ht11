import { Repository } from "typeorm"
import { Transaction } from "@entities/Transaction"
import { boundMethod } from "autobind-decorator"
import { ITransactionService } from "@interfaces/transaction.interfaces"
import { TransactionPayload } from "@entities/TransactionPayload"
import redis from "@utils/redis"
import base58 from "bs58"
import crypto from "node:crypto"

export class TransactionService implements ITransactionService {
    private readonly transactionRepository: Repository<Transaction>
    private readonly payloadRepository: Repository<TransactionPayload>

    constructor(transactionRepository: Repository<Transaction>, payloadRepository: Repository<TransactionPayload>) {
        this.transactionRepository = transactionRepository
        this.payloadRepository = payloadRepository
    }

    @boundMethod
    async createPayload(payload: Partial<TransactionPayload>): Promise<TransactionPayload> {
        return this.payloadRepository.save(payload)
    }

    @boundMethod
    async createTransaction(transaction: Partial<Transaction>): Promise<Transaction> {
        return this.transactionRepository.save(transaction)
    }

    @boundMethod
    async getTransactionById(id: number): Promise<Transaction | null> {
        const foundTransaction = await this.transactionRepository.findOne({ where: {id} })

        if (!foundTransaction) {
            return null
        }

        return foundTransaction
    }

    @boundMethod
    async patchTransaction(id: number, updatedTransaction: Partial<Transaction>): Promise<Transaction | null> {
        const foundTransaction = await this.transactionRepository.findOne({ where: {id} })
        if (!foundTransaction) {
            return null
        }

        const updateResult = await this.transactionRepository.update(id, updatedTransaction)
        if (!updateResult.affected) {
            return null
        }

        return this.transactionRepository.findOne({ where: {id} })
    }

    @boundMethod
    verifyPayload(senderDid: string, signedPayload: string, payload: TransactionPayload): boolean {
        if (!payload) {
            return false
        }
        const publicKey = base58.decode(senderDid.split(":")[-1].toString()).toString()
        return crypto.verify("rsa", Buffer.from(payload.toString()), publicKey, Buffer.from(signedPayload))
    }

}