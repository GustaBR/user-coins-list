const mongoose = require("mongoose");

const completionSchema = new mongoose.Schema({
    level: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Level",
        required: true
    },
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player",
        required: true
    }
});

const Completion = mongoose.model("Completion", completionSchema);

module.exports = Completion;