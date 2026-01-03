import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sets } from 'src/entities/sets.entity';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { buySetDto } from './dto/buySet.dto';
import { GetUserDecoratorDto } from 'src/auth/decorator/dto/GetUser.decorator.dto';
import { UserPurchase } from 'src/entities/userPurchase';

@Injectable()
export class SetsService {
    constructor(
        @InjectRepository(Sets) private SetRepository: Repository<Sets>,
        @InjectRepository(User) private UserRepository: Repository<User>,
        @InjectRepository(UserPurchase) private UserPurchaseRepository: Repository<UserPurchase>
    ) {}

  async getSets(user: GetUserDecoratorDto) {
        const allSets = await this.SetRepository.find()

        const purchasedSets = await this.UserPurchaseRepository.find({
            where: {userId: user.id}
        })

        const ownedSets = purchasedSets.map((purchase) => purchase.setId)

        return allSets.map((set) => ({
            ...set,
            isUnlocked: ownedSets.includes(set.id) || set.starsToUnlock === 0
        }))        
    }

    async postSets(body: buySetDto, user: GetUserDecoratorDto) {
        
        const findUserBeforeUpdate = await this.UserRepository.findOneBy({id: user.id})

        if ((Number(findUserBeforeUpdate?.stars) - body.score) < 0) {
            console.log("Insufficient funds");
            
            return {message: "Insufficient funds"}
        }
 
        await this.UserRepository.decrement({id: user.id}, 'stars', body.score)
        
        const purchaseSet = this.UserPurchaseRepository.create({
            setId: body.setId,
            userId: user.id
        })

        const findUserAfterUpdate = await this.UserRepository.findOneBy({id: user.id})
       await this.UserPurchaseRepository.save(purchaseSet)
        return findUserAfterUpdate?.stars
    }

}
