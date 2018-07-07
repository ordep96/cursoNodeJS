'use-strict';

const express = require('express'),
      pug = require('pug'),
      bodyParser = require('body-parser'),
      favicon = require('serve-favicon')(`${__dirname}/public/favicon.png`),
      publicDir = express.static(`${__dirname}/public`),
      viewDir = `${__dirname}/views`,
      port = (process.env.PORT || 3000),
      mysql = require('mysql'),
      myConnection = require('express-myconnection'),
      /* Opciones de la base de datos */
      dbOptions = {
        host:'localhost',
        user:'root',
        password: '',
        port: 3306,
        database:'contact_app'
      },
      conn = myConnection(mysql,dbOptions,'request');

let app = express();

app.set('views', viewDir);
app.set('view engine', 'pug');
app.set('port', port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended:false}) );
app.use(publicDir);
app.use(favicon);

app.use(conn);


app.get('/', (req,res,next) => {
  req.getConnection((err,conn) => {
    conn.query('SELECT * FROM contacto', (err,data) => {
      if(!err){
        res.render('index', {
          title:'App de Contactos',
          data
        });
      }
    });
  });
});

app.get('/agregar', (req,res,next) => {
  res.render('add',{title:'Agregar Contacto'})
})



app.post('/', (req,res,next) => {

  req.getConnection((err,conn) => {

    let contacto = {
      id:0,
      nombre:req.body.nombre,
      apellido:req.body.apellido,
      edad:req.body.edad,
      pais:req.body.pais
    };

    conn.query('INSERT INTO contacto SET ?', contacto, (err,data) => {
      if(!err){
        res.redirect('/');
      }else{
        res.redirect('/agregar');
      }
    })

  })

})


app.get('/editar/:id', (req,res,next) => {
  let id = req.params.id;
  console.log(id)
  req.getConnection((err,conn) => {
    conn.query(`SELECT * FROM contacto WHERE id = ${id}`, (err,data) => {
      if(!err){
        res.render('edit', {
          title:'Editar Contacto',
          data:data[0]
        })
      }
    })

  })
});

app.post('/editar/:id', (req,res,next) => {
  let id = req.params.id;

  req.getConnection((err,conn) => {

    let contacto = {
      id:req.body.id,
      nombre:req.body.nombre,
      apellido:req.body.apellido,
      edad:req.body.edad,
      pais:req.body.pais
    };


    conn.query('UPDATE contacto SET ? WHERE id = ?',[contacto,contacto.id], (err,data) => {
      if(!err){
        res.redirect('/');
      }else{
        res.redirect(`/editar/${id}`)
      }
    })
  })
})




app.listen(app.get('port'), () => console.log('Corriendo CRUD con node Practica'))
