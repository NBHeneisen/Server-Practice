//adding http npm
var http = require('http');
var twitter = require('twitter');

//port variable
var PORTgood = 7000;
var PORTbad = 7500

//responds to client
function serverResponseGood (request, response) {
    //Do something here...
    response.end('You are a good person');
}

function serverResponseBad (request, response) {
    //Do something here...
    response.end('You are a bad person');
}

//creates server
var serverGood = http.createServer(serverResponseGood);

var serverBad = http.createServer(serverResponseBad);

//allows server to listen for requests
serverGood.listen(PORTgood, function() {
    //Do something when we start up the server.
    console.log("Port good used. http://localhost:" + PORTgood);
});

serverBad.listen(PORTbad, function() {
    //Do something when we start up the server.
    console.log("Port bad used. http://localhost:" + PORTbad);
});