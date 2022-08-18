const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const v1workoutRouter = require("./v1/routes/workoutRoutes.js");
const v1recordRouter = require("./v1/routes/recordRoutes.js");
const v1authRouter = require("./v1/routes/authRoutes.js");
const v1uploadRouter = require("./v1/routes/uploadRoutes.js");
const authMiddleware = require("./v1/middleware/auth.middleware.js");
const { upload } = require("./v1/services/static.js");

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
app.use("/api/v1/auth", cors(), v1authRouter);

app.use("/api/v1/upload", cors(), v1uploadRouter);
app.use("/uploads", express.static("uploads"));

app.listen(PORT, (error) => {
  if (error) {
    return error;
  }
  console.log(`Server is deployed on port ${PORT} :)`);
});
