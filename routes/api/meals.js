const express = require("express");
const mealCtrl = require("../../controllers/meals");
const {
  authenticate,
  validateBody,
  validateParams,
  isValidProduct,
  normalizeDateInParam,
  normalizeDateInBody,
} = require("../../middlewares");
const { schemas } = require("../../models/meal");

const router = express.Router();

router.post(
  "/",
  authenticate,
  validateBody(schemas.createMeal),
  isValidProduct,
  normalizeDateInBody,
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
  normalizeDateInParam,
  mealCtrl.getMealsByDate
);

module.exports = router;
