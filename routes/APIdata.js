var express = require('express');
var router = express.Router();
var unirest = require('unirest');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('APIdata/index', { title: 'Data Shall go below' });
});

module.exports = router;