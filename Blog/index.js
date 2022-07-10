import express from "express";

const app = express();
const PORT = process.env.PORT || 4444;

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.listen(PORT, (error) => {
  if (error) {
    return error;
  }
  console.log(`Server depoyed on port : ${PORT}`);
});
