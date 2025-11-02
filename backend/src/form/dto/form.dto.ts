import { Column, Index } from "typeorm";

export class FormDto {
    @Column({type: "varchar", length: 100,nullable: false})
    firstName: string

    @Column({type: "varchar", length: 100,nullable: false})
    secondName: string

    @Index({unique: true})
    email: string
}