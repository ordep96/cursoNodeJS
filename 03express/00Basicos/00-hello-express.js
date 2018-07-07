'use strict';


const express = require('express'),
      app = express();


/* El metodo get recibe una ruta una función anonima */

app
  .get('/',(req,res ) => res.end('<h1>Hola mundo desde Express</h1>')) 
  .listen(3000, () => console.log('iniciando Express en el puerto 3000'))