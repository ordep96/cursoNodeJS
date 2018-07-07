'use strict';


const express = require('express'),
      app = express();

/* El metodo get recibe una ruta una función anonima */

app.get('/', (req,res) => res.end('<h1>Hola mundo desde Express</h1>'))

app.get('/user/:id-:name-:age', (req,res) => {
  res.end(`
    <h1>
      ${req.params.name}, bienvenid@ a Express :) tu id es
      <b>${req.params.id}</b> y tienes ${req.params.age} a&ntilde:os
    </h1>`
    );
})

app.get('/search', (req,res) => {

  res.end(`
     <h1>
       Bienvenido a Express, los resultados de tu busqueda son :
       <mark>${req.query.s}</mark>
     </h1>
  `)

})


app.listen(3000, () => console.log('iniciando Express en el puerto 3000'))