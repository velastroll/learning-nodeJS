var http = require("http"),
    fs = require("fs");
http.createServer(function(request, response){

    fs.readFile("../0. files/index.html", function(err, html){
        
        // response.writeHead(200, {"Content-Type":"text/html"})
        // 200 is the flag of everything is OK
        // Content-Type could be JSON for example.
        response.writeHead(200, {"Content-Type":"application/json"})
        response.write(JSON.stringify({nombre: "Alvaro", username: "Velastroll"}));
        response.end();
    });  
}).listen(8080);