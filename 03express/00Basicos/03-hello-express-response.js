'use strict';


const express = require('express'),
      app = express();

app.get('/', (req,res) => {
  res.send('<h1>Hola mundo desde Express</h1>')
})


/*  Redirecciones */
app.get('/ed', (req,res) => {
    res.redirect(301, 'https://ordep96.github.io/me/');
})

app.get('/json', (req,res) => {
   res.json({
     name:"Pedro",
     age:21,
     alias:"ordep96"
   })
})

/*  No funciona falta resolver  */
app.get('/render', (req,res) => {
    res.render(`${__dirname}/index.html`);
})

app.listen(3000, () => console.log('iniciando Express en el puerto 3000'))