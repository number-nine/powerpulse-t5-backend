const express = require("express");
const { authenticate } = require("../../middlewares");
const trainingCtrl = require("../../controllers/training");

const router = express.Router();

router.get("/", authenticate, trainingCtrl.getAllTraining);
router.get("/categories", authenticate, trainingCtrl.getAllTrainingCategories);

module.exports = router;
