const express = require("express");
const router = express();
const { signinCms } = require("./controller");

router.post("/auth/sigin", signinCms);

module.exports = router;
