// require("./database/mongo/connect");
// const sequelize = require("./database/mysql/connect")
require("./database/mysql/connect")
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const todoRouter = require("./routes/todosRoute");
const userRouter = require("./routes/authRoute");
const morgan = require("morgan");
const cors = require("cors");
app.use(express.json());
app.use(morgan("dev"))
app.use(cors());
// sequelize.sync().then(()=>{
//   console.log("connected Database succ");
// }).catch((err)=>{
//   console.log("==>",err);
//   console.log("Can not connect DB");
// })

app.use("/todos", todoRouter);
app.use("/users", userRouter);


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
