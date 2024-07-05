const express = require("express");
const router = express();
const { create, index, findById, update, destroy } = require("./controller");

// Router Category
router.get("/categories", index);
router.get("/categories/:id", findById);
router.post("/categories", create);
router.put("/categories/:id", update);
router.delete("/categories/:id", destroy);

module.exports = router;
