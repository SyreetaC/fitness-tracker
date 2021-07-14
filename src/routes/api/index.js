const router = require("express").Router();

const { getAllWorkouts } = require("../../controllers/api/index");

router.get("/api/workouts", getAllWorkouts);

module.exports = router;
