(function(ngModule){
	
	var MainController = function($scope, $http, headline, pageName){
		
		var pageLoadInfo = {title: pageName, date: new Date()};
		$scope.headline = headline;
				
		$http.post('/api/pageload/add', pageLoadInfo).success(function(){
			console.log("Page view for " + pageName + " sent to analytics reporting");
		});
	}
	
	ngModule.controller("MainController", ['$scope', '$http', 'headline', 'pageName', MainController]);
	
})(MeanDemo);