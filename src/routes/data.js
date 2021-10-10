var express = require('express');
var router = express.Router();
var _ = require('lodash');

var data = _.fill(Array(20160), {});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(data);
});

/* POST home page. */
router.post('/', function(req, res, next) {
  data.unshift(req.body)
  data.pop()
  res.sendStatus(200);
});

module.exports = router;
