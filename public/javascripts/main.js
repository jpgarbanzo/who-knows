require.config({
	paths: {
		"jQuery": "vendor/jquery/dist/jquery.min",
		"bootstrap": "vendor/bootstrap-sass-twbs/assets/javascripts/bootstrap.min",
		'handlebars' : 'vendor/handlebars/handlebars-v3.0.0'
	},
	shim: {
			'bootstrap' : {
			'deps' : [
				['jQuery']
			]
		}
	},
	//how long the it tries to load a script before giving up, the default is 7
	waitSeconds: 10
});
//requiring the scripts in the first argument and then passing the library namespaces into a callback
//you should be able to console log all of the callback arguments
require(['jQuery', 'bootstrap', 'app', 'handlebars'], function($, Bootstrap, App){

});