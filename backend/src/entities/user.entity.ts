import { Column, Entity, Index, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./role.entity";
import { IsOptional, IsUrl } from "class-validator";
import { CompletedSets } from "./completedSet.entity";
import { UserPurchase } from "./userPurchase";
    
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

    @ManyToOne(() => Role, (role) => role.role)
    role: Role

    @IsUrl()
    @IsOptional()
    @Column({nullable: true})
    profileUrl: string

    @Column({type: 'integer', default: 0})
    stars: number

    @OneToMany(() => CompletedSets, (completed) => completed.user, { onDelete: 'CASCADE' })
    completedSets: CompletedSets[]

    @OneToMany(() => UserPurchase, (purchase) => purchase.userId)
    userPurchasedId: UserPurchase
}