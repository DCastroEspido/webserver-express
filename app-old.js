

const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'application/json'});
    let salida = {
        nombre: 'Dani',
        edad: 30, 
        url: req.url
    }
   // res.write('Hola Mundo');
   res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log('Servidor desplegado en el puerto 8080')