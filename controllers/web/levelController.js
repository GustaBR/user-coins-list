const Level = require("../../models/Level");
const completionRepository = require("../../repositories/completionRepository");

const renderAllLevelsPage = async (req, res) => {
    try {
        const levels = await Level.find();
        const pageCss = "index.css"
        res.render("index", { levels, pageCss });
    } catch (err) {
        console.error(err);
    }
}

const renderLevelPage = async (req, res) => {
    try {
        const level = await Level.findById(req.params.id);
        const completions = await completionRepository.getCompletionsByLevel(level._id);
        const pageCss = "level.css";
        return res.render("level", { level, completions, pageCss });
    } catch (err) {
        pageCss = "error.css";

        if (err.name === "CastError") {
            return res.status(404).render("error", { code: 404, pageCss });
        }

        return res.status(500).render("error", { code: 500, pageCss });
    }
}

module.exports = {
    renderAllLevelsPage,
    renderLevelPage
}