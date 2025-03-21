import { Router } from "express"
import { challengeMiddleware } from "@middleware/challenge.middleware"
import { TransactionController } from "@controllers/transaction.controller"
import { TransactionService } from "@services/transaction.service"
import { Transaction } from "@entities/Transaction"
import { AppDataSource } from "../../data-source"
import { TransactionPayload } from "@entities/TransactionPayload"

const transactionRouter = Router()

const transactionRepository = AppDataSource.getRepository(Transaction)
const payloadRepository = AppDataSource.getRepository(TransactionPayload)

const transactionService = new TransactionService(transactionRepository, payloadRepository)
const transactionController = new TransactionController(transactionService)

transactionRouter.post("/did/transactions", challengeMiddleware, transactionController.initiateTransaction)
transactionRouter.post("/did/transactions/:id", challengeMiddleware, transactionController.completeTransaction)

transactionRouter.get("/did/transactions/:id/status", transactionController.getTransactionStatus)
transactionRouter.get("/did/transactions/:id", challengeMiddleware, transactionController.getTransactionData)

export { transactionRouter }