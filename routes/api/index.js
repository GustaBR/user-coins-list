const express = require("express");
const router = express.Router();

const playerRoutes = require("./playerRoutes");
const levelRoutes = require("./levelRoutes");


router.use("/players", playerRoutes);
router.use("/levels", levelRoutes);

module.exports = router;