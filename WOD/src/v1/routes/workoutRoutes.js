const express = require("express");
const workoutController = require("../controllers/workoutController.js");
const { workoutCreateValidation } = require("../validations/validations.js");
const authMiddleware = require("../middleware/auth.middleware.js");
const validationErrorsMdw = require("../middleware/validationErrors.middleware.js");

const router = express.Router();

router.get("/", workoutController.getAll);
router.get("/random", workoutController.getRandom);
router.get("/:id", workoutController.getOne);

router.post(
  "/",
  authMiddleware,
  workoutCreateValidation,
  validationErrorsMdw,
  workoutController.create
);

router.patch(
  "/:id",
  authMiddleware,
  validationErrorsMdw,
  workoutController.update
);

router.delete("/:id", authMiddleware, workoutController.remove);

module.exports = router;
