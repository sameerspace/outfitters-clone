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
import { CreateUserDto } from '../users/dto/create-user.dto';
import { UsersService } from '../users/users.service';
import { CreateUserValidator } from '../users/validators/user.validator';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto?.username, signInDto?.password);
  }

  @Post('register')
  async signUp(@Body(new CreateUserValidator()) user: CreateUserDto) {
    const createdUser = await this.userService.create(user);
    return {
      user: createdUser,
      access_token: this.authService.generateToken(
        createdUser.id,
        createdUser.username,
      ),
    };
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req: Request) {
    return 'Authenticated';
  }
}
