import express from "express";

import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  loginValidation,
  registerValidation,
  postCreateValidation,
} from "./validations/validations.js";

import * as UserController from "./controllers/UserController.js";
import * as PostController from "./controllers/PostController.js";

import checkAuth from "./utils/checkAuth.js";

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
  res.json({ message: "AMF" });
});

app.post("/auth/login", loginValidation, UserController.login);
app.post("/auth/register", registerValidation, UserController.register);

app.get("/auth/me", checkAuth, UserController.getMe);

app.get("/posts", PostController.getAll);
app.get("/posts/:id", PostController.getOne);

app.post("/posts", checkAuth, postCreateValidation, PostController.create);

app.delete("/posts/:id", checkAuth, PostController.remove);

app.patch("/posts/:id", checkAuth, PostController.update);

app.listen(PORT, (error) => {
  if (error) {
    return error;
  }
  console.log(`Server depoyed on port : ${PORT}`);
});
