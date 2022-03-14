const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const User = require("../model/User");

router.get("/", (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(user);
    }
  });
});

router.post("/", (req, res) => {
  res.send(`Hello ${req.body.name}`);
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
  });

  user
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:userId", (req, res) => {
  const { userId } = req.params;
  res.send(userId);
});

router.delete("/:userId", (req, res) => {
  const { userId } = req.params;
  res.send(userId);
});
module.exports = router;
