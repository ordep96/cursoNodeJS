/*

  Socket.IO
    1) Eventos connection y disconnect
    2) Puedes crear tu propios eventos
    3) emit(): cuando se comunica un mensaje a todos los clientes conectados
    4) broadcast.emit(): cuando se comunica un mensaje a todos los clientes, excepto al que lo origina
    5) los 4 puntos anteriores funcionan en el servidor y en el cliente

*/

'use-strict';

const http = require('http').createServer(server),
      fs = require('fs'),
      io = require('socket.io')(http)

let conexions = 0;


function server(req,res){
  /* leer archivo de manera asincrona */
  /* Cuando lee un archivo el primer parametro de la callback es error y despues la data */
  fs.readFile('index.html', (err,data) => {
      if(err){
        res.writeHead(500,{'Content-Type':'text/html'})
        return res.end('<h1>Error interno del servidor</h1>')
      }else{
        res.writeHead(200,{'Content-Type':'text/html'})
        return res.end(data,'utf-8')
      }
  })
}
http.listen(3000, () => console.log('listen en localhost:3000'))


io.on('connection', (socket) => {
    socket.emit('hello', { message:'Hola Mundo con Socket.IO' });

    socket.on('evento', (data) => {
      console.log(data.name,data.alias)
    })


    conexions++;
    console.log(`Conexiones activos ${conexions}`)
    socket.emit('users connect',{conexions})

    socket.broadcast.emit('users connect', {conexions})

    socket.on('disconnect', () => {
      conexions--;
      socket.broadcast.emit('users connect',{conexions})
    })

})

