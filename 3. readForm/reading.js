// Variables 
var http = require("http"),
    fs = require("fs");

// iniciamos servidor

http.createServer( function(req, resp){

    // leemos el html -> fs
    fs.readFile("./form3.html", function(err, html){

        // pasamos el html a una cadena de String para tratarlo
        var html_str = html.toString();
        // Creamos los arrays necesarios
        var arrayParametros = [];
        // obtenemos las variables del html
        var variables = html_str.match((/[^\{\}]+(?=\})/g));
        // iniciamos las variables que deben aparecer en el html
        var nombre = "";
        var edad = "";

        // vamos a tratar el formulario enviado por URL (get method)
        if (req.url.indexOf("?")>0){
            // localhost/?nombre=n&edad=x -> "nombre=n&edad=x"
            var urlData = req.url.split("?");
            // "nombre=n&edad=x" -> [nombre=n, edad=x]
            var arrayParametros = urlData[1].split("&");
        }

        //creamos un hash -> {nombre: n, edad: x}
        var parametros = {};

        for(var i = 0; i < arrayParametros.length ; i++){
            // "nombre=n"
            var parametro = arrayParametros[i];
            // [nombre, n]
            var datosDelParametro = parametro.split("=");
            // {nombre: n}
            parametros[datosDelParametro[0]] = datosDelParametro[1];
        }

        // Ya tenemos que parametros={nombre: n, edad: x}

        // vamos a hacr que nos salude en el html

        for (var i = variables.length - 1; i >= 0; i--) {

            var variable = variables[i];
            html_string = html_string.replace("{"+variables[i]+"}", parametros[variable]);
        }
           
        res.writeHead (200, {"Content-Type":"text/html"})
        res.write(html_string);
        res.end();
    }); 
}).listen(8080);