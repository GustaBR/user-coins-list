const Level = require("../models/Level");
const completionService = require("../services/completionService");

const getAllLevels = async (req, res) => {
    try {
        const levels = await Level.find();
        res.render("index", { levels });
    } catch (err) {
        console.error(err);
    }
}

const getLevel = async (req, res) => {
    try {
        const level = await Level.findById(req.params.id);
        const completions = await completionService.getCompletionsByLevel(level._id);
        res.render("level", { level, completions });
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getAllLevels,
    getLevel
}