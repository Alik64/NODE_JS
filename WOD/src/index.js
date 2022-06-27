const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const v1workoutRouter = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use("/api/v1/workouts", cors(), v1workoutRouter);

app.listen(PORT, () => {
  console.log(`Server is deployed on port ${PORT} :)`);
});
