/*
  Buffers
    Una tira de bytes (datos binarios)
    Similiar a un array de enteros
    Tamaño Fijo
    Manipular datos Directamente
      Sockets
      Streams
      Implementar protocolos complejos
      Manipulación de ficheros/imagenes
      Criptografía
*/

'use-strict';
  
  /* new Buffer ha sido depreciado por lo que se debe usar Buffer.alloc*/
let buf = Buffer.alloc(100),
    buf2 = new Buffer(26),
    str = '\u00bd + \u00bc = \u00be'

buf.write('abcd',0,4,'ascii')

console.log(
  buf,
  buf.toString('ascii')
);

for(let i=0; i < buf2.length; i++ ){
   buf2[i] = i + 97;
}

console.log('abecedario',buf2.toString())