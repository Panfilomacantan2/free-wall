import express from "express";
import bodyParser from "body-parser";
const app = express();

import config from "config";
const dbConfig = config.get("Users.dbConfig.dbName");
const port = process.env.PORT || 3000;
import cors from "cors";
import mongoose from "mongoose";

//Import routes
import AppRoutes from "./routes/App.js";
import createUserService from "./Services/createUser.js";

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/post", AppRoutes);
app.use("/", createUserService);

//Connect to MongoDB
const initializeDB = async () => {
  try {
    await mongoose.connect(dbConfig);
    console.log("Connected to database!");
  } catch (err) {
    console.log("Connection failed error: " + err);
  }
};
initializeDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
