const { Schema, model } = require("mongoose");

const WorkoutSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    mode: { type: String, required: true },
    timer: { type: String, required: true },
    time: Number,
    exercises: { type: [String], required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Workout", WorkoutSchema);
