// Dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");

// Routes
const webRoutes = require("./routes/web/index.js");
const apiRoutes = require("./routes/api/index.js");

const app = express();

require("dotenv").config();
app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), "public")));
app.use(morgan("dev"));
app.use(cookieParser());

// Development variables
const PORT = process.env.PORT || 3000
const DB_URI = process.env.DB_URI;
const isProd = process.env.NODE_ENV === "production";

// Mongo connection
mongoose.connect(DB_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}. Environment: ${process.env.NODE_ENV}`)))
  .catch((err) => console.log(err));

// Default pageCss value middleware
app.use((req, res, next) => {
  res.locals.pageCss = null;
  next();
})

// Login validation
app.post("/login", (req, res) => {
    const key = req.body?.key;
    if (!key) return res.status(400).json({ message: "Bad Request" }); 

    if (key === process.env.ADMIN_KEY) {
        res.cookie("key", key, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            secure: isProd
        });

        return res.redirect("/admin");
    }
    
    const pageCss = "error.css";
    return res.status(401).render("error", { code: 401, pageCss } );
});

// Authentication validation
app.get("/check-login", (req, res) => {
    if (req.cookies.key === process.env.ADMIN_KEY) {
        res.json({ authenticated: true });
    } else {
        res.json({ authenticated: false });
    }
});

app.use("/", webRoutes);
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
    res.redirect("/levels");
});

app.use("/", (req, res) => {
    const pageCss = "error.css";
    res.status(404).render("error", { code: 404, pageCss });
});
