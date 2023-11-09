const express = require("express");
const userCtrl = require("../../controllers/users");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");

const router = express.Router();


router.patch("/avatars", authenticate, upload.single("avatar"), userCtrl.updateAvatar);

/* for development purposes. Delete this on release */

router.get("/view-dev", validateBody(schemas.emailDev), userCtrl.viewDev);

router.delete("/delete-dev", validateBody(schemas.emailDev), userCtrl.deleteDev);

/* ------------------ */

module.exports = router;
