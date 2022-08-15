const express = require("express");

const {
  loginValidation,
  registerValidation,
} = require("../validations/validations.js");

const authController = require("../controllers/authController.js");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/me", authMiddleware, authController.getMe);
router.post("/register", registerValidation, authController.register);
router.post("/login", loginValidation, authController.login);

module.exports = router;
