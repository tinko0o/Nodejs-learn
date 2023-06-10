const Joi = require("joi");
const mongoose = require("mongoose");

const isValidObjectId = (value, hepper) => {
  if (!mongoose.Types.ObjectId.isValid(value)) {
    return hepper.error("any.invalid");
  }
  return value;
};

Joi.objectId = () => Joi.custom(isValidObjectId);

module.exports = Joi;
