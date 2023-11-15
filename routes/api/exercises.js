const express = require("express");
const { authenticate, validateParams } = require("../../middlewares");
const exercisesCtrl = require("../../controllers/exercises");
const { schemas } = require("../../models/exercise");

const router = express.Router();

// router.get("/", authenticate, exercisesCtrl.getAllExercises);
// router.get("/categories", authenticate, exercisesCtrl.getEndpoints);
router.get("/groups/:filter", authenticate, exercisesCtrl.getCategoryByFilter);
router.get(
  "/",
  authenticate,
  validateParams(schemas.filterExercises),
  exercisesCtrl.getFilteredExercises
);


module.exports = router;

/** 
 "/exercises/categories": {
            "get": {
                "tags": [
                    "Exercises"
                ],
                "summary": "Endpoints, categories, filters mapping",
                "security": [
                    {
                        "Bearer": []
                    }
                ],
            
                "responses": {
                    "200": {
                        "description": "Operation successful",
                        "content": {
                            "application/json": {
                                "schema": {
                                    "$ref": "#/components/schemas/ExercisesCategoriesResponse"
                                }
                            }
                        }
                    },
                    "404": {
                        "description": "Not found"
                    }
                }
            }
        },
*/