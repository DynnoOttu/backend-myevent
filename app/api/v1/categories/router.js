const express = require("express");
const router = express();
const { create, index, findById, update, destroy } = require("./controller");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

// Router Category
router.get("/categories", authenticateUser, authorizeRoles("organizer"), index);
router.get(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  findById
);
router.post(
  "/categories",
  authenticateUser,
  authorizeRoles("organizer"),
  create
);
router.put(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  update
);
router.delete(
  "/categories/:id",
  authenticateUser,
  authorizeRoles("organizer"),
  destroy
);

module.exports = router;
