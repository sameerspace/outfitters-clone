import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { AuthService } from './authentication.service';
import { AuthGuard } from './authentication.guard';
import { CreateUserDto, LoginDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() loginDto: LoginDto) {
    return this.authService.signIn(loginDto.email, loginDto.password);
  }

  @Post('register')
  async signUp(@Body() user: CreateUserDto) {
    return this.authService.signUp(user);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: Request) {
    return 'Authenticated';
  }
}
