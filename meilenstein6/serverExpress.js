var url = {
    ip: '127.0.0.1',
    port: 8888
};
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.get("/", function(req,res){

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write("Sie haben sich erfolgreich auf den WebServer mit der Url " + "\<" + url.ip + ':' + url.port + "\>" + " verbunden");
    console.log("\<User connected to Server\>");
    res.end();
});

app.get('/Allplayers', function(req,res){
    res.send("AllPlayers");
});

app.get('/favorites', function(req,res){
    res.send("Favorites");
});

app.get('*', function(req,res){
    res.send("Nothing to find here.");

});

var server = app.listen(8888, function(){

    var port = server.address().port;
    var host = server.address().ip;

    console.log("Server listening to "+host+port);
});