var express = require('express');
var router = express.Router();
var Profile = require('../node/profile-data-access');

/* GET profile page. */
router.get('/:id', function(req, res, next) {
	Profile.getById(req.params.id, function(err, profile) {
		if (err) return console.error(err);

		
		profile.layout = false;
		res.render('profile', profile);
		
  		console.log(profile);
	});



    
});

module.exports = router;
