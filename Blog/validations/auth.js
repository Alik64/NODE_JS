import { body } from "express-validator";

export const registerValidation = [
  body("email", "Invalid email format").isEmail(),
  body("password", "Passwords must be at least 5 characters").isLength({
    min: 5,
  }),
  body("fullName", "Enter your name").isLength({ min: 3 }),
  body("avatarUrl", "Invalid url").optional().isURL(),
];
