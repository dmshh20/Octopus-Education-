import { Module } from '@nestjs/common';
import { CompletedSetsService } from './completed-sets.service';
import { CompletedSetsController } from './completed-sets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompletedSets } from 'src/entities/completedSet.entity';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompletedSets, User])
  ],
  controllers: [CompletedSetsController],
  providers: [CompletedSetsService],
})
export class CompletedSetsModule {}
