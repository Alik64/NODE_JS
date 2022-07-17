import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB_KEY)
  .then(() => {
    console.log("DB connected with success");
  })
  .catch((error) => console.log("DB error : ", error));

const app = express();
const PORT = process.env.PORT || 4444;

app.use(express.json());

app.post("/auth/register", (req, res) => {
    
});

app.listen(PORT, (error) => {
  if (error) {
    return error;
  }
  console.log(`Server depoyed on port : ${PORT}`);
});
