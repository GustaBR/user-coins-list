const Player = require("../../models/Player");
const completionRepository = require("../../repositories/completionRepository");
const playerRepository = require("../../repositories/playerRepository");

const renderPlayerPage = async (req, res) => {
    try {
        const player = await Player.findOne({ name: req.params.name });
        const stats = await playerRepository.getPlayerStats(player._id);
        const completions = await completionRepository.getCompletionsByPlayer(player._id);
        const pageCss = "player.css";
        res.render("player", { player, stats, completions, pageCss });
    } catch (err) {
        console.error(err);
        res.status(404).end();
    }
}

module.exports = {
    renderPlayerPage
}