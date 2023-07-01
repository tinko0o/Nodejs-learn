// const User = require("../models/mongo/user");
const User = require("../models/mysql/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {env} = require("../config/env");
const { asyncMiddleware } = require("../middlewares/asyncMiddleware");
const { ErrorResponse } = require("../response/ErrorResponse");


const register = asyncMiddleware( async (req, res,next) => {
  const { username, email, password } = req.body;
  //Mongo
  // const isUserExisted = await User.findOne({ email });
  // MySql
  const isUserExisted = await User.findOne({where: {email} });

  if (isUserExisted) {
    throw new ErrorResponse(409, "Email is already existed!")
  }
  const salt = bcrypt.genSaltSync(12);
  const hashPassword = bcrypt.hashSync(password, salt);

  //Mongo
  // const user = new User({
  //   username,
  //   email,
  //   password: hashPassword,
  // });
  // await user.save();

  // Mysql
  const newUser = await User.create({
    username,
    email,
    password: hashPassword,
  });

  return res.status(201).json({
    success: true,
  });
});

const login = asyncMiddleware( async (req, res,next) => {
    const { email, password } = req.body;
    // Mongo
    // const user = await User.findOne({ email });
    // MySql
    const user = await User.findOne({where: {email} });
    
    if (!user) {
      throw new ErrorResponse(401, "Unauthorized")
    }

    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      throw new ErrorResponse(401, "Unauthorized")
    }
    //tao jwt
    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        email: user.email,
      },
        env.SECRET_KEY,
      { expiresIn: env.EXPIRED_IN }
    );

    return res.json({
      success: true,
      data: token,
    });
});

module.exports = {
  register,
  login,
};
