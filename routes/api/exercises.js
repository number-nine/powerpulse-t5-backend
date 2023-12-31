const express = require("express");
const { authenticate, validateParams } = require("../../middlewares");
const exercisesCtrl = require("../../controllers/exercises");
const { schemas } = require("../../models/exercise");

const router = express.Router();

router.get("/groups/:filter", authenticate, exercisesCtrl.getCategoryByFilter);
router.get(
  "/",
  authenticate,
  validateParams(schemas.filterExercises),
  exercisesCtrl.getFilteredExercises
);

module.exports = router;
