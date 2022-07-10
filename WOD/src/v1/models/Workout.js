const { Schema, model } = require("mongoose");

const WorkoutSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    mode: { type: String, required: true },
    equipment: [{ type: String }],
    exercises: [{ type: String }],
    trainerTips: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Workout", WorkoutSchema);
