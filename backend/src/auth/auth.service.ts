import { Injectable, ConflictException, BadRequestException, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { SignUpDto } from './dto/signUp.dto.entity';
import * as bcrypt from 'bcrypt'
import { SignInDto } from './dto/signIn.dto.entity';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/entities/role.entity';
import { Form } from 'src/entities/form.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,

        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,

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
            const role = await this.roleRepository.findOneBy({roleId: 1})

            if (!role) {
                throw new BadRequestException('Role is not found')
            }

            const user = this.userRepository.create({
                firstName: signUpDto.firstName,
                secondName: signUpDto.secondName,
                email: signUpDto.email,
                password: hash,
                role: role
             });

            const savedUser = await this.userRepository.save(user);

            // Return user data without password
            const { password, ...userWithoutPassword } = savedUser;

            return {
                message: 'User created successfully',
                user: userWithoutPassword
            };

        } catch (error) {
            if (error instanceof QueryFailedError) {
                throw Error('Unique constraint')
            }
            throw error
        }

    }

    async signIn(dto: SignInDto): Promise<{message: string, access_token: string, refresh_token: string}> {
        try {
             const existingUser = await this.userRepository.findOne({
                where: {email: dto.email},
                relations: ['role']
             })

             if (!existingUser) {
                throw new BadRequestException('User does not exist')
             }
             
             const payload = {email: existingUser.email, roleId: existingUser.role.roleId}
             const accessToken = await this.jwt.sign(payload)
             const refreshToken = await this.jwt.sign(payload, {
                expiresIn: '3h'
             })

             return {
               message: 'You signed in successfully',
               access_token: accessToken,
               refresh_token: refreshToken
             }

        } catch(error) {
            console.log(error);
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'error in sign in',
              }, HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: error
              });
        }
    }

}
