import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { AuthService } from './authentication.service';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './authentication.controller';
import { UsersService } from '../users/users.service';
import { jwtConstants } from '../utils/constants/constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
})
export class AuthenticationModule {}
