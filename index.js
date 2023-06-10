require("./database/connect");
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const todoRouter = require("./routes/todosRoute");
const userRouter = require("./routes/authRoute");
app.use(express.json());

app.use("/todos", todoRouter);
app.use("/users", userRouter);
// Register route

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
