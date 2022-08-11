const express = require("express");
const router = express.Router();
const recordController = require("../controllers/recordController.js");
const authMiddleware = require("../middleware/auth.middleware.js");
const { recordCreateValidation } = require("../validations/validations.js");

router.get("/", recordController.getAll);
// router.get("/:recordId", recordController.getOneRecord);

router.post(
  "/",
  authMiddleware,
  recordCreateValidation,
  recordController.create
);

// router.delete("/:recordId", recordController.deleteOneRecord);

module.exports = router;
