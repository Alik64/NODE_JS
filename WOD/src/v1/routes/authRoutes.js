const express = require("express");
const { registerValidation } = require("../validations/auth.js");
const authController = require("../controllers/authController.js");
const router = express.Router();

router.post("/register", registerValidation, authController.createNewUser);

module.exports = router;
