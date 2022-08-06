const { body } = require("express-validator");

const registerValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  body("name").isLength({ min: 3 }),
  body("avatarUrl").optional().isURL(),
];

module.exports = {
  registerValidation,
};
