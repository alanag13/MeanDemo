(function(ngModule){
	
	var DashboardController = function($rootScope, $scope, pageViewList, socket, initUserCount){
		$scope.pageViewList = pageViewList.data;
		$scope.currentUsers = initUserCount;
		
		socket.on("num-users-changed", function(newCount){

			$rootScope.$apply(function(){
				$scope.currentUsers = newCount;
			});
		});
	}
	
	ngModule.controller("DashboardController",['$rootScope', '$scope', 'pageViewList', 'socket', 'initUserCount', DashboardController]);
	
})(MeanDemo);