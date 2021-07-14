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

const createWorkout = (req, res) => {
  // new workout from the req.body
  //.create to create a new workout, passing in the body
  //handle error
};

const updateWorkout = (req, res) => {
  const id = req.params.id;
  console.log(id);
  //update a workout where the id is id
  //res.json the updated workout
  // catch any errors
};

module.exports = { getAllWorkouts, createWorkout, updateWorkout };
