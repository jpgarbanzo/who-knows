/*global define*/
define([
	'jquery',
	'backbone',
	'views/search'
], function ($, Backbone, SearchView) {
	'use strict';

	var SearchRouter = Backbone.Router.extend({
		routes: {
			'*searchParams': 'setParams'
		},

		setParams: function (param) {
			console.log('Loading Search View...');
			new SearchView();
		}
	});

	return SearchRouter;
});
