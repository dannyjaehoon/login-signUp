"use strict";

const express = require("express");
const router = express.Router();
const { output, process } = require("./home.ctrl");

router.get("/", output.home);

router.get("/login", output.login);
router.get("/register", output.register);
router.post("/login", process.login);
router.post("/register", process.register);
module.exports = router;
