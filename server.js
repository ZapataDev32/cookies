// DEPENDENCIES
const express = require("express");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Cookies!");
});

// cookies
const cookiesController = require("./controllers/cookies_controller.js");
app.use("/cookies", cookiesController);

// LISTEN
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
