import { Column, Entity, Index, PrimaryGeneratedColumn, Unique } from "typeorm";


@Entity('forms')
export class Form {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    secondName: string

    @Index({unique: true})
    @Column({type: 'varchar', length: 100, nullable: false})
    email: string
}