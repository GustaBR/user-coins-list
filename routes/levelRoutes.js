const express = require("express");
const levelController =  require("../controllers/levelController");

const router = express.Router();

router.get("/", levelController.getAllLevels);
router.get("/:id", levelController.getLevel);

module.exports = router;