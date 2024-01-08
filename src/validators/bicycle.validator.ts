import Joi from "joi";

const bicycleValidator = Joi.object({
  ID: Joi.string().min(5).required(),
  name: Joi.string().min(5).required(),
  type: Joi.string().min(5).required(),
  color: Joi.string().min(5).required(),
  wheelSize: Joi.number().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
});

export { bicycleValidator };
