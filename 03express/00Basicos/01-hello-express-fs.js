'use strict';


const express = require('express'),
      app = express();


/* Servir archivos estaticos*/
app
  .get('/', (req,res ) => res.sendFile(`${__dirname}/index.html`) ) 
  .listen(3000, () => console.log('iniciando Express en el puerto 3000'))