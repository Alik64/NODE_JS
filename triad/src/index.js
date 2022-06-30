const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5001;

const characterRoutes = require("./routes/characterRoutes.js");

app.use(bodyParser.json());
app.use("/api/characters", cors(), characterRoutes);

app.listen(PORT, () => {
  console.log(`Server is deployed on port ${PORT}`);
});
