const Player = require("../models/Player");

const getLeaderboard = async (req, res) => {
    try {
        const players = await Player.find();
        res.render("leaderboard", { players });
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    getLeaderboard
}