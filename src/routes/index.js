var express = require('express');
var router = express.Router();
var _ = require('lodash');

const template = require('fs').readFileSync('./views/index.template.html', 'utf-8');

router.get('/', function(req, res, next) {
  res.end(template);
});

module.exports = router;
