import { Body, Controller, Get, Post, Put, UseGuards } from '@nestjs/common';
import { SetsService } from './sets.service';
import { GetUser } from 'src/auth/decorator/getUser.decorator';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { GetUserDecoratorDto } from 'src/auth/decorator/dto/GetUser.decorator.dto';
import { buySet } from './dto/buySet.dto';


@Controller('sets')
export class SetsController {
  constructor(private readonly setsService: SetsService) {}

  @Get('')
  async getSets() {
    return this.setsService.getSets()
  }

  @UseGuards(JwtAuthGuard)
  @Post('buy')
  async postSets(@Body() body: buySet, @GetUser() user: GetUserDecoratorDto) {
    return this.setsService.postSets(body, user)
  }
}
