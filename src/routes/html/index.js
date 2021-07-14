const router = require("express").Router();

const {
  renderHomePage,
  renderExercises,
  renderStats,
} = require("../../controllers/html");

router.get("/", renderHomePage);

router.get("/exercise", renderExercises);

router.get("/stats", renderStats);

module.exports = router;
