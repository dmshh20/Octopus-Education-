import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Index } from "typeorm";
import { User } from "./user.entity";

@Index(['user','setName','dailyStars'])
@Entity('completed_sets')
export class CompletedSets {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    setName: string

    @Column({type: 'integer', default: 0})
    score: number

   @Column({ type: 'timestamp', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
    dailyStars: Date | null

    @ManyToOne(() => User, (user) => user.completedSets,{onDelete: 'CASCADE' })
    user: User
}