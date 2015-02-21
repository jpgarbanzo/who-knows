var mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost/wk');

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
	picture : String
});

var schema = mongoose.Schema({
	identificator : String,
	name : String,
	picture : String,
	expertise : Object,
	profession : String,
	country : String,
	email : String,
	phone : String,
	projects : [projectSchema]
});

var Profile = mongoose.model('Profile', schema, 'profile');

module.exports.model = Profile;

module.exports.getById = function(id, callback) {
	Profile.findOne( { identificator : id }, callback);
};