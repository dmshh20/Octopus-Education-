import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { getUser } from 'src/auth/decorator/getUser.decorator';

@UseGuards(JwtAuthGuard)
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Get('')
  async getMessages() {
    return this.messagesService.getMessages()
  }

  @Post('send')
  async sendMessage(@Body() dto: any) {
    return this.messagesService.sendMessage(dto)
  }

  @Get('chats/:id')
  async getMessagesById(@Param('id', ParseIntPipe) id: number, @getUser() user: any) {
    return this.messagesService.getMessagesById(id, user)
  }

}
