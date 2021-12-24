const express = require("express");
const router = express.Router();
const dbConn = require("../../db/connDb");

const { GetAdmin, login } = require("../controller/admin.controller");

// get all admin
router.get("/", GetAdmin);

//sign in
router.post("/login", login);

module.exports = router;
