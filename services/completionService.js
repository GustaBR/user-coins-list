const Completion = require("../models/Completion");

async function getCompletionsByPlayer(playerId) {
    try {
        const completions = await Completion.aggregate([
            {
            $match: { player: playerId }
            }, {
            $lookup: {
                from: "players",
                localField: "player",
                foreignField: "_id",
                as: "player"
                }
            }, {
            $unwind: "$player"
            }, {
            $lookup: {
                from: "levels",
                localField: "level",
                foreignField: "_id",
                as: "level"
                }
            }, {
            $unwind: "$level"
            }, {
            $group: {
                _id: "$player._id",
                name: { $first: "$player.name" },
                levels: { $push: "$level" }
                }
            }
        ]);

        return completions;

    } catch (err) {
        console.error(err)
    }
}

async function getCompletionsByLevel(levelId) {
    try {
        const completions = await Completion.aggregate([
            {
            $match: { level: levelId }
            }, {
            $lookup: {
                from: "levels",
                localField: "level",
                foreignField: "_id",
                as: "level"
                }
            }, {
            $unwind: "$level"
            }, {
            $lookup: {
                from: "players",
                localField: "player",
                foreignField: "_id",
                as: "player"
                }
            }, {
            $unwind: "$player"
            }, {
            $group: {
                _id: "$level._id",
                name: { $first: "$player.name" },
                players: { $push: "$player" }
                }
            }
        ]);

        return completions;
        
    } catch (err) {
        console.error(err)
    }
}

module.exports = {
    getCompletionsByPlayer,
    getCompletionsByLevel
}