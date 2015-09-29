var express = require('express');
var router = express.Router();
var unirest = require('unirest');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'APIdata' });
});

router.get('/APIdata', function(req, res, next) {
  res.render('index', { title: 'The APIdata will display here.' });
});
module.exports = router;


