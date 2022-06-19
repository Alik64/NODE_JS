const express = require("express");
const v1Router = require("./v1");
const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log(`Server is deployed on port ${PORT} :)`);
});
