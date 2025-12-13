import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CompletedSetsService } from './completed-sets.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { GetUser } from 'src/auth/decorator/getUser.decorator';

@Controller('completed-sets')
export class CompletedSetsController {
  constructor(private readonly completedSetsService: CompletedSetsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  async saveUserScore(@Body() body: any, @GetUser() user: any) {
      console.log('BODY SYNC', body);
      
    return this.completedSetsService.saveUserScore(body, user)
  }
}
