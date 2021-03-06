const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const v1workoutRouter = require("./v1/routes/workoutRoutes.js");
const v1recordRouter = require("./v1/routes/recordRoutes.js");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use("/api/v1/workouts", cors(), v1workoutRouter);
app.use("/api/v1/records", cors(), v1recordRouter);

app.listen(PORT, (error) => {
  if (error) {
    return error;
  }
  console.log(`Server is deployed on port ${PORT} :)`);
});
