import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sets } from 'src/entities/sets.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { buySet } from './dto/buySet.dto';
import { GetUserDecoratorDto } from 'src/auth/decorator/dto/GetUser.decorator.dto';

@Injectable()
export class SetsService {
    constructor(
        @InjectRepository(Sets) private SetRepository: Repository<Sets>,
        @InjectRepository(User) private UserRepository: Repository<User>
    ) {}

    async getSets() {
        return this.SetRepository.find()
    }

    async postSets(body: buySet, user: GetUserDecoratorDto) {
        
        return await this.UserRepository.decrement({id: user.id}, 'stars', body.score)
    }

}
