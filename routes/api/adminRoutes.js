const express = require("express");
const adminController = require("../../controllers/api/adminController");

const router = express.Router();

router.post("/add-completion", adminController.addCompletion);
router.delete("/delete-completion/:id", adminController.deleteCompletion);
router.post("/add-player", adminController.addPlayer);
router.patch("/edit-player/:id", adminController.editPlayer);

module.exports = router;