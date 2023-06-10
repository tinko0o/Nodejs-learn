const Joi = require("joi");

const todoSchema = Joi.object({
  content: Joi.string().min(5).required(),
});

module.exports = todoSchema;
