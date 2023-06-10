const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:27017/nodejs-course")
  .then(() => {
    console.log("connect sucsess");
  })
  .catch((err) => {
    console.log("connect fail");
    console.log(err);
  });
