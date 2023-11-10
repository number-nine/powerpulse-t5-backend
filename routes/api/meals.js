const express = require("express");
const mealCtrl = require("../../controllers/meals");
const {
  authenticate,
  validateBody,
  isValidProduct,
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
  "/",
  authenticate,
  validateBody(schemas.deleteMeal),
  mealCtrl.deleteMeal
);

router.get(
  "/",
  authenticate,
  validateBody(schemas.getMealsByDate),
  mealCtrl.getMealsByDate
);


module.exports = router;
