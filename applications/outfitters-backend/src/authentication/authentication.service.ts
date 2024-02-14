import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string) {
    const user = await this.userService.findOne({ where: { email } });
    if (user.password !== pass) {
      throw new UnauthorizedException('Invalid Password');
    }
    return {
      access_token: this.generateToken(user.id, user.email),
      user,
    };
  }

  async signUp(user: CreateUserDto) {
    const existingUser = await this.userService.userExists({
      where: { email: user.email },
    });

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const createdUser = await this.userService.create(user);
    return {
      user: createdUser,
      access_token: this.generateToken(createdUser.id, createdUser.email),
    };
  }

  generateToken(userId: string, email: string) {
    const payload = { sub: userId, email };
    return this.jwtService.sign(payload);
  }
}
