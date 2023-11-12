const express = require("express");
const userCtrl = require("../../controllers/users");
const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.register), userCtrl.register);
router.get("/verify/:verificationToken", userCtrl.verifyEmail);
router.post(
  "/verify",
  validateBody(schemas.emailRequest),
  userCtrl.resendVerification
);
router.post(
  "/restore",
  validateBody(schemas.emailRequest),
  userCtrl.restorePasswordToken
);
router.patch(
  "/restore",
  validateBody(schemas.updatePassword),
  userCtrl.updatePassword
);

router.post("/login", validateBody(schemas.login), userCtrl.login);
router.get("/current", authenticate, userCtrl.current);
router.post("/logout", authenticate, userCtrl.logout);

module.exports = router;
