var express = require('express');
var app = express();
//var twitterData = require('./twitterData');

var sampledb = { constellation:[ ]};



var port = process.env.PORT || 3000;

app.use('/background', express.static(__dirname + '/public/textures'));
app.use('/models', express.static(__dirname + '/public/textures/sprites'));
app.use('/js', express.static(__dirname + '/public'));
app.use('/poly', express.static(__dirname + '/third_party/three.js/js'));
app.use('/controls', express.static(__dirname + '/controls'));
app.use('/json', express.static(__dirname + '/public/json'));




app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/desertstorm', function(req, res) {
	res.render('desertstorm');
});

app.get('/islandworld', function(req, res) {
	res.render('islandworld');
});

app.get('/winterspark', function(req, res) {
	res.render('winterspark');
});

app.get('/starlights', function(req, res) {
	res.render('starlights');
});



app.listen(port);