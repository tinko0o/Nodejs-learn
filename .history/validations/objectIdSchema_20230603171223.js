const Joi = require("joi");
const mongoose = require("mongoose");

const validObjectId = (value, hepper) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return hepper.error("any.invalid");
  }
  return value;
};

const craeteTodoSchema = Joi.object({
  id: Joi.custom(validObjectId),
});
