const express = require("express");
const adminController = require("../../controllers/web/adminController");

const router = express.Router();

router.get("/", adminController.renderAdminPage);
router.get("/new-completion", adminController.renderAddCompletionPage);
router.post("/new-completion", adminController.addCompletion);

module.exports = router;