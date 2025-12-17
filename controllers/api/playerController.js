const Player = require("../../models/Player");

const getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getAllPlayers
}