var url = {
    ip: '127.0.0.1',
    port: 8888
};
var http = require('http');
var filesystem = require("fs");

http.createServer(function onRequest(request, response) {

    if(request.url == "/favicon.ico"){

        response.writeHead(200);
        response.end();
    }else {
        var queryObject = parseRequest(request);

        var fileURL = "../form.txt";

        saveInFile(fileURL, queryObject);
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write("Sie haben sich erfolgreich auf den WebServer mit der Url " + "\<" + url.ip + ':' + url.port + "\>" + " verbunden");
        console.log("\<User connected to Server\>");
        response.end();
    }
}).listen(url.port, url.ip);

function parseRequest(request){

    var query = request.url.substring(2);
    var attributes = query.split('&');
    var splittedAttributes;
    var queryObject= {};
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


