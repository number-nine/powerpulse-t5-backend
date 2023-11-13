const express = require("express");
const statisticsCtrl = require("../../controllers/statistics");

const router = express.Router();

router.get("/", statisticsCtrl.getStatistics);

module.exports = router;
