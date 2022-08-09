const express = require("express");

const {
  authValidation,
  registerValidation,
} = require("../validations/auth.js");

const authController = require("../controllers/authController.js");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/me", authMiddleware, authController.getMe);
router.post("/register", registerValidation, authController.createNewUser);
router.post("/login", authValidation, authController.login);

module.exports = router;
