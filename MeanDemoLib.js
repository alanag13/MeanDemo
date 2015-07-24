

var MeanDemoLib = function(conn){
	
	var connUrl = "";
	
	//connection initializer
	if (conn && conn.user && conn.pwd && conn.host && conn.port){

		//build the connection string to connect to the MeanDemo database
		connUrl = "mongodb://" 
		+ conn.user + ":" + conn.pwd + "@"
		+ conn.host + ":" + conn.port
		+ "/MeanDemo";

		return {
			connUrl: connUrl,
			PageEvents: require('./server/PageEvents/_PageEventsMain')
		};

	}else{
		console.log("A connection object with user, pwd, port," +
			"and host properties must be supplied.");
		return null;
	}
	
}

module.exports = MeanDemoLib;
	

		
		
