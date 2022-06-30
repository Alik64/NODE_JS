const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const getOneWorkout = (workoutId) => {
  const workout = DB.workouts.find((workout) => workout.id === workoutId);
  if (typeof workout === "undefined") {
    return;
  }
  return workout;
};
const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `Workout with the name ${newWorkout.name} already exists`,
    };
  }
  try {
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneWorkout = (workoutId, changes) => {
  const indexForUpdate = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForUpdate === -1) {
    return;
  }

  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updateAt: new Date().toLocaleString("fr-Fr", { timeZone: "Europe/Paris" }),
  };

  DB.workouts[indexForUpdate] = updatedWorkout;
  saveToDatabase(DB);

  return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
  const indexForDeleting = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );
  if (indexForDeleting === -1) {
    return;
  }
  DB.workouts.splice(indexForDeleting, 1);
  saveToDatabase(DB);
};

module.exports = {
  getAllWorkouts,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
