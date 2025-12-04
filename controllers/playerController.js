const Player = require("../models/Player");
const completionService = require("../services/completionService");
const playerService = require("../services/playerService");

const getPlayerByName = async (req, res) => {
    try {
        const player = await Player.findOne({ name: req.params.name });
        const stats = await playerService.getPlayerStats(player._id);
        const completions = await completionService.getCompletionsByPlayer(player._id);
        res.render("player", { player, stats, completions });
    } catch (err) {
        console.error(err);
        res.status(404).end();
    }
}

module.exports = {
    getPlayerByName
}