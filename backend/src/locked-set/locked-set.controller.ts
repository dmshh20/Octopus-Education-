import { Controller, Post } from '@nestjs/common';
import { LockedSetService } from './locked-set.service';

@Controller('locked-set')
export class LockedSetController {
  constructor(private readonly lockedSetService: LockedSetService) {}
  
  @Post('')
  async buySet() {
    return 
  }
}
