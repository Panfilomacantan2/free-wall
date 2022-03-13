const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");





const mongoClient = require("mongodb").MongoClient;

mongoClient.connect(
  "mongodb+srv://programmix:<uaDInHdfItCAQrcE>@cluster0.3mo7c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  (err, client) => {
    if (err) {
      console.log(err);
    } else {  
      console.log("Connected to MongoDB");
    }
    const db = client.db("test");
    const collection = db.collection("users");
    collection.insertOne({ name: "Brixson Lajara" });
  }
);


app.use(cors());
const nameArray = [
  "Brixson Lajara",
  "Panfilo macantan",
  "Kevin Alcuetas",
  "franz Arcebal Cayubit",
  "This REST API is created by Panfilo macantan",
  "This REST API is made of Nodejs, Express, and Mysql",
];
// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Import routes
const AppRoutes = require("./routes/App");
const createUserService = require('./Services/createUser');
app.use("/post", AppRoutes);
app.use("/", createUserService);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
