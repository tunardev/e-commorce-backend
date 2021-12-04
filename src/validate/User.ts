import Joi from "joi";

export const loginValidate = Joi.object().keys({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const registerValidate = Joi.object().keys({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const forgotPasswordValidate = Joi.object().keys({
  email: Joi.string().email().required(),
});

export const changePasswordValidate = Joi.object().keys({
  password: Joi.string().min(8).required(),
});

