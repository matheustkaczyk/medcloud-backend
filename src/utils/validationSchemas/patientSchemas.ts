import joi from 'joi';

export const CreatePatientSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  address: joi.string().required()
});

export const UpdatePatientSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  address: joi.string().required()
});