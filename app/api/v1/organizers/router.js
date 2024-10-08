const express = require("express");
const router = express();
const { create, createCMSUser, getCmsUsers } = require("./controller");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

router.post("/organizers", authenticateUser, authorizeRoles("owner"), create);
router.post(
  "/users",
  authenticateUser,
  authorizeRoles("organizer"),
  createCMSUser
);

router.get("/users", authenticateUser, authorizeRoles("owner"), getCmsUsers);

module.exports = router;
