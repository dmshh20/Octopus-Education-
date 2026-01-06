import { Module } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { StatisticsController } from './statistics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompletedSets } from 'src/entities/completedSet.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompletedSets])
  ],
  controllers: [StatisticsController],
  providers: [StatisticsService],
})
export class StatisticsModule {}
