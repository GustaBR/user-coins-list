// Dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

// Routes
const webRoutes = require("./routes/web/index.js");
const apiRoutes = require("./routes/api/index.js");

const app = express();

require("dotenv").config();
app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());

// Middleware
app.use(express.urlencoded());
app.use(express.static("public"));
app.use(morgan("dev"));
app.use(cookieParser());

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

// Login validation
app.post("/login", (req, res) => {
    const key = req.body?.key;
    if (!key) return res.status(400).send("Bad Request"); 

    if (key === process.env.ADMIN_KEY) {
        res.cookie("key", key, {
            httpOnly: true,
            maxAge: 60 * 1000
        });

        return res.redirect("/admin");
    }
    
    return res.status(401).send("Unauthorized");
});

app.use("/", webRoutes);
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
    res.redirect("/levels");
});
