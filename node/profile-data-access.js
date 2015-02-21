var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/wk');

var schema = mongoose.Schema({
	identificator : String,
	name : String,
	picture : String,
	expertise : Object,
	profession : String,
	country : String,
	email : String,
	phone : String,
	projects : Array,
});

var Profile = mongoose.model('Profile', schema, 'profile');

module.exports.model = Profile;

module.exports.getById = function(id, callback) {
	Profile.find( { identificator : id }, callback);
};