const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  const { id } = req.query;
  res.send(`Hello! ${id}`);
});

router.post("/", (req, res) => {
  res.send(`Hello ${req.query.id}`);
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
