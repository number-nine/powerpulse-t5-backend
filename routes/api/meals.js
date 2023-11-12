const express = require("express");
const mealCtrl = require("../../controllers/meals");
const {
  authenticate,
  validateBody,
  validateParams,
  isValidProduct,
  normalizeDate,
} = require("../../middlewares");
const { schemas } = require("../../models/meal");

const router = express.Router();

router.post(
  "/",
  authenticate,
  validateBody(schemas.createMeal),
  isValidProduct,
  mealCtrl.createMeal
);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.updateMeal),
  mealCtrl.updateMeal
);

router.delete(
  "/:_id",
  authenticate,
  validateParams(schemas.deleteMeal),
  mealCtrl.deleteMeal
);

router.get(
  "/:date",
  authenticate,
  validateParams(schemas.getMealsByDate),
  normalizeDate,
  mealCtrl.getMealsByDate
);

module.exports = router;
