import { Injectable, ConflictException, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/signUp.dto.entity';
import * as bcrypt from 'bcrypt'
import { SignInDto } from './dto/signIn.dto.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private jwt: JwtService
        
    ) {}

    async signUp(signUpDto: SignUpDto): Promise<{ message: string; user: Partial<User> }> {
        try {
            const existingUser = await this.userRepository.findOne({
                where: { email: signUpDto.email }
            });

            if (existingUser) {
                throw new ConflictException('User with this email already exists');
            }
            
            const hash = await bcrypt.hash(signUpDto.password,10)

            const user = this.userRepository.create({
                firstName: signUpDto.firstName,
                secondName: signUpDto.secondName,
                email: signUpDto.email,
                password: hash, 
            });

            const savedUser = await this.userRepository.save(user);

            // Return user data without password
            const { password, ...userWithoutPassword } = savedUser;

            return {
                message: 'User created successfully',
                user: userWithoutPassword
            };

        } catch (error) {
            console.log(error);
            throw new BadRequestException('Failed to create user');
        }
    }

    async signIn(dto: SignInDto): Promise<{message: string, access_token: string}> {
        try {
             const existingUser = await this.userRepository.findOne({
                where: {email: dto.email}
             })

             if (!existingUser) {
                throw new BadRequestException('User does not exist')
             }
             
             const payload = {email: existingUser.email}
             const accessToken = await this.jwt.sign(payload)


             return {
               message: 'You signed in successfully',
               access_token: accessToken
             }

        } catch(error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'error in sign in',
              }, HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: error
              });
        }
    }

}
