const express = require("express");
const userCtrl = require("../../controllers/users");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  userCtrl.updateAvatar
);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.updateUser),
  userCtrl.updateUser
);

module.exports = router;
