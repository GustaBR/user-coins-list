const Level = require("../../models/Level");

const getAllLevels = async (req, res) => {
    try {
        const levels = await Level.find();
        return res.status(200).json(levels);
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong." });
    }
}

module.exports = {
    getAllLevels
}