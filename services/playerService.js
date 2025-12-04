const Completion = require("../models/Completion");

async function getPlayerStats(playerId) {
    try {
        const stats = await Completion.aggregate([
            {
            $lookup: {
                from: "levels",
                localField: "level",
                foreignField: "_id",
                as: "level"       
                }
            }, { 
            $unwind: "$level"
            }, {
            $group: { _id: "$player", score: { $sum: "$level.points" } }
            }, {
            $setWindowFields: {
                sortBy: { score: -1 },
                output: {
                    rank: { $rank: {} }
                    }
                }
            }, {
            $match: { _id: playerId }
            }
        ]);

        return stats;
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getPlayerStats
}

