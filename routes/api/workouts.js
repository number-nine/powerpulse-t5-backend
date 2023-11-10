const express = require("express");
const mealCtrl = require("../../controllers/workouts");
const {
  authenticate,
  validateBody,
  isValidExercise,
} = require("../../middlewares");
const { schemas } = require("../../models/workout");

const router = express.Router();

router.post(
  "/",
  authenticate,
  validateBody(schemas.createWorkout),
  isValidExercise,
  mealCtrl.createWorkout
);

// router.patch(
//   "/",
//   authenticate,
//   validateBody(schemas.updateMeal),
//   mealCtrl.updateMeal
// );

// router.delete(
//   "/",
//   authenticate,
//   validateBody(schemas.deleteMeal),
//   mealCtrl.deleteMeal
// );

router.get(
  "/",
  authenticate,
  validateBody(schemas.getWorkoutsByDate),
  mealCtrl.getWorkoutsByDate
);

module.exports = router;
