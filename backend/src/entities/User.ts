import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from "typeorm"
import { Transaction } from "@entities/Transaction"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: "varchar", unique: true })
    did!: string

    @Column({ type: "varchar" })
    publicKey!: string

    @Column("jsonb", { nullable: true })
    metadata!: Record<string, any>

    @CreateDateColumn()
    createdAt!: Date

    @OneToMany(() => Transaction, (transaction) => transaction.sender)
    transactionsSent!: Transaction[]

    @OneToMany(() => Transaction, (transaction) => transaction.receiver)
    transactionsReceived!: Transaction[]
}