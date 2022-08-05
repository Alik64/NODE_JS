const { Schema, model } = require("mongoose");

const RecordSchema = new Schema(
  {
    workout: { type: String, required: true },
    record: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Record", RecordSchema);
