(function(ngModule){
	
	var DashboardController = function($scope, pageViewList){
		$scope.pageViewList = pageViewList.data;
	}
	
	ngModule.controller("DashboardController",['$scope', 'pageViewList', DashboardController]);
	
})(MeanDemo);