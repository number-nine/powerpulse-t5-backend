const createWorkout= require("./createWorkout");
const updateWorkout = require("./updateWorkout");
const deleteWorkout = require("./deleteWorkout");
const getWorkoutsByDate = require("./getWorkoutsByDate");

module.exports = {
  createWorkout,
  getWorkoutsByDate,
  deleteWorkout,
  updateWorkout,
};
