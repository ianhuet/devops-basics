var express = require('express');
var router = express.Router();
const crypto = require('crypto');

const startStamp = new Date();
const instanceHash = crypto.createHash('md5').update(`${startStamp}-${Math.random()}`).digest('hex');

/* GET home page. */
router.get('/', function(_req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET healthcheck */
router.get('/ping', function(_req, res, next) {
  res.json({
    instanceHash,
    startStamp,
    title: 'Express yourself!',
    timestamp: new Date(),
  });
});

module.exports = router;
