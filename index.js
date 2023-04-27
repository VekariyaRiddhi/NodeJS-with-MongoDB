require("dotenv").config();
require("./db");
const express = require("express");
const { studentRouter } = require("./routes/student");

const app = express();
const port = process.env.PORT || 7000;

app.use(express.json());

app.use("/students", studentRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// console.log(process.env.CONNECTION_STRING);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
