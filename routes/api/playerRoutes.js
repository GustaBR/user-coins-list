const express = require("express");
const playerController = require("../../controllers/api/playerController");

const router = express.Router();

router.get("/", playerController.getAllPlayers);
router.get("/:id/uncompleted-levels", playerController.getUncompletedLevelsByPlayer);

module.exports = router;