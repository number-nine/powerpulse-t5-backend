const express = require("express");
const userCtrl = require("../../controllers/users");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");
const { schemas: profileSchemas } = require("../../models/profile");

const router = express.Router();


router.patch("/avatars", authenticate, upload.single("avatar"), userCtrl.updateAvatar);

router.get("/profiles", authenticate, userCtrl.getProfile);

router.patch(
  "/profiles",
  authenticate,
  validateBody(profileSchemas.createProfile),
  userCtrl.updateProfile
);

/* for development purposes. Delete this on release */

router.get("/view-dev", validateBody(schemas.emailDev), userCtrl.viewDev);

router.delete("/delete-dev", validateBody(schemas.emailDev), userCtrl.deleteDev);

/* ------------------ */

module.exports = router;
