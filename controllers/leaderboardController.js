const leaderboardService = require("../services/leaderboardService");

const getLeaderboard = async (req, res) => {
    try {
        const leaderboard = await leaderboardService.getLeaderboard();
        res.render("leaderboard", { leaderboard });
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    getLeaderboard
}