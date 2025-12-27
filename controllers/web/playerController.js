const Player = require("../../models/Player");
const completionRepository = require("../../repositories/completionRepository");
const playerRepository = require("../../repositories/playerRepository");
const { inflectedAmountString } = require("../../public/js/utils.js");

const renderPlayerPage = async (req, res) => {
    try {
        const player = await Player.findOne({ name: req.params.name });
        const stats = await playerRepository.getPlayerStats(player._id);
        const completions = await completionRepository.getCompletionsByPlayer(player._id);
        const pageCss = "player.css";
        return res.status(200).render("player", { player, stats, completions, pageCss, inflectedAmountString });
    } catch (err) {
        pageCss = "error.css";

        if (err.name === "TypeError") {
            return res.status(404).render("error", { code: 404, pageCss });
        }
        
        return res.status(500).render("error", { code: 500, pageCss });
    }
}

module.exports = {
    renderPlayerPage
}