const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// For testing purpose

app.get("/", (req, res) => {
  res.send("<h1>Hello mfrs!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is deployed on port ${PORT} :)`);
});
