const leaderboardService = require("../services/leaderboardService");

const getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await leaderboardService.getLeaderboard();
        const pageCss = "leaderboard.css";
        res.render("leaderboard", { leaderboard, pageCss });
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    getLeaderboard
}