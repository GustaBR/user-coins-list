// Dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

// Routes
const webRoutes = require("./routes/web/index.js");
const apiRoutes = require("./routes/api/index.js");

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

app.use("/", webRoutes);
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
    res.redirect("/levels");
});
