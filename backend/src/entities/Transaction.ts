import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from "typeorm"
import { User } from "@entities/User"

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id!: number

    @ManyToOne(() => User, (user) => user.transactionsSent)
    sender!: User

    @ManyToOne(() => User, (user) => user.transactionsReceived)
    receiver!: User

    @Column("decimal", { precision: 18, scale: 2 })
    amount!: number

    @Column("varchar")
    type!: string

    @Column("jsonb", { nullable: true })
    metadata!: Record<string, any>

    @Column("varchar")
    status!: string

    @Column("varchar")
    signature!: string

    @CreateDateColumn()
    createdAt!: Date
}