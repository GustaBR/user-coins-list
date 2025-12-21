const express = require("express");
const router = express.Router();

const playerRoutes = require("./playerRoutes");
const levelRoutes = require("./levelRoutes");
const adminRoutes = require("./adminRoutes");
const completionRoutes = require("./completionRoutes");

router.use("/players", playerRoutes);
router.use("/levels", levelRoutes);
router.use("/admin", adminRoutes);
router.use("/completions", completionRoutes);

module.exports = router;