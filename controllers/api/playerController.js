const Player = require("../../models/Player");
const levelRepository = require("../../repositories/levelRepository");

const getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find();
        res.status(200).json(players);
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong." });

    }
}

const getUncompletedLevelsByPlayer = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        const completions = await levelRepository.getUncompletedLevelsByPlayer(player._id);
        res.status(200).json(completions);
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong." });
    }
}

module.exports = {
    getAllPlayers,
    getUncompletedLevelsByPlayer
}