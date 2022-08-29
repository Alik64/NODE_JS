const express = require("express");

const {
  loginValidation,
  registerValidation,
} = require("../validations/validations.js");

const authController = require("../controllers/authController.js");
const authMiddleware = require("../middleware/auth.middleware");
const validationErrorsMdw = require("../middleware/validationErrors.middleware");

const router = express.Router();

router.get("/me", authMiddleware, authController.getMe);
router.post(
  "/register",
  registerValidation,
  validationErrorsMdw,
  authController.register
);
router.post(
  "/login",
  loginValidation,
  validationErrorsMdw,
  authController.login
);

module.exports = router;
