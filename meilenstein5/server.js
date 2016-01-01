var url = {
     port : 8888,
     ip : "127.0.01"
};
var http = require('http');

http.createServer(function onRequest (request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Sie haben sich erfolgreich auf den WebServer mit der Url " + "\<" + url.port + ":" + url.ip + "\>" + " verbunden");
    console.log("\<User connected to Server\>");
    response.end();
}).listen(url.port);



