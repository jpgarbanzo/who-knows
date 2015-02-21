var express = require('express');
var router = express.Router();

/* GET profile page. */
router.get('/:id', function(req, res, next) {
	console.log(req.param('id'));
    res.render('profile', {layout:false});
});

module.exports = router;
