const express = require("express");
const adminController = require("../../controllers/web/adminController");

const router = express.Router();

router.get("/", adminController.renderAdminPage);
router.get("/manage-completions", adminController.renderManageCompletionsPage);
router.get("/manage-players", adminController.renderManagePlayersPage);

module.exports = router;