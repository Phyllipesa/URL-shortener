const { Router } = require('express');
const linkController = require("../controllers/linkController");

const linkRoutes = Router();

linkRoutes
  .get("/:code", linkController.getCode)
  .post("/", linkController.createShortUrl);

module.exports = linkRoutes;
