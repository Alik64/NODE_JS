const { body } = require("express-validator");

const registerValidation = [
  body("email", "Invalid email format").isEmail(),
  body("password", "Passwords must be at least 5 characters").isLength({
    min: 5,
  }),
  body("name", "Enter your name").isLength({ min: 3 }),
  body("avatarUrl", "Invalid url").optional().isURL(),
];

const loginValidation = [
  body("email", "Invalid email format").isEmail(),
  body("password", "Passwords must be at least 5 characters").isLength({
    min: 5,
  }),
];

module.exports = {
  registerValidation,
  loginValidation,
};
