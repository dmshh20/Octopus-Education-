import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { FormService } from './form.service';
import { FormDto } from './dto/form.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Post('')
  async processForm(@Body() body: FormDto) {
    return this.formService.processForm(body)
  }

  @Get('')
  async getAllSession() {
    return this.formService.getAllSession()
  }
}
