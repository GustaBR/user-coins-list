const express = require("express");
const adminController = require("../../controllers/web/adminController");

const router = express.Router();

router.get("/", adminController.renderAdminPage);
router.get("/manage-completions", adminController.renderAddCompletionPage);

module.exports = router;