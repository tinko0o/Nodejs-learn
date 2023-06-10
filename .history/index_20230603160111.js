const express = require("express");
const app = express();
const PORT = 3000;
require("./database/connect");
app.use(express.json());
const Todo = require("./models/todo");

app.post("/todos", async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({
      success: false,
      message: "Can not add!",
    });
  }

  const newTodo = new Todo({
    content,
  });

  await newTodo.save();

  return res.status(201).json({
    success: true,
    message: "Can not add!",
  });
});

// Register route

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
