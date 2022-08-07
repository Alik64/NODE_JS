const { validationResult } = require("express-validator");
const Auth = require("../database/Auth.js");
const bcrypt = require("bcrypt");
const UserModel = require("../models/User.js");

const createNewUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  const password = req.body.password;
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = new UserModel({
    email: req.body.email,
    passwordHash,
    name: req.body.name,
    avatarUrl: req.body.avatarUrl,
  });

  const createdUser = await Auth.createNewUser(newUser);

  res.json(createdUser);
};

module.exports = {
  createNewUser,
};
