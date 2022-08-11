const express = require("express");
const workoutController = require("../controllers/workoutController.js");
const recordController = require("../controllers/recordController.js");
const { workoutCreateValidation } = require("../validations/validations.js");

const router = express.Router();

router.get("/", workoutController.getAll);
// router.get("/random", workoutController.getRandomWorkout);
// router.get("/:workoutId", workoutController.getOneWorkout);
// router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.post("/", workoutCreateValidation, workoutController.create);

// router.patch("/:workoutId", workoutController.updateOneWorkout);

// router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
