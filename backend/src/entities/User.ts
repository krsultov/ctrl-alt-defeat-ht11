import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"
import bcrypt from "bcrypt"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ type: "varchar", length: 64 })
    firstName!: string

    @Column({ type: "varchar", length: 64 })
    lastName!: string

    @Column({ type: "varchar", length: 64, unique: true })
    email!: string

    @Column({ type: "varchar", length: 128 })
    password!: string

    @CreateDateColumn()
    createdAt!: Date

    @BeforeInsert()
    async hashPassword(): Promise<void> {
        this.password = await bcrypt.hash(this.password, 10)
    }

    validatePassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password)
    }
}
