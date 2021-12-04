import Joi from "joi";

export const createReviewValidate = Joi.object().keys({
  name: Joi.string().required(),
  comment: Joi.string().required(),
});

export const updateReviewValidate = Joi.object().keys({
  name: Joi.string(),
  comment: Joi.string(),
});

export const createProductValidate = Joi.object().keys({
  name: Joi.string().required(),
  image: Joi.string().required(),
  categories: Joi.array().items(Joi.string()).required(),
  description: Joi.string().required(),
  price: Joi.number().integer().required(),
  countInStock: Joi.number().integer().required(),
});

export const updateProductValidate = Joi.object().keys({
  name: Joi.string(),
  image: Joi.string(),
  categories: Joi.array().items(Joi.string()),
  description: Joi.string(),
  price: Joi.number().integer(),
  countInStock: Joi.number().integer(),
});
