import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signUp.dto.entity';
import { SignInDto } from './dto/signIn.dto.entity';
import { JwtAuthGuard } from './guard/jwt-auth.guard';
import { GetUser } from './decorator/getUser.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post('signin')
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto)
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getUserData(@GetUser() user: any) {
    console.log('BACK USER', user);
    // console.log('USEE BACK');
    
    return this.authService.getUserData(user)
  }


}

