import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class getUserData {
    @IsNumber()
    id: number

    @IsString()
    @IsNotEmpty()
    firstName: string

    @IsString()
    @IsNotEmpty()
    secondName: string

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string
}