const {Sequelize}= require("sequelize");
const {env} = require ("../../config/env")
const sequelize = new Sequelize(
    "nodejs-course",
    "root",
    "root",
    {
        host:"localhost",
        port:3306,
        dialect:"mysql",
    }
);
sequelize.sync().then(()=>{
  console.log("connected Database succ");
}).catch((err)=>{
  console.log("==>",err);
  console.log("Can not connect DB");
})


module.exports = sequelize;