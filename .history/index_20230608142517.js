const express = require("express");
const app = express();
const PORT = 3000;
require("./database/connect");
app.use(express.json());
const todoRouter = require("./routes/todosRoute");
const userRouter = require("./routes/authRoute");

app.use("/todos", todoRouter);
app.use("/users", userRouter);
// Register route

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
