import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { registerValidation } from "./validations/auth.js";
import { validationResult } from "express-validator";
import UserModel from "./models/User.js";

dotenv.config();

mongoose
  .connect(process.env.REACT_APP_MONGO_DB_KEY)
  .then(() => {
    console.log("Database connected with success");
  })
  .catch((error) => console.log("DB error : ", error));

const app = express();
const PORT = process.env.PORT || 4444;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("AMF");
});
app.post("/auth/login", (req, res) => {
  const token = jwt.sign(
    {
      email: req.body.email,
      fullname: "Vasya Pupkin",
    },
    process.env.REACT_APP_SECRET
  );

  res.json({ success: true, token });
});
app.post("/auth/register", registerValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const doc = new UserModel({
      email: req.body.email,
      fullName: req.body.fullName,
      avatarUrl: req.body.avatarUrl,
      passwordHash,
    });

    const newUser = await doc.save();

    res.json(newUser);
  } catch (error) {
    res.status(500).json({
      message: "Impossible to register new user.",
    });
  }
});

app.listen(PORT, (error) => {
  if (error) {
    return error;
  }
  console.log(`Server depoyed on port : ${PORT}`);
});
