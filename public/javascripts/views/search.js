/*global define*/
define([
	'jquery',
	'underscore',
	'backbone',
	'collections/search-results',
	'models/result-item',
	'views/result-item',
	'common',
	'handlebars',
	'text!templates/results-info.html',
	'text!templates/no-results.html',
	'vendor/jquery-mockjax'
], function ($, _, Backbone, SearchResultsCollection, ResultItemModel, ResultItemView, Common, handlebars, resultsInfo, noResultsTemplate) {
	'use strict';

	var HAS_RESULTS_CLASS = 'has-results';


	// Our overall **AppView** is the top-level piece of UI.
	var AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '.site-container',

		// // Compile our stats template
		// template: _.template(statsTemplate),

		// Delegated events for creating new items, and clearing completed ones.
		events: {
			'keyup .search-box':		'createOnEnter',
		},

		initialize: function () {
			this.$input = this.$('.search-box');
			this.$coverBg = this.$('.cover-bg');
			this.$searchComponent = this.$('.search-component');
			this.$heroMsg = this.$('.hero-msg');
			this.$resultsCount = this.$('.result-count');
			

			this.tmp = {
				numResults : handlebars.compile( resultsInfo )
			}
			this.$body = $('body');

			this.$results = this.$('.search-results');
			this.$resultsList = this.$('.search-results-list');
			
			this.listenTo(SearchResultsCollection, 'add', this.addOne);
			this.listenTo(SearchResultsCollection, 'reset', this.addAll);
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
		// Add all items in the **Todos** collection at once.
		addAll: function () {
			this.$resultsList.empty();

			SearchResultsCollection.each(this.addOne, this);
		},

		createOnEnter: function (e) {

			// if (e.which !== Common.ENTER_KEY || !this.$input.val().trim()) {
			// 	return;
			// }

			var searchTerm = this.$input.val().trim();

			this.switchToSeamlessMode();
			
			console.log('Searching for: ', searchTerm);
			$.get('/api/search', { q : searchTerm }, $.proxy(this.processSearchResponse, this));

		},
		switchToSeamlessMode : function () {
			this.$coverBg.fadeOut();
			this.$heroMsg.fadeOut();
			this.$body.removeClass('single-viewport');
			this.$searchComponent.addClass('animated-growth');
		},
		/**
			Gets and displays the results
		*/
		processSearchResponse : function (data) {
			console.log('here is the response', data);
			var self = this,
				results = data.result;

			if (!results || !results.length || results.length == 0) {
				this.$resultsList.html(noResultsTemplate);
				this.$results.removeClass(HAS_RESULTS_CLASS);
			} else {
				// Clear previous results
				SearchResultsCollection.reset();
				$.each(results, function () {
					SearchResultsCollection.add(this);
				});
				this.$results.addClass(HAS_RESULTS_CLASS);
				this.$resultsCount.html(this.tmp.numResults({numResults : results.length }));
			}
			
		}	
	});


	// //ajax emulation. Type "err" to see error message
	// $.mockjax({
	//     url: '/api/search',
	//     responseTime: 400,
	//     response: function(settings) {
	//         if(settings.data.value == 'err') {
	//            this.status = 500;  
	//            this.responseText = 'Validation error!'; 
	//         } else {
	//            this.responseText = { 
	//            		"result":[{"name":"Liam Brown","expertise":"HTML5","expertiseList":["HTML5","Angular","Saas","Nodejs","Flash"],"weight":500,"idUser":1,"photo":"/images/people/perfil_1.png","phone":"+506-83097721","email":"liam.qa+testing@whoknows.com","occupation":"UX Designer"},{"name":"Patricia Morgan","expertise":"HTML5","expertiseList":["Angular","HTML5","Nodejs","Flash","Saas"],"weight":400,"idUser":1,"photo":"/images/people/perfil_3.png","phone":"+506-85239345","email":"patricia.qa+testing@whoknows.com","occupation":"Web Developer"},{"name":"Margareth Smith","expertise":"HTML5","expertiseList":["Flash","Saas","HTML5","Nodejs","Angular"],"weight":300,"idUser":1,"photo":"/images/people/perfil_5.png","phone":"+506-82324322","email":"margareth.qa+testing@whoknows.com","occupation":"Frontend Developer"},{"name":"David James","expertise":"HTML5","expertiseList":["Saas","Angular","Flash","HTML5","Nodejs"],"weight":200,"idUser":1,"photo":"/images/people/perfil_2.png","phone":"+506-82221338","email":"david.qa+testing@whoknows.com","occupation":"Computer Engineer"},{"name":"Barbara Stuart","expertise":"HTML5","expertiseList":["Nodejs","Flash","Angular","Saas","HTML5"],"weight":100,"idUser":1,"photo":"/images/people/perfil_4.png","phone":"+506-81302322","email":"barbara.qa+testing@whoknows.com","occupation":"Backend Developer"}]
	//            };  
	//         }
	//     }
	// }); 

	return AppView;
});
