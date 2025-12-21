const express = require("express");
const completionController = require("../../controllers/api/completionController");

const router = express.Router();

router.get("/", completionController.getCompletionsByPlayer);

module.exports = router;