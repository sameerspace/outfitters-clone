import Joi from 'joi';

export const configValidationSchema = Joi.object({
  DATABASE_TYPE: Joi.string().valid('postgres', 'mysql'),
  DATABASE_HOST: Joi.string(),
  DATABASE_PORT: Joi.number(),
  DATABASE_USERNAME: Joi.string(),
  DATABASE_PASSWORD: Joi.string(),
  DATABASE_NAME: Joi.string(),
});
