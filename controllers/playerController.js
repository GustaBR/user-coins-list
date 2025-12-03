const Player = require("../models/Player");
const completionService = require("../services/completionService");

const getPlayerByName = async (req, res) => {
    try {
        const player = await Player.findOne({ name: req.params.name });
        const completions = await completionService.getCompletionsByPlayer(player._id);
        res.render("player", { player, completions });
    } catch (err) {
        console.error(err);
        res.status(404).end();
    }
}

module.exports = {
    getPlayerByName
}