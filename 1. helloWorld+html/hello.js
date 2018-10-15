var http = require("http"),
    fs = require("fs");

    // response is a ServerResponse type
http.createServer(function(request, response){

    // read file in asinchronous mode;
    fs.readFile("../0. files/index.html", function(err, html){
        // the html is the body of the answer
        response.write(html);
        response.end();
    });
// the server is launched at 8080 port;    
}).listen(8080);