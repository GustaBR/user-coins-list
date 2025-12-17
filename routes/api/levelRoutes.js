const express = require("express");
const levelController = require("../../controllers/api/levelController");

const router = express.Router();

router.get("/", levelController.getAllLevels);

module.exports = router;