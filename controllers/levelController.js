const Level = require("../models/Level");

const getAllLevels = async (req, res) => {
    try {
        const levels = await Level.find();
        res.render("index", { levels });
    } catch (err) {
        console.error(err);
    }
}

const getLevel = async (req, res) => {
    const id = req.params.id;
    try {
        const level = await Level.findById(id);
        res.render("level", { level });
    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    getAllLevels,
    getLevel
}