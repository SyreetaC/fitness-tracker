const router = require("express").Router();

const {
  getAllWorkouts,
  createWorkout,
  updateWorkout,
  getAggregateWorkouts,
} = require("../../controllers/api/index");

router.get("/api/workouts", getAllWorkouts);
router.post("/api/workouts", createWorkout);
router.put("/api/workouts/:id", updateWorkout);
router.get("/api/workouts/range", getAggregateWorkouts);

module.exports = router;
