/*
  Streams
  'Chorros': de información que se transmite en 'Pedazos' (Chunks)
  3 tipos: Lectura / Escritura / Duplex
  Instancia de EventEmitter
  Acceso asincrono
  Es raro crear stream directamente
  Pero muchos recurso no ofrecen este interfaz
  Detrás de muchos mecanismos de Node.JS
    stdin/ stdout
    request de HTTP
    Sockets
    Manipulación de ficheros/imagenes

*/

'use-strict'

const fs = require('fs'),
      http = require('http'),
      readStream = fs.createReadStream('./nombres.txt'),
      writeStream = fs.createWriteStream('./nombres_copia.txt')

const writeText = () => {
  readStream.pipe( writeStream )

  readStream.on('data', (chunk) => {
    console.log(chunk.toString())
  })

  readStream.on('end', () => console.log('Lectura terminada'))
}


writeText();

    