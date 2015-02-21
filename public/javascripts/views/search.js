/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'collections/search-results',
	'models/result-item',
	'views/result-item',
	'common',
	'vendor/jquery-mockjax'
], function ($, _, Backbone, SearchResultsCollection, ResultItemModel, ResultItemView, Common) {
	'use strict';

	// Our overall **AppView** is the top-level piece of UI.
	var AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '.search-container',

		// // Compile our stats template
		// template: _.template(statsTemplate),

		// Delegated events for creating new items, and clearing completed ones.
		events: {
			'keypress .search-box':		'createOnEnter',
		},

		initialize: function () {
			this.$input = this.$('.search-box');

			this.$resultsList = this.$('.search-results');
			
			this.listenTo(SearchResultsCollection, 'add', this.addOne);

		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {

		},

		// Add a single todo item to the list by creating a view for it, and
		// appending its element to the `<ul>`.
		addOne: function (model) {
			var view = new ResultItemView({ model: model });
			this.$resultsList.append(view.render().el);
		},

		createOnEnter: function (e) {
			var searchTerm = this.$input.val().trim();

			$.get('/api/search', { q : searchTerm }, $.proxy(this.processSearchResponse, this));

			if (e.which !== Common.ENTER_KEY || !this.$input.val().trim()) {
				return;
			}
		},
		/**
			Gets and displays the results
		*/
		processSearchResponse : function (data) {
			console.log('here is the response', data);
			var self = this,
				results = data.result;

			$.each(results, function () {
				SearchResultsCollection.add(this);
			});
		}	
	});


	//ajax emulation. Type "err" to see error message
	$.mockjax({
	    url: '/api/search',
	    responseTime: 400,
	    response: function(settings) {
	        if(settings.data.value == 'err') {
	           this.status = 500;  
	           this.responseText = 'Validation error!'; 
	        } else {
	           this.responseText = { 
	           		"result":[{"name":"kasen Lam","expertise":"Node","weight":"100"},{"name":"kasen Lam","expertise":"HTML","weight":"200"},{"name":"Pablo Garbanzo","expertise":"Notepad","weight":"200"}]
	           };  
	        }
	    }
	}); 

	return AppView;
});
