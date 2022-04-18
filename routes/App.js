import express from "express";
const router = express.Router();

import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteUserById,
} from "../controller/user.js";

router.get("/", getAllUsers);

router.post("/", createUser);

router.get("/:userId", getUserById);

router.put("/", updateUser);

router.delete("/:userId", deleteUserById);

router.delete("/", deleteUser);

export default router;
