(function(ngModule){
	
	var MainController = function($scope, headline){
		$scope.headline = headline;
	}
	
	ngModule.controller("MainController", ['$scope', 'headline', MainController]);
	
})(MeanDemo);