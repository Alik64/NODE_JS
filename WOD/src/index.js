const express = require("express");
const v1workoutRouter = require("./v1/routes/workoutRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/workouts", v1workoutRouter);

app.listen(PORT, () => {
  console.log(`Server is deployed on port ${PORT} :)`);
});
