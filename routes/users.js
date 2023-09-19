const express = require("express");
let router = express.Router();
const userCtrl = require("../controllers/users");

router.get("/signup", userCtrl.signup);

module.exports = router;
