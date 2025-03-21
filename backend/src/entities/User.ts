import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: "varchar", unique: true })
    did!: string

    @Column({ type: "varchar" })
    publicKey!: string

    @Column({ type: "varchar" })
    status!: string

    @Column("jsonb", { nullable: true })
    metadata!: Record<string, any>

    @CreateDateColumn()
    createdAt!: Date
}