const WorkoutModel = require("../models/Workout.js");
const Workout = require("../database/Workout.js");
// const getAll = (req, res) => {
//   const { mode, length, page, equipment } = req.query;
//   try {
//     const allWorkouts = workoutService.getAllWorkouts({
//       mode,
//       length,
//       page,
//       equipment,
//     });
//     res.send({ status: "OK", data: allWorkouts });
//   } catch (error) {
//     res
//       .status(error?.status || 500)
//       .send({ status: "FAILED", data: { error: error?.message || error } });
//   }
// };
// const getRandomWorkout = async (req, res) => {
//   try {
//     const randomWorkout = await workoutService.getRandomWorkout();
//     res.send({ status: "OK", data: randomWorkout });
//   } catch (error) {
//     res.status(error?.status || 500);
//     res.send({ status: "FAILED", data: { error: error?.message || error } });
//   }
// };
// const getOneWorkout = (req, res) => {
//   const {
//     params: { workoutId },
//   } = req;
//   if (typeof workoutId === "undefined") {
//     res.status(400).send({
//       status: "FAILED",
//       data: { error: 'Parameter ":workoutId" can not be empty.' },
//     });
//   }
//   try {
//     const workout = workoutService.getOneWorkout(workoutId);
//     res.send({ status: "OK", data: workout });
//   } catch (error) {
//     res
//       .status(error?.status || 500)
//       .send({ status: "FAILED", data: { error: error?.message || error } });
//   }
// };

// const createNewWorkout = (req, res) => {
//   const { body } = req;
//   if (!body.name || !body.mode || !body.exercises || !body.timer) {
//     res.status(400).send({
//       status: "FAILED",
//       data: {
//         error:
//           "One of the following keys in request body is missing or is empty : 'name', 'mode', 'timer', 'exercises'",
//       },
//     });
//     return;
//   }
//   const newWorkout = {
//     name: body.name,
//     mode: body.mode,
//     timer: body.timer,
//     time: body.time,
//     exercises: body.exercises,
//   };
//   try {
//     const createdWorkout = workoutService.createNewWorkout(newWorkout);
//     res.status(201).send({ status: "OK", data: createdWorkout });
//   } catch (error) {
//     res
//       .status(error?.status || error)
//       .send({ status: "FAILED", data: { error: error?.message || error } });
//   }
// };

// const updateOneWorkout = (req, res) => {
//   const {
//     body,
//     params: { workoutId },
//   } = req;

//   if (typeof workoutId === "undefined") {
//     res.status(400).send({
//       status: "FAILED",
//       data: { error: 'Parameter "workoutId" can not be empty' },
//     });
//   }
//   try {
//     const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
//     res.send({ status: "OK", data: updatedWorkout });
//   } catch (error) {
//     res
//       .status(error?.status || 500)
//       .send({ status: "FAILED", data: { error: error?.message || error } });
//   }
// };

// const deleteOneWorkout = (req, res) => {
//   const {
//     params: { workoutId },
//   } = req;

//   if (typeof workoutId === "undefined") {
//     res.status(400).send({
//       status: "FAILED",
//       data: { error: 'Parameter "workoutId" can not be empty.' },
//     });
//   }
//   try {
//     workoutService.deleteOneWorkout(workoutId);
//     res.status(204).send({ status: "OK" });
//   } catch (error) {
//     res
//       .status(error?.status || 500)
//       .send({ status: "FAILED", data: { error: error?.message || error } });
//   }
// };

const create = async (req, res) => {
  try {
    const doc = new WorkoutModel({
      name: req.body.name,
      mode: req.body.mode,
      timer: req.body.timer,
      time: req.body.time,
      exercises: req.body.exercises,
    });

    const workout = await Workout.create(doc);
    res.json(workout);
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  // getAll,
  // getRandom,
  // getOne,
  create,
  // update,
  // delete
};
