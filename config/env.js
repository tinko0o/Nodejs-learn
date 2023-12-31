require("dotenv").config();
exports.env = {
    PORT: process.env.PORT || 3000,
    SECRET_KEY: process.env.SECRET_KEY || "123456",
    MONGO_URL:process.env.MONGO_URL || "mongodb://0.0.0.0:27017/nodejs-course",
    EXPIRED_IN:process.env.EXPIRED_IN || "1d",

    MYSQL_HOST: process.env.MYSQL_HOST || "localhost",
    MYSQL_USER: process.env.MYSQL_USER || "root",
    MYSQL_PORT: process.env.PORT || 3306,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || "root",
    MYSQL_DATABASE: process.env.MYSQL_DATABASE || "nodejs-course",
}