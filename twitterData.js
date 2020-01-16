
var sampledb = { constellation:[ ]};


//Callback functions
var error = function (err, response, body) {
    	console.log('ERROR [%s]', err);
	};

var myObj;
var stars = [];
var tweets = [];

function getStars () {

    stars.forEach( function(tweet) { 
                            var words = tweet.split(" ");
                            for (var i = 0; i < tweet.length - 1; i++) {
                                    var words = tweet.split(" ");
                                }
//console.log(words);
                            tweets.push(words);

});

//console.log(tweets);
}

var success = function (data) {
    	//console.log(data);
        myObj = JSON.parse(data);
    //console.log(myObj);
    for(var i = 0; i < myObj.length; i++){
        
        stars.push(myObj[i].text);

	};

    getStars();

//var sampledb = { constellation:[ ]};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class GFG {
    constructor(ref) {

        this.ref = 0;
        this.e = 0;
        this.con = 1;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.stars = [];

    }
};

class FGF {
    constructor(num, x, y, z, pos, lbl) {
        this.num = num;
        this.x = x;
        this.y = y;
        this.z = z;
        this.pos = pos;
        this.lbl = lbl; 
    }
};


function loadTweet(){

tweets.forEach( function(tweet){
    var q = new GFG();
    sampledb.constellation.push(q);
});

};

var stars1 = [];

function populateTweets () {

var newStar;
var newTweet;


for (var i = 0; i < sampledb.constellation.length; i++) 
{
var t = sampledb.constellation[i];
newStar = sampledb.constellation.indexOf(t);
//console.log(newStar);
sampledb.constellation[i].number = newStar;
//console.log(sampledb.constellation[i].number);

var x1 = { pos:-240, shift: 0};
var xAdder = 200; //getRandomInt(0, 50);
var y1 = { pos: 0, shift: 0};
var yAdder = 100; //getRandomInt(0, 50);
var z1 = -500;
var pos1 = 'b';
var lbl1;
var num;

}



for (var i = 0; i < tweets.length; i++) {

    var t = tweets[i];
    newTweet = tweets.indexOf(t);
    console.log(newTweet);
    
    tweets[i].forEach( function(word) {  
        lbl1 = word;
        console.log(lbl1);
        num = newTweet;
        if (x1.pos < 1000) {
    x1.shift = 1;
    x1.pos += xAdder;
    y1.pos += xAdder;
}

if (x1.pos >= 1000)  {
    x1.pos = getRandomInt(-600, 400);
    y1.pos += getRandomInt(-400, 400);
}

if (y1.pos >= 1500)  {
    y1.pos = getRandomInt(-1000, 200);
    //x1.pos += getRandomInt(-600, 200);
}


        var w = new FGF(num, x1.pos, y1.pos, z1, pos1, lbl1);
        stars1.push(w);
                                    } 
                );    

}



}

console.log(sampledb);


function format() {
    for (var i =0; i < sampledb.constellation.length; i++){
        sampledb.constellation[i].ref = i;
    }
    // body...
}

function push(){

    for (var i = 0; i < sampledb.constellation.length; i++){

        var f = sampledb.constellation[i].number;

        stars1.forEach(function (word){ if (word.num == f){sampledb.constellation[i].stars.push(word)} });


    }


}

loadTweet();
populateTweets();
format();
push();
}




var Twitter = require('twitter-node-client').Twitter;


var config = {
    	"consumerKey": "SiPSBNbS3Z07JISLrMbpMytHG",
    	"consumerSecret": "Tiqnm2d0FHUoc4nXDU1PNIj17p7kWdCs2uLiEpO2SFGXfZX9zT",
    	"accessToken": "155113486-hdKejRFtUBfGQT3VRrYKHrPSKmhr50PeGtwNM4VL",
    	"accessTokenSecret": "SVVKeQklD6OIE3j6ZTB9xC6J9M1hqYwzxoXtdYMdOyKVT",
    	"callBackUrl": "https://johncarlosalvarez.com/"
	}


var twitter = new Twitter(config);

twitter.getUserTimeline({ screen_name: 'elonmusk', count: '10'}, error, success);

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    
    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.htm').pipe(res);
    }
    
    else {
        res.writeHead(404);
        res.end();
    }
    
}).listen(3000, '127.0.0.1');

console.log('listening on port 127.0.0.1:3000');

module.exports = sampledb;
