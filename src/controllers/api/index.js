const { Workout } = require("../../models/Workout");

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({});
    return res.json({ workouts });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get workouts" });
  }
};

const createWorkout = (req, res) => {};

const updateWorkout = (req, res) => {};

module.exports = { getAllWorkouts, createWorkout, updateWorkout };
