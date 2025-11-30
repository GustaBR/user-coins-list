const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;