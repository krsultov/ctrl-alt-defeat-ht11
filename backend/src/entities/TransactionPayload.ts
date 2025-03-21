import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class TransactionPayload {
    @PrimaryGeneratedColumn()
    id!: number

    @Column("varchar")
    recipientDid!: string

    @Column("int")
    amount!: number

    @Column("varchar")
    metadata!: string
}