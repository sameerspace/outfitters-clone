import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(createUserDto);

    return await this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(options: FindOneOptions<User>): Promise<User> {
    const user = await this.usersRepository.findOne(options);

    if (!user) {
      throw new BadRequestException('User Not Found');
    }

    return user;
  }

  async userExists(options: FindOneOptions<User>): Promise<boolean> {
    const user = await this.usersRepository.findOne(options);

    if (!user) {
      return false;
    }
    return true;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne({ where: { id } });

    if (!user) {
      throw new BadRequestException('User Not Found');
    }

    const updatedUser = { ...user, ...updateUserDto };

    return this.usersRepository.save(updatedUser);
  }

  async remove(id: string): Promise<User> {
    const user = await this.usersRepository.findOne({ where: { id } });

    if (!user) {
      throw new BadRequestException('User Not Found');
    }

    return await this.usersRepository.remove(user);
  }
}
