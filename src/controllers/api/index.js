const { Workout } = require("../../models");

const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({});
    console.log(workouts);
    return res.json({ workouts });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to get workouts" });
  }
};

const createWorkout = async (req, res) => {
  try {
    const workout = await Workout.create({});
    return res.json(workout);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "Failed to create a workout" });
  }
};

const updateWorkout = (req, res) => {
  const id = req.params.id;
  console.log(id);
  //update a workout where the id is id
  //res.json the updated workout
  // catch any errors
};

const getAggregateWorkouts = (req, res) => {};

module.exports = {
  getAllWorkouts,
  createWorkout,
  updateWorkout,
  getAggregateWorkouts,
};
