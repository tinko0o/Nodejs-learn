const Joi = require("./joi");

const emailSchema = Joi.string().email().required();
const pwSchema = Joi.string().min(6).required();

const registerSchema = Joi.object({
  username: Joi.string().min(3).required(),
  email: emailSchema,
  password: pwSchema,
});

const loginSchema = Joi.object({
  email: emailSchema,
  password: pwSchema,
});

module.exports = {
  registerSchema,
  loginSchema,
};
