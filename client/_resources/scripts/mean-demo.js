var MeanDemo = MeanDemo || (function(){
	
	var app = angular.module("MeanDemo", ["ngResource", "ui.router"]);
	
	app.config(function ($stateProvider, $urlRouterProvider){
				
		$stateProvider
			.state("main", {
				url: "/:pageName",
				templateUrl: "/partials/main",
				controller: "MainController",
				resolve: {
					headline: ['$stateParams', 'HeadlineService', function($stateParams, headlineService){
						var title = $stateParams.pageName;
						return headlineService.getHeadline(title);
					}]  
				}
			});
	});
	
	return app;
	
})();