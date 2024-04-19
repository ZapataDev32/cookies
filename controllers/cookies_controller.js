const express = require("express");
const cookies = express.Router();
const Cookie = require("../models/cookie.js");

// INDEX
cookies.get("/", (req, res) => {
  res.send(Cookie);
});

// SHOW
cookies.get("/:arrayIndex", (req, res) => {
  res.send(Cookie[req.params.arrayIndex]);
});

module.exports = cookies;
