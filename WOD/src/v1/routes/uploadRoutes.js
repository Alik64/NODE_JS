const express = require("express");
const uploadController = require("../controllers/uploadController.js");
const authMiddleware = require("../middleware/auth.middleware.js");
const { upload } = require("../services/static.js");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  upload.single("image"),
  uploadController.upload
);

module.exports = router;
