const express = require("express");
const levelController =  require("../../controllers/web/levelController");

const router = express.Router();

router.get("/", levelController.renderAllLevelsPage);
router.get("/:id", levelController.renderLevelPage);

module.exports = router;