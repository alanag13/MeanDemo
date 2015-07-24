(function(ngModule){
	
	var AnalyticsService = function($http){
			
		return{
			getPageViewCounts: $http.get('api/pageload/getCounts')
		}
			
	};
	
	ngModule.service("AnalyticsService", ['$http', AnalyticsService]);
	
})(MeanDemo);