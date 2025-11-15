import { Body, Controller, Get, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { getUser } from 'src/auth/decorator/getUser.decorator';
import { sendMessageDto } from 'src/schemas/dto/message.schema.dto';

@UseGuards(JwtAuthGuard)
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get('')
  async getMessages(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 50
  ) {
    return this.messagesService.getMessages(page, limit)
  }

  @Post('send')
  async sendMessage(@Body() dto: sendMessageDto) {
    return this.messagesService.sendMessage(dto)
  }

  @Get('chats/:id')
  async getMessagesById(@Param('id') id: number, @getUser() user: any) {
    return this.messagesService.getMessagesById(id, user)
  }

}
