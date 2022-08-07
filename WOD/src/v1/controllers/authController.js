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
  try {
    const createdUser = await Auth.createNewUser(newUser);
    res.status(201).json({ success: true, data: createdUser });
  } catch (error) {
    res
      .status(error?.status || error)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  createNewUser,
};
