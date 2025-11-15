import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Role } from 'src/entities/role.entity';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt-strategy';
import { Form } from 'src/entities/form.entity';
import 'dotenv/config'
import { ENV } from 'src/lib/env';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role, Form]),
      JwtModule.register({
      global: true,
      secret: ENV.SECRET_KEY as string,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
