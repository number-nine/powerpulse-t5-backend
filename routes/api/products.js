const express = require("express");
const productCtrl = require("../../controllers/products");
// const {  authenticate } = require("../../middlewares");

const router = express.Router();


router.get("/", productCtrl.getAll);
// router.get("/", authenticate, productCtrl.getAll);

router.get("/categories", productCtrl.getAllCategories);

module.exports = router;
