const completionRepository = require("../../repositories/completionRepository");
const mongoose = require("mongoose");

const getCompletionsByPlayer = async (req, res) => {
    try {
        const player = req.query.player;
        
        if (!player) {
            return res.status(400).json({ message: "Player field missing." });
        }

        const playerId = new mongoose.Types.ObjectId(player);

        const completions = await completionRepository.getCompletionsByPlayerWithId(playerId);

        return res.status(200).json(completions);

    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getCompletionsByPlayer
}