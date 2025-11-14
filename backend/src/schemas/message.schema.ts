import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type MessageDocument = HydratedDocument<Message>

@Schema({timestamps: true})
export class Message {


        @Prop({type: Number, required: true})
        senderId: Number

        @Prop({type: Number, required: true})
        receiverId: Number

        @Prop({type: String, required: true})
        message: string
}       

export const MessageSchema = SchemaFactory.createForClass(Message)