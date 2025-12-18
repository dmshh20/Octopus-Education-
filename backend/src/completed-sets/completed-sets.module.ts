import { Module } from '@nestjs/common';
import { CompletedSetsService } from './completed-sets.service';
import { CompletedSetsController } from './completed-sets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompletedSets } from 'src/entities/completedSet.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompletedSets])
  ],
  controllers: [CompletedSetsController],
  providers: [CompletedSetsService],
})
export class CompletedSetsModule {}
