const leaderboardRepository = require("../../repositories/leaderboardRepository");

const renderLeaderboardPage = async (req, res) => {
    try {
        const leaderboard = await leaderboardRepository.getLeaderboard();
        const pageCss = "leaderboard.css";
        res.render("leaderboard", { leaderboard, pageCss });
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    renderLeaderboardPage
}