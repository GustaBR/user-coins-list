const leaderboardRepository = require("../../repositories/leaderboardRepository");
const { inflectedAmountString } = require("../../public/js/utils.js");

const renderLeaderboardPage = async (req, res) => {
    try {
        const leaderboard = await leaderboardRepository.getLeaderboard();
        const pageCss = "leaderboard.css";
        res.render("leaderboard", { leaderboard, pageCss, inflectedAmountString });
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    renderLeaderboardPage
}