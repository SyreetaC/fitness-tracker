const router = require("express").Router();

const {
  getAllWorkouts,
  createWorkout,
  updateWorkout,
} = require("../../controllers/api/index");

router.get("/api/workouts", getAllWorkouts);
router.post("/api/workouts", createWorkout);
router.put("/api/workouts/:id", updateWorkout);

module.exports = router;
