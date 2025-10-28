import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Role } from 'src/entities/role.entity';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt-strategy';

@Module({
  imports: [
      // PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([User, Role]),
      JwtModule.register({
      global: true,
      secret: 'secret_key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
