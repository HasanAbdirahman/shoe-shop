const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");

// require env
require("dotenv").config();
require("./config/database");

const app = express();
app.use(express.json());
app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));

userRoute = require("./routes/users");
// routes
app.use("/api/user", userRoute);

// app listening
app.listen(process.env.PORT, function () {
  console.log("Server is running on port: " + process.env.PORT);
});
