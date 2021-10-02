var express = require('express');
var router = express.Router();

var data = {};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("<html><body><h1>Banana Weather Station</b><br />" + JSON.stringify(data) + "</body></html>");
});

/* POST home page. */
router.post('/', function(req, res, next) {
  data = req.body
  res.sendStatus(200);
});

module.exports = router;
