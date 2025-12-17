const express = require("express");
const leaderboardController = require("../../controllers/web/leaderboardController");

const router = express.Router();

router.get("/", leaderboardController.renderLeaderboardPage);

module.exports = router;