const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const User = require("../model/User");

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteUserById,
} = require("../controller/user");


router.get("/", getAllUsers);

router.post("/", createUser);

router.get("/:userId", getUserById);

router.put("/", updateUser);

router.delete("/:userId", deleteUserById);

router.delete("/", deleteUser);

module.exports = router;
