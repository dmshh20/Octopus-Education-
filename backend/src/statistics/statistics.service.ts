import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetUserDecoratorDto } from 'src/auth/decorator/dto/GetUser.decorator.dto';
import { CompletedSets } from 'src/entities/completedSet.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatisticsService {
    constructor(
        @InjectRepository(CompletedSets) private CompletedSetsRepository: Repository<CompletedSets> 
    ) {}

    async getStatistic(user: GetUserDecoratorDto) {
        try {
            const getAllSets = await this.CompletedSetsRepository.find({where: {user: {id: user.id}}});
            const levels = ['a1','a2','b1','b2','c1']
            const statistics = levels.map((level) => {
            const passSets = getAllSets.filter((set) => set.setName.split('-').at(0) === level).length

                 return {setName: level.toUpperCase(), count: passSets}
            })
            
            return {statistics, getAllSets}            
        } catch(error) {
            throw new InternalServerErrorException('Failed in getting statistics')
        }
    }   
}
