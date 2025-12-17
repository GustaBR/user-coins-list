const express = require("express");
const playerController = require("../../controllers/api/playerController");

const router = express.Router();

router.get("/", playerController.getAllPlayers);

module.exports = router;