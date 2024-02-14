import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import Joi from 'joi';

export const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(20)
    .error(
      new Joi.ValidationError(
        'Invalid Password',
        [
          {
            message: 'Password must be between 8 - 20 chars',
            path: [],
            type: 'string.uppercase',
          },
        ],
        '',
      ),
    ),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
});

const loginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .error(
      new Joi.ValidationError(
        'Invalid Password',
        [
          {
            message: 'Password must be between 8 - 20 chars',
            path: [],
            type: 'string.uppercase',
          },
        ],
        '',
      ),
    ),
});

export class CreateUserValidator implements PipeTransform {
  transform(value: CreateUserDto) {
    const result = createUserSchema.validate(value);

    if (result.error) {
      const errorMessages = result.error.details.map(
        (detail) => detail.message,
      );

      throw new BadRequestException(errorMessages.join(', '));
    }

    return value;
  }
}

export class LoginUserValidator implements PipeTransform {
  transform(value: { email: string; password: string }) {
    const result = loginUserSchema.validate(value);

    if (result.error) {
      const errorMessages = result.error.details.map(
        (detail) => detail.message,
      );

      throw new BadRequestException(errorMessages.join(', '));
    }

    return value;
  }
}
