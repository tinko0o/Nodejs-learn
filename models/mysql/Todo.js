const { DataTypes } = require ("sequelize")
const sequelize = require("../../database/mysql/connect");

const User = sequelize.define("Todo",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    isCompleted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false,
    },
});

module.exports = User;