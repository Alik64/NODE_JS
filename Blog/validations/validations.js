import { body } from "express-validator";

export const registerValidation = [
  body("email", "Invalid email format").isEmail(),
  body("password", "Passwords must be at least 5 characters").isLength({
    min: 5,
  }),
  body("fullName", "Enter your name").isLength({ min: 3 }),
  body("avatarUrl", "Invalid url").optional().isURL(),
];

export const loginValidation = [
  body("email", "Invalid email format").isEmail(),
  body("password", "Passwords must be at least 5 characters").isLength({
    min: 5,
  }),
];

export const postCreateValidation = [
  body("title", "Enter a title").isLength({ min: 3 }).isString(),
  body("text", "Enter a text").isLength({ min: 3 }).isString(),
  body("tags", "Invalid format, must be an array").optional().isString(),
  body("imageUrl", "Invalid image link").optional().isString(),
];
