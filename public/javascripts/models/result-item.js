/*global define*/
define([
	'underscore',
	'backbone'
], function (_, Backbone) {
	'use strict';

	var ResultItem = Backbone.Model.extend({
		// Default attributes for the ResultItem
		// and ensure that each ResultItem created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false
		},

		// Toggle the `completed` state of this ResultItem item.
		toggle: function () {
			// this.save({
			// 	completed: !this.get('completed')
			// });
		}
	});

	return ResultItem;
});
