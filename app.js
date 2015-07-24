var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var port = process.env.PORT || 1337;
var conn = require('./mongoConnection.json');
var MeanDemoLib = require('./MeanDemoLib')(conn);
var pageEvents = MeanDemoLib.PageEvents;
var mongodb = require('mongodb').MongoClient;


//configure some server information: views and caching
app.set('views', __dirname + '/client/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/_resources', { maxAge: 2592000000 }));

//get the appropriate angular partials file when it is requested
app.get('/partials/:path', function(req, res){
	res.render('partials/' + req.params.path);
});

//route api requests to their appropriate module
app.get('/api/pageload/getCounts', function(req, res){
	mongoExecute(function (err, db){
		pageEvents.PageLoad(db, res).getPageLoadCounts();
	});
});

app.post('/api/pageload/add', function(req, res){
	mongoExecute(function (err, db){
		pageEvents.PageLoad(db, res).postPageLoad(req.body.title, new Date());
	});
});

//route all other requests to the index page
app.get('*', function(req, res){
	res.render('index');
});

//start the server and listen on the assigned port
http.listen(port, function () {
    console.log('Listening on port ' + port);
});

var mongoExecute = function(connectCb){
	mongodb.connect(MeanDemoLib.connUrl,connectCb);
}