const express = require("express");
const mongoose = require("mongoose");

const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// routes
app.use(require("./routes/html/index"));
app.use(require("./routes/api/index"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
