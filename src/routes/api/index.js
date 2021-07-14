const router = require("express").Router();

const {
  getAllWorkouts,
  createWorkout,
} = require("../../controllers/api/index");

router.get("/api/workouts", getAllWorkouts);
router.post("/api/workouts", createWorkout);

module.exports = router;
