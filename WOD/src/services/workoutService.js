const { v4: uuid } = require("uuid");
const Workout = require("../database/Workout");

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkout = (workoutId) => {
  const workout = Workout.getOneWorkout(workoutId);
  return workout;
};

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" }),
    updatedAt: new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" }),
  };
  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};

const updateOneWorkout = (workoutId, changes) => {
  const updatedworkout = Workout.updateOneWorkout(workoutId, changes);
  return updatedworkout;
};

const deleteOneWorkout = (workoutId) => {
  Workout.deleteOneWorkout(workoutId);
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
