const express = require("express");
const router = express();
const { create, index, findById, update } = require("./controller");

// Router Category
router.get("/categories", index);
router.get("/categories/:id", findById);
router.post("/categories", create);
router.put("/categories/:id", update);

module.exports = router;
