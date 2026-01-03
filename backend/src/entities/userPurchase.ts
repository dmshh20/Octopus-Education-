import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('user_purchases')
export class UserPurchase {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    setId: number

    @Column()
    userId: number

    @ManyToOne(() => User, (user) => user.id)
    user: User[]

}