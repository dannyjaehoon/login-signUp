"use strict";

const express = require("express");
const router = express.Router();
const { home, login } = require("./home.ctrl");

router.get("/", home);

router.get("/login", login);

module.exports = router;
