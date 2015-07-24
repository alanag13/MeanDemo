var MeanDemo = MeanDemo || (function(){
	
	var app = angular.module("MeanDemo", ["ngResource", "ui.router"]);
	var socket = io.connect();
	var numUsers = 0;
	socket.on('num-users-changed', function(newCount){
			numUsers = newCount;	
	});

	socket.emit('viewing-site');
	app.config(function ($stateProvider, $urlRouterProvider){
				
		$stateProvider
			.state("analytics", {
			  url: "/dashboard",
			  templateUrl: "/partials/dashboard",
			  controller: "DashboardController",
			  resolve: {
				  pageViewList: ['AnalyticsService', function(analyticsService){
					  return analyticsService.getPageViewCounts;
				  }],
				  socket: function(){
					  return socket;
			  },
			  	  initUserCount: function(){
						return numUsers;
					}
		  }})
			.state("main", {
				url: "/:pageName",
				templateUrl: "/partials/main",
				controller: "MainController",
				resolve: {
					headline: ['$stateParams', 'HeadlineService', function($stateParams, headlineService){
						var title = $stateParams.pageName;
						return headlineService.getHeadline(title);
					}],
				pageName: ['$stateParams', 'HeadlineService', function($stateParams, headlineService){
						var title = $stateParams.pageName;
						return title;
					}]  
				}
			});

	});
	
	return app;
	
})();