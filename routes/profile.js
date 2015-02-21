var express = require('express');
var router = express.Router();
var Profile = require('../node/profile-data-access');

/* GET profile page. */
router.get('/:id', function(req, res, next) {
	Profile.getById(req.params.id, function(err, res) {
		if (err) return console.error(err);
  		console.log(res);
	});



    res.render('profile', {layout:false, someone:req.params.id});
});

module.exports = router;
