const express = require('express');
const urlController = require("../controllers/urlController");

const router = express.Router();

router.route("/").get((req, res, next) => {
  res.json({status: 'OK'});
});

router.route("/").post(urlController.createShortUrl);



module.exports = router;