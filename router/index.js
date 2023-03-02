const express = require("express");
const { getUser ,searchUser } = require("../controller");

const router = express.Router();

router.get("/", getUser);

module.exports = router;
