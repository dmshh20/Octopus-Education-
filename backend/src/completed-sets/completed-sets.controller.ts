import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { CompletedSetsService } from './completed-sets.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { GetUser } from 'src/auth/decorator/getUser.decorator';
import { GetUserDecoratorDto } from 'src/auth/decorator/dto/GetUser.decorator.dto';
import { completedScoreDto } from './dto/completedScore.dto';

@Controller('completed-sets')
export class CompletedSetsController {
  constructor(private readonly completedSetsService: CompletedSetsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('')
  async saveUserScore(@Body() body: completedScoreDto, @GetUser() user: GetUserDecoratorDto) {
    return this.completedSetsService.saveUserScore(body, user)
  }
}
