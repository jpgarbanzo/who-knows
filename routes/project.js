var express = require('express');
var router = express.Router();
var Profile = require('../node/profile-data-access');

/* GET profile page. */
router.get('/:id_profile/:id_project', function(req, res, next) {
	Profile.getById(req.params.id_profile, function(err, profile) {
		if (err) return console.error(err);

  		var found_project = {};
  		for (var index = profile.projects.length - 1; index >= 0; index--) {
  			var project = profile.projects[index];
  			if (project.projectId == req.params.id_project) {
  				found_project = project;
  			}
  		};
  		found_project.layout = false;  
  		found_project.owner_name = profile.name;
  		found_project.owner_photo = profile.picture;
  		console.log(found_project);

		res.render('project', found_project);

	});



    
});

module.exports = router;
