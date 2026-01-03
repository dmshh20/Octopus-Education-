import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUserDecoratorDto } from 'src/auth/decorator/dto/GetUser.decorator.dto';
import { CompletedSets } from 'src/entities/completedSet.entity';
import { Repository } from 'typeorm';
import { completedScoreDto } from './dto/completedScore.dto';
import { User } from 'src/entities/user.entity';

@Injectable()
export class CompletedSetsService {
    constructor(
        @InjectRepository(CompletedSets) private readonly completedSetRepository: Repository<CompletedSets>,
        @InjectRepository(User) private readonly UserRepository: Repository<User>
        
    ) {}

    async saveUserScore(body: completedScoreDto, user: GetUserDecoratorDto) {
        const availableNewStars = await this.completedSetRepository.findOne({
            where: {
                user: {id: user.id},
                setName: body.setName
            }
        })

            const updatedUser = await this.UserRepository.findOneBy({id: user.id})
            const lastTimePassTheSet = availableNewStars?.dailyStars?.getTime()
            const oneDay = 24 * 60 * 60 * 1000
            const currentTime = Date.now()
            
            if (lastTimePassTheSet && currentTime - lastTimePassTheSet < oneDay) {
                return updatedUser?.stars
            }

            try {
                await this.UserRepository.increment({id: user.id}, 'stars', body.score)

                const score = this.completedSetRepository.create({
                    score: body.score,
                    dailyStars: new Date(),
                    setName: body.setName,
                    user: {id: user.id}
                })

                await this.completedSetRepository.save(score)
                const findUserAfterUpdate = await this.UserRepository.findOneBy({id: user.id})

                return findUserAfterUpdate?.stars
            } catch(error) {
            throw new ConflictException('The user already passed this set')     
            }
        } 

        async countStars(user: GetUserDecoratorDto, signal?: AbortSignal) {
        try {
            const getUser = await this.UserRepository.findOneBy(
                { id: user.id },
            );

           if (signal?.aborted) {
            console.log('Signal is aborted.');
            return
           }

            if (!getUser) { 
                throw new Error('User not found')
            }

            return getUser.stars;
        } catch (error) {
            if (error.name === 'AbortError' || signal?.aborted) {
                return;
            }
            throw new Error(`Failed count stars: ${error.message}`);
        }
        }

      
}
