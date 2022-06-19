const workoutSevice = require("../services/workoutService.js");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutSevice.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  //   console.log(req.params);
  const workout = workoutSevice.getOneWorkout();
  res.send(
    `Get an existing workout by it's id : <span style="font-size:1.2rem; color:blue">${req.params.workoutId}</span>`
  );
};

const createNewWorkout = (req, res) => {
  const createdWorkout = workoutSevice.createNewWorkout();
  res.send("Create a new workout");
};

const updateOneWorkout = (req, res) => {
  const updatedWorkout = workoutSevice.updateOneWorkout();
  res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {
  const deletedWorkout = workoutSevice.deleteOneWorkout();
  res.send("Delete an existing workout");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
