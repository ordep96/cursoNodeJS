'use-strict';

let express = require('express'),
      app = express(),
      http = require('http').createServer(app),
      io = require('socket.io')(http),
      port = process.env.PORT || 3000,
      publicDir = express.static(`${__dirname}/public`);


app
  .use(publicDir)
  .get('/', (req,res) => res.sendFile(`${publicDir}/index.html`))


http.listen(port, () => console.log('Iniciando Express y Socket.IO en localhost:%d', port ) );


/* hacemos la conexion */
io.on('connection', (socket) => {
  socket.broadcast.emit('new user', {message:'Ha entrado un usario al chat'})


  /*  Nuevo Mensaje */
  socket.on('new message', message => {
      io.emit('user says', message)
  })


  /* Desconectar  */
  socket.on('disconnect', () => {
    console.log('ha salido un usuario del chat')
    socket.broadcast.emit('bye bye user', {message:'Ha salido un usuario del Chat'});
  })


})