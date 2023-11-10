const express = require("express");
const productCtrl = require("../../controllers/products");
const {  authenticate } = require("../../middlewares");

const router = express.Router();


router.get("/", authenticate, productCtrl.getProductsByBlood);
// router.get("/", authenticate, productCtrl.getAll);

router.get("/categories", authenticate, productCtrl.getProductsCategories);

module.exports = router;
