'use-strict'

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

/* createServer recibe request y response*/
/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

function webServer(req,res){
  /*res.statusCode = 200*/
  res.writeHead(200,{'Content-Type':'text/html'})
  res.end('Hola Mundo Nodejs\n')
}

http
  .createServer(webServer)
  .listen(3000,'localhost')

console.log("Servidor corriendo en http://localhost:3000/")