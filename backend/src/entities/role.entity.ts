import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn()
    id: number
    
    @Index({unique: true})
    @Column({type: 'varchar', length: 100, nullable: false})
    role: string

    @Column()
    roleId: number
    
    @OneToMany(() => User, (user) => user.role)
    user: User[]

}