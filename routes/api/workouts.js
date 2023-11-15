const express = require("express");
const mealCtrl = require("../../controllers/workouts");
const {
  authenticate,
  validateBody,
  validateParams,
  isValidExercise,
  normalizeDateInParam,
  normalizeDateInBody,
} = require("../../middlewares");
const { schemas } = require("../../models/workout");

const router = express.Router();

router.post(
  "/",
  authenticate,
  validateBody(schemas.createWorkout),
  isValidExercise,
  normalizeDateInBody,
  mealCtrl.createWorkout
);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.updateWorkout),
  mealCtrl.updateWorkout
);

router.delete(
  "/:_id",
  authenticate,
  validateParams(schemas.deleteWorkout),
  mealCtrl.deleteWorkout
);

router.get(
  "/:date",
  authenticate,
  validateParams(schemas.getWorkoutsByDate),
  normalizeDateInParam,
  mealCtrl.getWorkoutsByDate
);

module.exports = router;
