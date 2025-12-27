const leaderboardRepository = require("../../repositories/leaderboardRepository");
const { inflectedAmountString } = require("../../public/js/utils.js");

const renderLeaderboardPage = async (req, res) => {
    try {
        const leaderboard = await leaderboardRepository.getLeaderboard();
        const pageCss = "leaderboard.css";
        res.status(200).render("leaderboard", { leaderboard, pageCss, inflectedAmountString });
    } catch (err) {
        return res.status(500).render("error", { code: 500, pageCss });
    }
}

module.exports = {
    renderLeaderboardPage
}