import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_purchases')
export class UserPurchase {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    setId: number

    @Column()
    userId: number

}