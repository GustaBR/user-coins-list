const express = require("express");
const playerController = require("../controllers/playerController");

const router = express.Router();

router.get("/:name", playerController.getPlayerByName);

module.exports = router;