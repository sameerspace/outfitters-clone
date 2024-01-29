import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

interface SignUserPayload {
  sub: string;
  username: string;
}

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string) {
    const user = await this.usersService.findOne({ where: { username } });
    if (user.password !== pass) {
      throw new UnauthorizedException();
    }
    return {
      access_token: this.signPayload({ sub: user.id, username: user.username }),
    };
  }

  signPayload(payload: SignUserPayload) {
    return this.jwtService.sign(payload);
  }
}
