const mongoose = require("mongoose");
const { todoSchema } = require("../../validations/todoSchema");
const {Schema} = mongoose
const TodoSchema = new Schema({
  content: String,
  isCompleted: {
    default: false,
    type: Boolean,
  },
  email:String,
},
{
  timestamps:true,
  toJSON:{virtuals:true},
  toObject:{virtuals:true},
});

TodoSchema.virtual("userEmail",{
  localField:"email",
  foreignField:"email",
  ref:"user",
})
todoSchema.virtual

module.exports = mongoose.model("todo", TodoSchema);
