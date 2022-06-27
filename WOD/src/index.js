const express = require("express");
const v1workoutRouter = require("./v1/routes/workoutRoutes");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5001;

app.use("/api/v1/workouts", cors(), v1workoutRouter);

app.listen(PORT, () => {
  console.log(`Server is deployed on port ${PORT} :)`);
});
