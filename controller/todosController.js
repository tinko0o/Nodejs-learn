const { asyncMiddleware } = require("../middlewares/asyncMiddleware");
// const Todo = require("../models/mongo/todo");
const Todo = require("../models/mysql/Todo");
const { ErrorResponse } = require("../response/ErrorResponse");

const addTodo = asyncMiddleware( async (req, res,next) => {
  const { content } = req.body;
  const { email } = req.user
  // Mongo
  // const newTodo = new Todo({
  //   content,
  //   email,
  // });
  // await newTodo.save();

  // MySql
  await Todo.create({
    content,
    email,
  });

  return res.status(201).json({
    success: true,
    // user: req.user,
  });
});

const getTodoById = asyncMiddleware( async (req, res,next) => {
  const { id } = req.params;
  const { userId } = req.user;
  // Mongo
  // const todo = await Todo.findOne({_id:id, userId})
  // MySql
  const todo = await Todo.findOne({ where: {id} })
  if(!todo){
    throw new ErrorResponse(404, "Not found!")
  }
  res.json({
    success:true,
    data:todo,
  })
});

const getTodo = asyncMiddleware( async (req, res,next) => {
  const {userId}= req.user;
  // Mongo
  // const todos = await Todo.find().populate("userEmail","-password");
  // MySql
  const todos = await Todo.findAll();

  return res.status(201).json({
    success: true,
    data: todos,
  });
});

const deleteTodo = asyncMiddleware( async (req, res,next) => {
  const { id } = req.params
  // Mongo
  // await Todo.findByIdAndDelete(req.params.id);
  // MySql
  await Todo.destroy({
    where:{
      id,
    },
  });

  return res.status(200).json({
    success: true,
  });
});

const updateTodo = asyncMiddleware( async (req, res,next) => {
  const { id } = req.params;
  const { content } = req.body;
  // Mongo
  // await Todo.findByIdAndUpdate(id, { content });
  // MySql
  const result = await Todo.update(
    {
      content,
    },
    {
      where:{
        id,
      },
    }
  );

  return res.json({
    success: true,
    data:result
  });
});

module.exports = {
  addTodo,
  getTodo,
  deleteTodo,
  updateTodo,
  getTodoById,
};
