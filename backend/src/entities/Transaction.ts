import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne } from "typeorm"
import { TransactionPayload } from "@entities/TransactionPayload"

@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id!: number

    @Column("varchar", { nullable: true })
    senderDid!: string | null

    @OneToOne(() => TransactionPayload, { onDelete: "CASCADE" })
    payload!: TransactionPayload

    @Column("varchar", { nullable: true })
    signature!: string | null

    @Column("varchar")
    status!: string

    @CreateDateColumn()
    createdAt!: Date

    @Column("timestamp", { nullable: true })
    completedAt!: Date
}