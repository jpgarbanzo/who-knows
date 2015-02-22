/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'handlebars',
	'text!templates/result-item.html'
], function ($, _, Backbone, handlebars, resultItemTemplate) {
	'use strict';

	var ResultItemView = Backbone.View.extend({

		tagName:  'li',

		template: handlebars.compile( resultItemTemplate ),

		// The DOM events specific to an item.
		events: {

		},


		initialize: function () {

		},

		// Re-render the titles of the todo item.
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			
			return this;
		},

		// Remove the item, destroy the model from *localStorage* and delete its view.
		clear: function () {
			this.model.destroy();
		}
	});

	return ResultItemView;
});
