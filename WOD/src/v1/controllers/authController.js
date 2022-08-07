const { validationResult } = require("express-validator");
const UserModel = require("../models/User.js");

const createNewUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  const doc = new UserModel({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    avatarUrl: req.body.avatarUrl,
  });

  res.json({
    success: true,
  });
};

module.exports = {
  createNewUser,
};
