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
            const availableNewStars = await this.completedSetRepository.findOne({
                where: {
                    user: {id: user.id},
                    setName: body.setName
                }, order: {
                    dailyStars: "DESC"
                }
            })

            const lastTimePassTheSet = availableNewStars?.dailyStars?.getTime()
            const oneDay = 24 * 60 * 60 * 1000
            const currentTime = Date.now()
            
            if (lastTimePassTheSet && currentTime - lastTimePassTheSet < oneDay) {
                const currentStars = await this.countStars(user)
                return {
                    message: 'Cooldown is active',
                    totalStars: currentStars
                }
            }

            try {
                const score = this.completedSetRepository.create({
                    score: body.score,
                    dailyStars: new Date(),
                    setName: body.setName,
                    user: {id: user.id}
                })

                const saveScore = await this.completedSetRepository.save(score)

                const totalStars = await this.countStars(user)
                
                return {
                    saveScore,
                    totalStars
                }
            } catch(error) {
            throw new ConflictException('The user already passed this set')     
            }
        } 

        async countStars(user: GetUserDecoratorDto) {
            try {

                const initQueryBuilder = await 
                this.completedSetRepository.createQueryBuilder('set')
                                                .select("SUM(set.score)", "totalStars")
                                                .where("set.userId = :userId", {userId: user.id})
                                                .getRawOne()

                const totalStars = initQueryBuilder?.totalStars ? parseInt(initQueryBuilder.totalStars) : 0

                return totalStars
            } catch(error) {
                throw Error('Error in count stars')
            }
        }
    }
