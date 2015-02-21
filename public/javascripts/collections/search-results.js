/*global define */
define([
	'underscore',
	'backbone',
	'models/result-item'
], function (_, Backbone, ResultItem) {
	'use strict';

	var SearchResults = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: ResultItem,

	});

	return new SearchResults();
});
