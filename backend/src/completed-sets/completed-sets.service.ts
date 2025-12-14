import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUserDecoratorDto } from 'src/auth/decorator/dto/GetUser.decorator.dto';
import { CompletedSets } from 'src/entities/completedSet.entity';
import { Repository } from 'typeorm';
import { completedScoreDto } from './dto/completedScore.dto';

@Injectable()
export class CompletedSetsService {
    constructor(
        @InjectRepository(CompletedSets) private readonly completedSetRepository: Repository<CompletedSets>) {}

    async saveUserScore(body: completedScoreDto, user: GetUserDecoratorDto) {
        try {
          const availableNewStars = await this.completedSetRepository.findOne({
            where: {
                user: {id: user.id},
                setName: body.setName
            }, order: {
                dailyStars: "DESC"
            }
          })

          const lastTimePassTheSet = availableNewStars?.dailyStars
          const convertLastTimePassTheSet = new Date(String(lastTimePassTheSet)).getTime()
          const oneDay = 24 * 60 * 60 * 1000
          const currentTime = Date.now()
          
        if (currentTime - convertLastTimePassTheSet > oneDay || !lastTimePassTheSet) {

            const score = this.completedSetRepository.create({
                score: body.score,
                dailyStars: new Date(),
                setName: body.setName,
                user: {id: user.id}
            })

            const saveScore = await this.completedSetRepository.save(score)
            return saveScore
        }

          
        } catch(error) {
         throw new ConflictException('The user already passed this set')     
        }
    }
}
