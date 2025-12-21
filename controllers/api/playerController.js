const Player = require("../../models/Player");
const levelRepository = require("../../repositories/levelRepository");

const getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        console.error(err);
    }
}

const getUncompletedLevelsByPlayer = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        const completions = await levelRepository.getUncompletedLevelsByPlayer(player._id);
        res.json(completions);
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getAllPlayers,
    getUncompletedLevelsByPlayer
}