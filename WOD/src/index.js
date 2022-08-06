const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const v1workoutRouter = require("./v1/routes/workoutRoutes.js");
const v1recordRouter = require("./v1/routes/recordRoutes.js");
const v1registerRouter = require("./v1/routes/registerRoutes.js");
const { registerValidation } = require("./v1/validations/auth.js");

dotenv.config();
mongoose
  .connect(process.env.REACT_APP_MONGO_DB_URL)
  .then(() => {
    console.log("Database connected with success!");
  })
  .catch((error) => console.log("DB error : ", error));
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/api/v1/workouts", cors(), v1workoutRouter);
app.use("/api/v1/records", cors(), v1recordRouter);
app.use("/api/v1/register", cors(), registerValidation, v1registerRouter);

app.listen(PORT, (error) => {
  if (error) {
    return error;
  }
  console.log(`Server is deployed on port ${PORT} :)`);
});
