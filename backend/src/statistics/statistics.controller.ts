import { Controller, Get, UseGuards } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { GetUser } from 'src/auth/decorator/getUser.decorator';
import { GetUserDecoratorDto } from 'src/auth/decorator/dto/GetUser.decorator.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Get('')
  async getStatistic(@GetUser() user: GetUserDecoratorDto) {
    return this.statisticsService.getStatistic(user)
  }


}
