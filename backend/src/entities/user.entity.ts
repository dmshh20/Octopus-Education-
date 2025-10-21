import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', length: 100, nullable: false})
    firstName: string

    @Column({type: 'varchar', length: 100, nullable: false})
    secondName: string

    @Index({unique: true}) // ensure unique to email
    @Column({type: 'varchar', length: 100, nullable: false})
    email: string

    @Column({type: 'varchar', length: 100, nullable: false})
    password: string


}