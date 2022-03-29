import * as Joi from 'joi';

export const validationSchema = Joi.object({
  DATABASE_HOST: Joi.string()
    .required(),
  DATABASE_PORT: Joi.string()
    .required(),
  DATABASE_USERNAME: Joi.string()
    .required(),
  DATABASE_PASSWORD: Joi.string()
    .required(),
  DATABASE_DATABASE: Joi.string()
    .required(),
  DATABASE_SYNCHRONIZE: Joi.string()
    .required(),

  GOOGLE_CLIENTID: Joi.string()
    .required(),
  GOOGLE_CLIENTSECRET: Joi.string()
    .required(),

  JWT_ACCESS_TOKEN_SECRET: Joi.string()
    .required(),
  JWT_ACCESS_TOKEN_EXPIRATION_TIME: Joi.string()
    .required(),
  JWT_REFRESH_TOKEN_SECRET: Joi.string()
    .required(),
  JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.string()
    .required(),
});