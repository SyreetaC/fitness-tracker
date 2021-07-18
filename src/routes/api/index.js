const router = require("express").Router();

const {
  getLastWorkout,
  createWorkout,
  updateWorkout,
  getAggregateWorkouts,
} = require("../../controllers/api/index");

router.get("/workouts", getLastWorkout);
router.post("/workouts", createWorkout);
router.put("/workouts/:id", updateWorkout);
router.get("/workouts/range", getAggregateWorkouts);

module.exports = router;
