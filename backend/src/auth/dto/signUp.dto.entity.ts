import { IsEmail, IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator';

export class SignUpDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2, { message: 'First name must be at least 2 characters long' })
    @MaxLength(100, { message: 'First name must not exceed 100 characters' })
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(2, { message: 'Second name must be at least 2 characters long' })
    @MaxLength(100, { message: 'Second name must not exceed 100 characters' })
    secondName: string;

    @IsEmail({}, { message: 'Please provide a valid email address' })
    @IsNotEmpty()
    @MaxLength(100, { message: 'Email must not exceed 100 characters' })
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6, { message: 'Password must be at least 6 characters long' })
    @MaxLength(100, { message: 'Password must not exceed 100 characters' })
    password: string;
}
