const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const characterRoutes = require("./v1/routes/characterRoutes.js");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use("/api/v1/characters", cors(), characterRoutes);

app.listen(PORT, () => {
  console.log(`Server is deployed on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
