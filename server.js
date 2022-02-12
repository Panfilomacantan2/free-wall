const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const nameArray = [
    "John",
    "Jane",
    "Joe",
    "Jack",
    "Jill",
    "Jenny",
]

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(nameArray);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
