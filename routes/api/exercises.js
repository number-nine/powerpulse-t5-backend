const express = require("express");
const { authenticate } = require("../../middlewares");
const exercisesCtrl = require("../../controllers/exercises");

const router = express.Router();

router.get("/", authenticate, exercisesCtrl.getAllExercises);
router.get("/muscles", authenticate, exercisesCtrl.getAllMuscles);
router.get("/bodyparts", authenticate, exercisesCtrl.getAllBodyParts);
router.get("/equipment", authenticate, exercisesCtrl.getAllEquipment);

module.exports = router;
