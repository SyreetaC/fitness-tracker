const db = require("../../models");

const getAllWorkouts = (req, res) => {
  console.log("get workouts");
  res.json("get workouts");
};

const createWorkout = (req, res) => {};

const updateWorkout = (req, res) => {};

module.exports = { getAllWorkouts, createWorkout, updateWorkout };
