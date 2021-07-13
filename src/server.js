const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

const db = mongoose.connect();

// routes
app.use(router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

module.exports = db;
