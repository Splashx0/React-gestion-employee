const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const EmployeeRoutes = require("./routes/employeeRoutes");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/DarBlockchainTestApp")
  .then((result) => {
    app.listen(8000);
    console.log("connected");
  })
  .catch((err) => console.log(err));

app.use(morgan());
app.use(bodyParser.json());
app.use("/api/employee", EmployeeRoutes);
