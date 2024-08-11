const express = require("express");
const router = express();
const { create, index, findById, update, destroy } = require("./controller");
const {
  authenticateUser,
  authorizeRoles,
} = require("../../../middlewares/auth");

// Router Category
router.get("/categories", authenticateUser, index);
router.get("/categories/:id", findById);
router.post("/categories", authenticateUser, create);
router.put("/categories/:id", update);
router.delete("/categories/:id", destroy);

module.exports = router;
