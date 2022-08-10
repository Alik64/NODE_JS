const { Schema, model } = require("mongoose");

const RecordSchema = new Schema(
  {
    workout: { type: Schema.Types.ObjectId, ref: "Workout", required: true },
    record: { type: String, required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Record", RecordSchema);
