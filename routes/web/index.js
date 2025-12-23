const express = require("express");
const router = express.Router();

const adminRoutes = require("./adminRoutes");
const leaderboardRoutes = require("./leaderboardRoutes");
const levelRoutes = require("./levelRoutes");
const playerRoutes = require("./playerRoutes");

const { checkAdmin } = require("../../middleware/auth");

router.use("/admin", checkAdmin, adminRoutes);
router.use("/leaderboard", leaderboardRoutes);
router.use("/levels", levelRoutes);
router.use("/players", playerRoutes);

module.exports = router;