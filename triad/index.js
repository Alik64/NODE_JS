const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5001;

app.use("/api/characters", cors(), (req, res) => {
  res.send(" <h1>Get all characters</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is deployed on port ${PORT}`);
});
