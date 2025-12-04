const Completion = require("../models/Completion");

async function getLeaderboard() {
    try {
        const leaderboard = await Completion.aggregate([
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
            $group: { _id: "$player", points: { $sum: "$level.points" } }
            }, {
            $setWindowFields: {
                sortBy: { points: -1 },
                output: {
                    rank: { $rank: {} }
                    }
                }
            }, {
            $lookup: {
                from: "players",
                localField: "_id",
                foreignField: "_id",
                as: "player"
                }
            }, {
            $unwind: "$player"
            }
        ]);

        return leaderboard;
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getLeaderboard
}