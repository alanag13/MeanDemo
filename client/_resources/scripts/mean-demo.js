var MeanDemo = MeanDemo || (function(){
	
	var app = angular.module("MeanDemo", ["ngResource", "ui.router"]);
	
	app.config(function ($stateProvider, $urlRouterProvider){
				
		$stateProvider
			.state("testState", {
				url: "/test",
				templateUrl: "/partials/main",
				controller: "MainController",
				resolve: {
					headline:  function(){ return "I injected this headline as a dependency!";}
				}
			})
			.state("stuff", {
				url: "/stuff",
				templateUrl: "/partials/main",
				controller: "MainController",
				resolve: {
					headline:  function(){ return "This is a different headline for the stuff page"; }
				}
			})
			.state("top", {
				url: "/top",
				templateUrl: "/partials/main",
				controller: "MainController",
				resolve: {
					headline:  function(){ return "Check out our top articles!"; }
				}
			});
	});
	
	return app;
	
})();