import { Module } from '@nestjs/common';
import { SetsService } from './sets.service';
import { SetsController } from './sets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sets } from 'src/entities/sets.entity';
import { User } from 'src/entities/user.entity';
import { UserPurchase } from 'src/entities/userPurchase';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sets, User, UserPurchase])
  ],
  controllers: [SetsController],
  providers: [SetsService],
})
export class SetsModule {}
