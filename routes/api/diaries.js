const express = require("express");
const diaryCtrl = require("../../controllers/diaries");
const mealsRouter = require("./meals");
const workoutRouter = require("./workouts");

const {
  authenticate,
  validateParams,
  normalizeDate,
} = require("../../middlewares");
const { schemas } = require("../../schemas/diary");

const router = express.Router();

router.use("/meals", mealsRouter);
router.use("/workouts", workoutRouter);

router.get(
  "/:date",
  authenticate,
  validateParams(schemas.getByDate),
  normalizeDate,
  diaryCtrl.getActionsByDate
);

module.exports = router;
