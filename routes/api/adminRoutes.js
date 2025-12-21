const express = require("express");
const adminController = require("../../controllers/api/adminController");

const router = express.Router();

router.post("/add-completion", adminController.addCompletion);
router.delete("/delete-completion/:id", adminController.deleteCompletion);

module.exports = router;