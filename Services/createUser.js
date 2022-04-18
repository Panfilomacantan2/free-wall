import express from "express";
const router = express.Router();

const nameArray = [
  "Brixson Lajara",
  "Panfilo macantan",
  "Kevin Alcuetas",
  "franz Arcebal Cayubit",
  "This REST API is created by Panfilo macantan",
  "This REST API is made of Nodejs, Express, and Mysql",
];
router.get("/create", (req, res, next) => {
  res.send(nameArray);
});

export default router;
