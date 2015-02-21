var express = require('express');
var search = require('./../node/elasticsearch/search');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	search.query(req.query.q)
	.then(function (result) {
		res.json({
  			result : result
  		});
	})
	.fail(function (e) {
		res.json({
  			result : result
  		});
	})
});

module.exports = router;
