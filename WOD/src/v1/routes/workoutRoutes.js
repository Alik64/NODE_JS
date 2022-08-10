const express = require("express");
const workoutController = require("../controllers/workoutController.js");
const recordController = require("../controllers/recordController.js");

const router = express.Router();

// router.get("/", workoutController.getAllWorkouts);
// router.get("/random", workoutController.getRandomWorkout);
// router.get("/:workoutId", workoutController.getOneWorkout);
// router.get("/:workoutId/records", recordController.getRecordForWorkout);

router.post("/", workoutController.create);

// router.patch("/:workoutId", workoutController.updateOneWorkout);

// router.delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;
