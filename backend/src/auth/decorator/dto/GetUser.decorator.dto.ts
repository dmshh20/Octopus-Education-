import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class GetUserDecoratorDto {
    @IsNotEmpty()
    @IsNumber()
    id: number

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNumber()
    @IsNotEmpty()
    roleId: string
}