const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const config = require("config");
const dbConfig = config.get("Users.dbConfig.dbName");
const port = process.env.PORT || 3000;
// const cors = require("cors");
const mongoose = require("mongoose");
// app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Import routes
const AppRoutes = require("./routes/App");
const createUserService = require("./Services/createUser");
app.use("/post", AppRoutes);
app.use("/", createUserService);

mongoose
  .connect(dbConfig)
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
// Middleware

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
