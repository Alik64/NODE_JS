import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  loginValidation,
  registerValidation,
  postCreateValidation,
} from "./validations/validations.js";

import { UserController, PostController } from "./controllers/index.js";

import { checkAuth, handleValidationErrors } from "./utils/index.js";

dotenv.config();

mongoose
  .connect(process.env.REACT_APP_MONGO_DB_KEY)
  .then(() => {
    console.log("Database connected with success");
  })
  .catch((error) => console.log("DB error : ", error));

const app = express();
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const PORT = process.env.PORT || 4444;

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});
app.get("/", (req, res) => {
  res.json({ message: "Hello world !" });
});

app.post(
  "/auth/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  UserController.register
);

app.get("/auth/me", checkAuth, UserController.getMe);

app.get("/posts", PostController.getAll);
app.get("/posts/:id", PostController.getOne);

app.post(
  "/posts",
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.create
);

app.delete("/posts/:id", checkAuth, PostController.remove);

app.patch(
  "/posts/:id",
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  PostController.update
);

app.listen(PORT, (error) => {
  if (error) {
    return error;
  }
  console.log(`Server depoyed on port : ${PORT}`);
});
