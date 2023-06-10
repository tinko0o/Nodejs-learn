const Joi = require("joi");
const mongoose = require("mongoose");

const isValidObjectId = (value, hepper) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return hepper.error("any.invalid");
  }
  return value;
};

Joi.ObjectId = () => Joi.custom(isValidObjectId);

module.exports = Joi;
