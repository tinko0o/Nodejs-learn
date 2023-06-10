const Joi = require("./joi");
const todoSchema = Joi.object({
  content: Joi.string().min(5).required(),
});

const deleteSchema = Joi.object({
  id: Joi.objectId(),
});

module.exports = {
  todoSchema,
  deleteSchema,
};
