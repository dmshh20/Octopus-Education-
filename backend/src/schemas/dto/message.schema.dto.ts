import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class sendMessageDto {
    @IsNumber()
    @IsNotEmpty()
    senderId: number

    @IsNumber()
    @IsNotEmpty()
    receiverId: number

    @IsString()
    @IsNotEmpty()
    message: string
}