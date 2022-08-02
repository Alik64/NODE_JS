const DB = require("./db.json");
const { saveToDatabase, useRandomItems } = require("./utils");

const getAllWorkouts = (filterParams) => {
  const { page, mode, length, equipment } = filterParams;

  try {
    let workouts = DB.workouts;

    if (page) {
      let pageSize = 5;
      let firstElementOnPage = (page - 1) * pageSize;

      return workouts.slice(firstElementOnPage, firstElementOnPage + pageSize);
    }
    if (mode) {
      return workouts.filter((workout) =>
        workout.mode.toLowerCase().includes(mode)
      );
    }
    if (length) {
      return workouts.slice(0, length);
    }

    if (equipment) {
      return workouts.filter((workout) =>
        workout.equipment.includes(equipment)
      );
    }
    return workouts;
  } catch (error) {
    throw { status: 500, message: error };
  }
};
const getRandomWorkout = async () => {
  try {
    let workouts = DB.workouts;
    const randomWorkout = await useRandomItems(workouts, 1, workouts.length);
    return randomWorkout;
  } catch (error) {
    throw { status: 500, message: error };
  }
};
const getOneWorkout = (workoutId) => {
  try {
    const workout = DB.workouts.find((workout) => workout.id === workoutId);
    if (typeof workout === "undefined") {
      throw {
        status: 400,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    return workout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};
const createNewWorkout = (newWorkout) => {
  try {
    const isAlreadyAdded =
      DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Workout with the name ${newWorkout.name} already exists`,
      };
    }
    DB.workouts.push(newWorkout);
    saveToDatabase(DB);
    return newWorkout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const updateOneWorkout = (workoutId, changes) => {
  try {
    const indexForUpdate = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );
    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find workout with id '${workoutId}'`,
      };
    }

    const updatedWorkout = {
      ...DB.workouts[indexForUpdate],
      ...changes,
      updateAt: new Date().toLocaleString("fr-Fr", {
        timeZone: "Europe/Paris",
      }),
    };

    DB.workouts[indexForUpdate] = updatedWorkout;
    saveToDatabase(DB);

    return updatedWorkout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneWorkout = (workoutId) => {
  try {
    const indexForDeleting = DB.workouts.findIndex(
      (workout) => workout.id === workoutId
    );
    if (indexForDeleting === -1) {
      throw {
        status: 400,
        message: `Can't find workout with id '${workoutId}'`,
      };
    }
    DB.workouts.splice(indexForDeleting, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllWorkouts,
  getRandomWorkout,
  createNewWorkout,
  getOneWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
