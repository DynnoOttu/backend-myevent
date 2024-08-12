const express = require("express");
const router = express();
const { create, createCMSUser } = require("./controller");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

router.post("/organizers", create);
router.post("/users", authenticateUser, createCMSUser);

module.exports = router;
