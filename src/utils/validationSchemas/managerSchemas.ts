import joi from 'joi';

export const CreateManagerSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export const AuthenticateManagerSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
})