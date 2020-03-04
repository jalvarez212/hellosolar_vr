var express = require('express');
var app = express();
//var twitterData = require('./twitterData');
var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;
var session = require("express-session"),
    bodyParser = require("body-parser");

var sampledb = { constellation:[ ]};



var port = process.env.PORT || 3000;

app.use('/background', express.static(__dirname + '/public/textures'));
app.use('/models', express.static(__dirname + '/public/textures/sprites'));
app.use('/js', express.static(__dirname + '/public'));
app.use('/poly', express.static(__dirname + '/third_party/three.js/js'));
app.use('/controls', express.static(__dirname + '/controls'));
app.use('/json', express.static(__dirname + '/public/json'));


app.use(express.static("public"));
app.use(session({ secret: "Tiqnm2d0FHUoc4nXDU1PNIj17p7kWdCs2uLiEpO2SFGXfZX9zT" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());




app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

passport.use(new TwitterStrategy({
    consumerKey: 'SiPSBNbS3Z07JISLrMbpMytHG',
    consumerSecret: 'Tiqnm2d0FHUoc4nXDU1PNIj17p7kWdCs2uLiEpO2SFGXfZX9zT',
    callbackURL: "http://127.0.0.1:3000/starlights/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, cb) {
    User.findOrCreate({ twitterId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

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



app.get('/auth/twitter',
  passport.authenticate('twitter'));

app.get('/auth/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {

    // Successful authentication, redirect home.
    res.redirect('/');
  });

 



app.listen(port);