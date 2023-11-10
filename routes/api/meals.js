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

module.exports = router;
