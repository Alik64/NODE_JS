const express = require("express");
const { validationResult } = require("express-validator");
const { registerValidation } = require("../validations/auth");
const router = express.Router();

router.post("/register", registerValidation, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  res.json({
    success: true,
  });
});

module.exports = router;
