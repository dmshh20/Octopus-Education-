import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CompletedSetsService } from './completed-sets.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { GetUser } from 'src/auth/decorator/getUser.decorator';
import { GetUserDecoratorDto } from 'src/auth/decorator/dto/GetUser.decorator.dto';
import { completedScoreDto } from './dto/completedScore.dto';

@UseGuards(JwtAuthGuard)
@Controller('completed-sets')
export class CompletedSetsController {
  constructor(private readonly completedSetsService: CompletedSetsService) {}

  @Post('')
  async saveUserScore(@Body() body: completedScoreDto, @GetUser() user: GetUserDecoratorDto) {
    return this.completedSetsService.saveUserScore(body, user)
  }

  @Get('count-stars')
  async countStars(@GetUser() user: GetUserDecoratorDto) {
    return this.completedSetsService.countStars(user)
  }


}
