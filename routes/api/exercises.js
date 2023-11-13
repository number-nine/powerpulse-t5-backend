const express = require("express");
const { authenticate } = require("../../middlewares");
const exercisesCtrl = require("../../controllers/exercises");

const router = express.Router();

router.get("/", authenticate, exercisesCtrl.getAllExercises);
router.get("/:filter", authenticate, exercisesCtrl.getCategoryByFilter);

module.exports = router;
