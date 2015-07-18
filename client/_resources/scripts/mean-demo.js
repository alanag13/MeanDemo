var MeanDemo = MeanDemo || (function(){
	
	var app = angular.module("MeanDemo", ["ngResource", "ui.router"]);
	
	app.config(function ($stateProvider, $urlRouterProvider){
		
		  $urlRouterProvider.otherwise("/test");
		
		$stateProvider
			.state("testState", {
				url: "/test",
				templateUrl: "/partials/test",
				controller: "TestController"
			});
	});
	
	return app;
	
})();