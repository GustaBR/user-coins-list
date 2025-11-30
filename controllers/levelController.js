const Level = require("../models/levels");

const getAllLevels = (req, res) => {
    res.render("index", { levels: Level });
}

const getLevel = (req, res) => {
    const id = req.params.id;
    Level.forEach(level => {
        if (level.position == id) {
            console.log(level);
            res.render("level", { level });
        }
    });
}

module.exports = {
    getAllLevels,
    getLevel
}