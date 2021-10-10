var express = require('express');
var router = express.Router();
var _ = require('lodash');

var data = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(data);
});

/* POST home page. */
router.post('/', function(req, res, next) {
  // validation {temperature: number, humidity: number, windspeed: number}

  if (_.has(req.body, 'temperature') && _.has(req.body, 'humidity') && _.has(req.body, 'windspeed')) {
    // if array is > than length
    if (data.length > 20159) {
      data.pop()
    }

    payload = {
      temperature: req.body.temperature,
      windspeed: req.body.windspeed,
      humidity: req.body.humidity,
      timestamp: Date.now(),
    }

    data.unshift(payload)
    res.sendStatus(200);

  } else {
    res.sendStatus(400)
  }
});

module.exports = router;
