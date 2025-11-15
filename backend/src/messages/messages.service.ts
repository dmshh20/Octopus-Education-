import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from 'src/schemas/message.schema';
import {Model} from 'mongoose'
import { sendMessageDto } from 'src/schemas/dto/message.schema.dto';

@Injectable()
export class MessagesService {
    constructor(
        @InjectModel(Message.name) private messageModel: Model<Message>
    ) {}

     async getMessages(page: number = 1, limit: number = 50) {
        try {

        const skip = (page - 1) * limit     
        const messages = await this.messageModel
            .find()
            .sort({ createdAt: - 1})
            .skip(skip)
            .limit(limit)

        const countMessage = await this.messageModel.countDocuments()

        return {
            messages,
            pagination: {
                page,
                countMessages: countMessage,
                limit,
            }
        }

        } catch(error) {
            throw new Error('Error in getting messages', error)
        }
    }


    async sendMessage(dto: sendMessageDto) {
        try {

            const sendMessage = new this.messageModel(dto)
            return sendMessage.save()

        } catch(error) {
            throw new InternalServerErrorException('Failed to send message', error)
        }
    }

   
    async getMessagesById(id: number, user: any) {
        try {
           const getMessages = this.messageModel.find({
            $or: [
                {senderId: user.id, receiverId: id},
                {senderId: id, receiverId: user.id}
            ]})
            
            return getMessages

        } catch(error) {
            throw new Error('Error in getting messages between users', error)
        }
    }


}
