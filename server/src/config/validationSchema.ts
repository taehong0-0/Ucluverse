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

  JWT_ACCESS_TOKEN_SECRET: Joi.string()
    .required(),
  JWT_ACCESS_TOKEN_EXPIRATION_TIME: Joi.string()
    .required(),
  JWT_REFRESH_TOKEN_SECRET: Joi.string()
    .required(),
  JWT_REFRESH_TOKEN_EXPIRATION_TIME: Joi.string()
    .required(),
    
  AWS_S3_BUCKET_NAME: Joi.string()
    .required(),
  AWS_ACCESS_KEY_ID: Joi.string()
    .required(),
  AWS_SECRET_ACCESS_KEY: Joi.string()
    .required(),
  AWS_REGION: Joi.string()
    .required(),
});