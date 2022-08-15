const WorkoutModel = require("../models/Workout.js");

const getAll = async (req, res) => {
  try {
    const workouts = await WorkoutModel.find();
    res.json(workouts);
  } catch (error) {
    res
      .status(error?.status || 500)
      .json({ message: "Impossible to get workouts" });
  }
};
const getOne = async (req, res) => {
  try {
    const workoutId = req.params.id;
    const workout = await WorkoutModel.findById(workoutId);
    res.json(workout);
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({
      message: "Impossible to get workout",
    });
  }
};
const create = async (req, res) => {
  try {
    const doc = new WorkoutModel({
      name: req.body.name,
      mode: req.body.mode,
      timer: req.body.timer,
      time: req.body.time,
      exercises: req.body.exercises,
    });

    const workout = await doc.save();
    res.json(workout);
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({
      message: "Impossible to create a workout",
    });
  }
};

const remove = async (req, res) => {
  try {
    const workoutId = req.params.id;
    WorkoutModel.findOneAndDelete(
      {
        _id: workoutId,
      },
      (err, doc) => {
        if (err) {
          console.log("error : ", err);
          return res.status(500).json({
            message: "Impossible to delete workout",
          });
        }
        if (!doc) {
          return res.status(404).json({
            message: "Workout not found",
          });
        }
        res.json({ message: " success" });
      }
    );
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({
      message: "Impossible to delete Workout",
    });
  }
};

const update = async (req, res) => {
  try {
    const workoutId = req.params.id;

    await WorkoutModel.updateOne(
      {
        _id: workoutId,
      },
      {
        name: req.body.name,
        mode: req.body.mode,
        timer: req.body.timer,
        time: req.body.time,
        exercises: req.body.exercises,
      }
    );
    res.json({ success: true });
  } catch (error) {
    console.log("error : ", error);
    res.status(500).json({
      message: "Impossible to update a workout",
    });
  }
};
module.exports = {
  getAll,
  // getRandom,
  getOne,
  create,
  update,
  remove,
};
