(function(ngModule){
	
	var TestController = function($scope){
		$scope.testVar = "Angular scoping works!"
	}
	
	ngModule.controller("TestController", ['$scope', TestController]);
	
})(MeanDemo);