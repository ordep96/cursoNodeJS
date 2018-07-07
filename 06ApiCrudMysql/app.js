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
        database:'identation_war'
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
      conn.query('SELECT * FROM team', (error,data) => {
        if(!error){
          res.render('index', {
            title:'Indentantion War',
            data
          });
        }
      });
   });
});


app.get('/agregar', (req,res,next) => {
  res.render('add', {title:'Agregar Contacto'});
});


app.get('/editar/:id',(req,res,next) => {
  req.getConnection((err,conn) => {
    conn.query(`SELECT * FROM team WHERE id = ${req.params.id}`, (error,data) => {
      if(!error){
        res.render('edit', {
          title:'Editar',
          data:data[0]
        })
      }

    })
  })
})

app.post('/', (req,res,next) => {
  req.getConnection((err,conn) => {
    let contacto = {
      id:0,
      name:req.body.name,
      twitter:req.body.twitter,
      country:req.body.country,
      side:req.body.side
    };

    conn.query('INSERT INTO team SET ?', contacto, (err,data) => {
       if(!err){
         res.redirect('/');
       }else{
         res.redirect('/agregar');
       }
    })

  })
})


app.post('/edit/:id', (req,res,next) => {
  req.getConnection((err,conn) => {
    let contacto = {
      name:req.body.name,
      twitter:req.body.twitter,
      country:req.body.country,
      side:req.body.side
    };

    conn.query(`UPDATE team SET ? WHERE id = ${req.params.id}`, contacto, (err,data) => {
      if(!err){
        res.redirect('/')
      }else{
        res.redirect(`/editar/:id`)
      }
    })

  })
});


app.post('/eliminar/:id', (req,res,next) => {
    req.getConnection((err,conn) => {

      conn.query('DELETE FROM team WHERE id = ?', req.params.id, (err,data) => {
        if(!err){
          res.redirect('/')
        }else{
          return next(new Error('Registro no Encontrado'))
        }

      })

    })
})


app.listen(app.get('port'), () => console.log(`Iniciando Api Crud con express`))
