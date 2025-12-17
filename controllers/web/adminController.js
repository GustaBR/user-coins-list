const Player = require("../../models/Player");
const Level = require("../../models/Level");
const Completion = require("../../models/Completion");

const renderAddCompletionPage = async (req, res) => {
    const pageCss = "admin.css";
    res.render("admin", { pageCss });
}
 
const addCompletion = async (req, res) => {
    try {

        if (!req.body.level || !req.body.player) {
            return res.status(400).json({ message: "Missing level or player."});
        }
        
        const player = await Player.findById(req.body.player);
        const level = await Level.findById(req.body.level);

        if (!level || !player) {
            return res.status(400).json({ message: "Invalid level or player." });
        }

        const completion = new Completion({ level: level._id, player: player._id });
        await completion.save();

        return res.status(201).json({ message: "New completion added!" });
    } catch (err) {
        if (err.code === 11000) {
            return res.status(409).json({ message: "Completion already exists." });
        }
        
        return res.status(500).json({ message: "Something went wrong." });
    }
}

module.exports = {
    renderAddCompletionPage,
    addCompletion
}