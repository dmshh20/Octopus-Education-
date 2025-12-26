import { Column, PrimaryGeneratedColumn } from "typeorm";

export class userPuchase {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    setId: number

}