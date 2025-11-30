const Player = require("../models/players.json");

const getLeaderboard = (req, res) => {
    res.render("leaderboard", { players: Player });
}

module.exports = {
    getLeaderboard
}