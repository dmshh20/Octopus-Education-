import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { SetsService } from './sets.service';
import { GetUser } from 'src/auth/decorator/getUser.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { GetUserDecoratorDto } from 'src/auth/decorator/dto/GetUser.decorator.dto';
import { buySetDto } from './dto/buySet.dto';

@UseGuards(JwtAuthGuard)
@Controller('sets')
export class SetsController {
  constructor(private readonly setsService: SetsService) {}

  @Get('')
  async getSets(@GetUser() user: GetUserDecoratorDto) {
    return this.setsService.getSets(user)
  }

  // @UseGuards(JwtAuthGuard)
  @Post('buy')
  async postSets(@Body() body: buySetDto, @GetUser() user: GetUserDecoratorDto) {
    return this.setsService.postSets(body, user)
  }
}
