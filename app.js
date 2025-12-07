// Dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Routes
const levelRoutes = require("./routes/levelRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const playerRoutes = require("./routes/playerRoutes");

const app = express();

require("dotenv").config();
app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());

// Middleware
app.use(express.static("public"));
app.use(morgan("dev"));

// Development variables
const PORT = 3000;
const db_URI = process.env.db_URI;

// Mongo connection
mongoose.connect(db_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => console.log(err));

// Default pageCss value middleware
app.use((req, res, next) => {
  res.locals.pageCss = null;
  next();
})

app.use("/levels", levelRoutes);
app.use("/leaderboard", leaderboardRoutes);
app.use("/players", playerRoutes);

app.get("/", (req, res) => {
    res.redirect("/levels");
})