// Dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Routes
const levelRoutes = require("./routes/levelRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());

const PORT = 3000;

// Middleware
app.use(express.static("public"));
app.use(morgan("dev"));

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});

app.use("/levels", levelRoutes);

app.use("/leaderboard", leaderboardRoutes);

app.get("/", (req, res) => {
    res.redirect("/levels");
})