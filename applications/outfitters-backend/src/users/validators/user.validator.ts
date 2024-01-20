import { BadRequestException, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import Joi from 'joi';

export const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
    .max(20)
    .error(
      new Joi.ValidationError(
        'Invalid Password',
        [
          {
            message:
              'Password must be atleast 8 characters long and have upper and lowercase alphanumeric characters',
            path: [],
            type: 'string.uppercase',
          },
        ],
        '',
      ),
    ),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  username: Joi.string().required(),
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
