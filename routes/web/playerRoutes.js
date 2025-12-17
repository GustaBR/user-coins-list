const express = require("express");
const playerController = require("../../controllers/web/playerController");

const router = express.Router();

router.get("/:name", playerController.renderPlayerPage);

module.exports = router;