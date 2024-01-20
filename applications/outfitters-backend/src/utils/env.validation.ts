import Joi from 'joi';

export const configValidationSchema = Joi.object({
  DB_TYPE: Joi.string().valid('postgres', 'mysql'),
  DB_HOST: Joi.string(),
  DB_PORT: Joi.number(),
  DB_USERNAME: Joi.string(),
  DB_PASSWORD: Joi.string(),
  DB_NAME: Joi.string(),
});
