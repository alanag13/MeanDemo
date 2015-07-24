var PageLoad = function(){
	
	var postPageLoad = function(){
		return "postPageLoads works";
	}
	
	var getPageLoadsByDate = function(date){
		return "getPageLoads works";
	}
	
	return {
		postPageLoad: postPageLoad,
		getPageLoadsByDate: getPageLoadsByDate
	}
	
}

module.exports = PageLoad();