import { Module } from '@nestjs/common';
import { LockedSetService } from './locked-set.service';
import { LockedSetController } from './locked-set.controller';

@Module({
  controllers: [LockedSetController],
  providers: [LockedSetService],
})
export class LockedSetModule {}
