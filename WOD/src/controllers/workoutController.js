const getAllWorkouts = (req, res) => {
  res.send("Get all Workouts");
};

const getOneWorkout = (req, res) => {
  console.log(req.params);
  res.send(
    `Get an existing workout by it's id : <span style="font-size:1.2rem; color:blue">${req.params.workoutId}</span>`
  );
};

const createNewWorkout = (req, res) => {
  res.send("Create a new workout");
};

const updateOneWorkout = (req, res) => {
  res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {
  res.send("Delete an existing workout");
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
