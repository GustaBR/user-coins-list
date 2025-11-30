const mongoose = require("mongoose");

const levelSchema = mongoose.Schema({
    position: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    }
});

const Level = mongoose.model("Level", levelSchema);

module.exports = Level;