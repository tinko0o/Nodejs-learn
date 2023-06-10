const Joi = require("joi");
const objectIdSchema = require("./objectIdSchema");
const todoSchema = Joi.object({
  content: Joi.string().min(5).required(),
});

const deleteSchema = Joi.object({
  id: Joi.ref("objectIdSchema"),
});

module.exports = {
  todoSchema,
  deleteSchema,
};
