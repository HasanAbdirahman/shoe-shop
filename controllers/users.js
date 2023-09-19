const e = require("express");
const userDB = require("../models/user");
var bcrypt = require("bcrypt");

async function signup(req, res, next) {
  try {
    console.log("signup");
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  signup,
};
