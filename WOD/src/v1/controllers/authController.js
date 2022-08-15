const { validationResult } = require("express-validator");
const Auth = require("../database/Auth.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User.js");

const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  const password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const newUser = new UserModel({
    email: req.body.email,
    passwordHash: hash,
    name: req.body.name,
    avatarUrl: req.body.avatarUrl,
  });
  try {
    const createdUser = await newUser.save();

    const token = jwt.sign(
      {
        _id: createdUser._id,
      },
      process.env.REACT_APP_SECRET,
      {
        expiresIn: "30d",
      }
    );
    const { passwordHash, ...userData } = createdUser._doc;
    res.status(201).json({ success: true, data: { ...userData, token } });
  } catch (error) {
    res
      .status(error?.status || error)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const login = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json({
        message: "Impossible to login",
      });
    }

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    );

    if (!isValidPass) {
      return res.status(400).json({
        message: "Invalid login or password",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.REACT_APP_SECRET,
      {
        expiresIn: "30d",
      }
    );

    const { passwordHash, ...userData } = user._doc;
    res.json({ ...userData, token });
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({
      message: "Impossible to login",
    });
  }
};

const getMe = async (req, res) => {
  try {
    const user = await Auth.getMe(req.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { passwordHash, ...userData } = user._doc;
    res.json(userData);
  } catch (error) {
    res.status(500).json({ message: "Access denied" });
  }
};
module.exports = {
  login,
  register,
  getMe,
};
