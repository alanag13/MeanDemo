var PageLoad = function(db, res){
	
	//insert a record of a page being loaded into the mongo collection
	var postPageLoad = function(title, date){
			db.collection("PageEvents").insert({title: title, date: new Date()}, function(){
				res.write('Page load added to the db.')
				db.close();
				res.end();
			});
	}

	//get a list of count of how many times each page has been loaded
	var getPageLoadCounts = function (){
	   db.collection("PageEvents").aggregate(
	     [
	       { $group: { "_id": "$title", "count": { $sum: 1 } } }
	     ]
		   ).toArray(function(err, result) {
			    res.write(JSON.stringify(result));
				db.close();
				res.end();
		   });
		}
	
	return {
		postPageLoad: postPageLoad,
		getPageLoadCounts: getPageLoadCounts
	}
	
}

module.exports = function(db, res){ return PageLoad(db, res)};