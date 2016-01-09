var url = {
    ip: '127.0.0.1',
    port: 8888
};
var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var app = express();

var filesystem = require("fs");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

var fileURL = "../form.txt";

app.get("/", function(req,res){

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Sie haben sich erfolgreich auf den WebServer mit der Url " + "\<" + url.ip + ':' + url.port + "\>" + " verbunden");
    console.log("\<User connected to Server\>");
    res.end();
});

app.get('/allplayers', function(req,res){

    res.location(path);
    res.json();

});

app.get('/favorites', function(req,res){

    var players = require("../public/data.json");
    var favorites={};
    var j =0;
    for(var i=0;i<players.length;i++){
        if(players[i]["isFavorite"] == true){
            favorites[j] = players[i];
            j++;
        }
    }
    res.json(favorites);

});

app.get('*', function(req,res){
    res.send("Nothing to find here.");

});

var server = app.listen(8888, function(){

    var port = server.address().port;
    var host = server.address().ip;

    console.log("Server listening to "+host+port);
});

function parseRequest(request){

    var query = request.url.substring(2);
    var attributes = query.split('&');
    var splittedAttributes;
    var queryObject= new Object();
    for(var i=0; i<attributes.length;i++){
        splittedAttributes = attributes[i].split('=');
        queryObject[splittedAttributes[0]] = splittedAttributes[1];
    }

    return queryObject;
}

function saveInFile(fileURL, queryObject) {

    if(queryObject != undefined) {
        var savedQueryLine = queryObject.vorname + " "
            + queryObject.name + ", "
            + queryObject.jahr + ", "
            + queryObject.hcoach + ", "
            + queryObject.acoach + ", "
            + queryObject.position + ", "
            + queryObject.number + "\n";

        filesystem.appendFile(fileURL, savedQueryLine, function (error) {
            if (error) throw error;
            console.log('It\'s saved!');
        });
    }
}
