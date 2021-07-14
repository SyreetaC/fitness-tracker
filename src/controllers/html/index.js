const router = require("express").Router();
const path = require("path");

const renderHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
};

const renderExercises = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/exercise.html"));
};

const renderStats = (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/stats.html"));
};

module.exports = { renderHomePage, renderExercises, renderStats };
