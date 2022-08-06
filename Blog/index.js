import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from "dotenv";
import registerValidation from "./validations/auth.js";

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
app.post("/auth/register", registerValidation, (req, res) => {
  res.json({ success: true });
});

app.listen(PORT, (error) => {
  if (error) {
    return error;
  }
  console.log(`Server depoyed on port : ${PORT}`);
});
