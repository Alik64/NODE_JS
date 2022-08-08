const express = require("express");
const {
  authValidation,
  registerValidation,
} = require("../validations/auth.js");
const authController = require("../controllers/authController.js");
const router = express.Router();

router.post("/register", registerValidation, authController.createNewUser);
router.post("/login", authValidation, authController.login);

module.exports = router;
