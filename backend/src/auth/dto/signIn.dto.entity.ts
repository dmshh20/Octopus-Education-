import { IsNotEmpty, IsString } from "class-validator";
import { Index } from "typeorm";

export class SignInDto {

    @IsString()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string
}