var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/wk');

var expertiseSchema = mongoose.Schema({
	name : String,
	score : Number
});

var projectMemberSchema = mongoose.Schema({
	name : String
});

var techSchema = mongoose.Schema({
	name : String
});

var projectSchema = mongoose.Schema({
	projectId : String,
	projectName : String,
	tech : [techSchema],
	members : [projectMemberSchema],
	picture : String,
    stars : Number
});

var schema = mongoose.Schema({
	identificator : String,
	name : String,
	picture : String,
	expertise : [expertiseSchema],
	profession : String,
	country : String,
	email : String,
	phone : String,
	location : String,
	projects : [projectSchema]
});

var Profile = mongoose.model('Profile', schema, 'profile');

module.exports.model = Profile;

module.exports.getById = function(id, callback) {
	Profile.findOne( { identificator : id }, callback);
};