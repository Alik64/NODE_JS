const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5001;
const characterRoutes = require("./src/routes/characterRoutes.js");

app.use("/api/characters", cors(), characterRoutes);

app.listen(PORT, () => {
  console.log(`Server is deployed on port ${PORT}`);
});
