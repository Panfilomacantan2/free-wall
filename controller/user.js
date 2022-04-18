
import mongoose from "mongoose";
import User from "../model/User.js";

const getAllUsers = async (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(user);
    }
  });
};

const createUser = async (req, res) => {
  const { name } = req.body;
  res.status(200).send(`Hello ${name}`);
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
};

const getUserById = async (req, res) => {
  const { userId } = req.params;
  res.send(userId);
};

const updateUser = async (req, res) => {
  const { _id, name } = req.body;
  User.updateOne({ _id: _id }, { $set: { name: name } }, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
};

const deleteUser = async (req, res) => {
  User.deleteMany({}, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
};

const deleteUserById = async (req, res) => {
  const { userId } = req.params;
  User.deleteOne({ _id: userId }, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
};

export {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  deleteUserById,
};
