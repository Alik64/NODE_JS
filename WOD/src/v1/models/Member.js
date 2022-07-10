const { Schema, model } = require("mongoose");

const MemberSchema = new Schema(
  {
    name: { type: String, required: true },
    gender: String,
    dateOfBirth: { type: Date },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Member", MemberSchema);
