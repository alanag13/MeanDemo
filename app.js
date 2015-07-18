var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var port = process.env.PORT || 1337;

//configure some server information: views and caching
app.set('views', __dirname + '/client/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/_resources', { maxAge: 2592000000 }));

app.get('/partials/:path', function(req, res){
	res.render('partials/' + req.params.path);
});

//route all other requests to the index page
app.get('*', function(req, res){
	res.render('index');
});

//start the server and listen on the assigned port
http.listen(port, function () {
    console.log('Listening on port ' + port);
});