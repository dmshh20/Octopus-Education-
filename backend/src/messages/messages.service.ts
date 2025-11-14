import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from 'src/schemas/message.schema';
import {Model} from 'mongoose'

@Injectable()
export class MessagesService {
    constructor(
        @InjectModel(Message.name) private messageModel: Model<Message>
    ) {}

     async getMessages() {
        try {

        return await this.messageModel.find()

        } catch(error) {
            throw new Error('Error in getting messages', error)
        }
    }


    async sendMessage(dto: any) {
        try {

            const sendMessage = new this.messageModel(dto)
            return sendMessage.save()

        } catch(error) {
            throw new Error('Send Error Message', error)
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
