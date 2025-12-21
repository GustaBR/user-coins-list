const Level = require("../models/Level");

async function getUncompletedLevelsByPlayer(playerId) {
    const uncompletedLevels = await Level.aggregate([
    {
    $lookup: {
        from: "completions",
        let: { levelId: "$_id" },
        pipeline: [{ $match:
            { $expr: { $and: [
                { $eq: ["$level", "$$levelId"] },
                { $eq: ["$player", playerId] }
                ]}
            }
        }],
        as: "completion"
        }
    },
    {
    $match: {
      completion: { $size: 0 }
        }
    },
    {
    $project: {
        completion: 0
        }
    }
    ]);

    return uncompletedLevels;
}

module.exports = {
    getUncompletedLevelsByPlayer
}