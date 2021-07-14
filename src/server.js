const express = require("express");

const path = require("path");

const { connect } = require("./db");

const PORT = process.env.PORT || 3000;

connect();

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));

// routes
app.use(require("./routes/html/index"));
app.use(require("./routes/api/index"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
