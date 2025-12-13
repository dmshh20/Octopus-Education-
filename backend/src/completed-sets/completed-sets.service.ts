import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { error } from 'console';
import { CompletedSets } from 'src/entities/completedSet.entity';
import { Repository } from 'typeorm';
import {v4 as uuidv4} from 'uuid'

@Injectable()
export class CompletedSetsService {
    constructor(
        @InjectRepository(CompletedSets) private readonly completedSet: Repository<CompletedSets>) {}

    async saveUserScore(body: any, user: any) {
        const uuid = uuidv4()
        const url = body.url.split('/').at(-2)
        
        try {
            const score = this.completedSet.create({
                score: body.score,
                user: user.id,
                dailyStars: '2025-12-12T19:34:45.000Z',
                setName: url
            })

            const saveScore = await this.completedSet.save(score)

            console.log('BODY SCORE', body.score);
            console.log('USER SCORE', user);
            return saveScore
        } catch(error) {
            console.log(error);
            
            throw Error(error)

        }
    }
}
