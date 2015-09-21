// catch simple errors
"use strict";

// declare splat-app namespace if it doesn't already exist
var splat =  splat || {};

// Define Backbone router
splat.AppRouter = Backbone.Router.extend({

    // Map "URL paths" to "router functions"
    routes: {
        "": "home",
		"About": "about"
    },

    // When an instance of an AppRouter is declared, create a Header view
    initialize: function() {
	// instantiate a Header view
        this.headerView = new splat.Header();  
	// insert the rendered Header view element into the document DOM
        $('.header').html(this.headerView.render().el);
    },

    home: function() {
		console.log("home");
	// If the Home view doesn't exist, instantiate one
        if (!this.homeView) {
            this.homeView = new splat.Home();
        };
	// insert the rendered Home view element into the document DOM
        $('#content').html(this.homeView.render().el);
		var homeMenuItem = $(".home-menu")[0];
		selectMenuItem(homeMenuItem);
    },
	
	about: function() {
	//If the About view doesn't exist, instantiate one
	console.log("about");
		if (!this.aboutView) {
			this.aboutView = new splat.About();
		};
	//insert the rendered About view element into the document DOM
		$('#content').html(this.aboutView.render().el);
		var aboutMenuItem = $(".about-menu").find("a")[0];
		selectMenuItem(aboutMenuItem);
	}

});

// Load HTML templates for Home, Header, About views, and when
// template loading is complete, instantiate a Backbone router
// with history.
splat.utils.loadTemplates(['Home', 'Header', 'About'], function() {
    splat.app = new splat.AppRouter();
    Backbone.history.start();
});
