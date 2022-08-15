const express = require("express");
const router = express.Router();
const recordController = require("../controllers/recordController.js");
const authMiddleware = require("../middleware/auth.middleware.js");
const { recordCreateValidation } = require("../validations/validations.js");

router.get("/", authMiddleware, recordController.getAll);
router.get("/:id", authMiddleware, recordController.getOne);

router.post(
  "/",
  authMiddleware,
  recordCreateValidation,
  recordController.create
);

router.delete("/:id", authMiddleware, recordController.remove);
router.patch("/:id", authMiddleware, recordController.update);

module.exports = router;
