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

const workoutCreateValidation = [
  body("name", "Enter workout title").isLength({ min: 3 }).isString(),
  body("mode", "Enter a text").isString(),
  body("timer", "Enter a text").isString(),
  body("time", "Enter a text").optional().isInt(),
  body("exercises", "Invalid format, must be an array").isString(),
];
const recordCreateValidation = [body("record", "Enter a record").isString()];

module.exports = {
  registerValidation,
  loginValidation,
  workoutCreateValidation,
  recordCreateValidation,
};
