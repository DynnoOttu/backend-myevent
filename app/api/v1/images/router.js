const express = require("express");
const router = express();
const { create } = require("./controller");

const upload = require("../../../middlewares/multer");

router.post("/upload-image", upload.single("image"), create);

module.exports = router;
