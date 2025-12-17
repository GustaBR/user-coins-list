const Level = require("../../models/Level");

const getAllLevels = async (req, res) => {
    try {
        const levels = await Level.find();
        res.json(levels);
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getAllLevels
}