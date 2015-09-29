var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var dotenv = require('dotenv');
dotenv.load();
var NYT_API_KEY = process.env.NYT_API_KEY



/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('API/index', { title: 'Data Shall go below' });
// });

router.get('/books', function(req, res) {
  unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + NYT_API_KEY)
    .end(function (response) {
      res.render("APIdata/index", {
        title: 'Books',
        data: response.body.results.books || 'not working properly'
      });
    })
})

module.exports = router;