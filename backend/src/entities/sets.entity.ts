import { IsUrl } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('sets')
export class Sets {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    setName: string

    @Column()
    title: string

    @Column()
    level: string

    @Column()
    status: string

    @IsUrl()
    @Column({nullable: false})
    image: string

    @Column()
    starsToUnlock: number
}
``



