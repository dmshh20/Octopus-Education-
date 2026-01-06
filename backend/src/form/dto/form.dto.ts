import { IsEmail, IsString, Length } from "class-validator";

export class FormDto {
    @IsString()
    @Length(1,100)
    firstName: string

    @IsString()
    @Length(1,100)
    secondName: string

    @IsEmail()
    email: string
}