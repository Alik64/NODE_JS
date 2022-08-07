const { validationResult } = require("express-validator");
const Auth = require("../database/Auth.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User.js");

const createNewUser = async (req, res) => {
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
    const createdUser = await Auth.createNewUser(newUser);

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

module.exports = {
  createNewUser,
};
