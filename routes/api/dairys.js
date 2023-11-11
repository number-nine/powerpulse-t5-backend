const express = require("express");
const dairyCtrl = require("../../controllers/dairys");
const mealsRouter = require("./meals");
const workoutRouter = require("./workouts");

const {
  authenticate,
  validateBody,
} = require("../../middlewares");

const { schemas } = require("../../schemas/dairy");

const router = express.Router();

router.use("/meals", mealsRouter);
router.use("/workouts", workoutRouter);

router.get(
  "/",
  authenticate,
  validateBody(schemas.getByDate),
  dairyCtrl.getActionsByDate
);

module.exports = router;
