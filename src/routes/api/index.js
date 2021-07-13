const router = require("express").Router();
const db = require("../../models");
const { getAllWorkouts } = require("../../controllers/api/index");

router.get("/api/workouts", getAllWorkouts);

module.exports = router;
