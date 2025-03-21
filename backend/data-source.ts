import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "@entities/User"
import { Transaction } from "@entities/Transaction"
import { TransactionPayload } from "@entities/TransactionPayload"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User, Transaction, TransactionPayload],
    migrations: [],
    subscribers: [],
})
