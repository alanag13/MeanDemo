(function(ngModule){
	
	var HeadlineService = function(){
		this.getHeadline = function(pageName){
			return "This is the " + pageName + " page! Check it out!"
		}
	}
	
	ngModule.service("HeadlineService", HeadlineService);
	
})(MeanDemo);