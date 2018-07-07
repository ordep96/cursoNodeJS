'use-strict';

const conn = require('../models/model'),
      express = require('express'),
      router = express.Router();


router
  .use(conn)
  .get('/', (req,res,next) => {
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
  })
  .get('/agregar', (req,res,next) => {
    res.render('add', {title:'Agregar Contacto'});
  })
  .get('/editar/:id',(req,res,next) => {
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
  .post('/', (req,res,next) => {
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
  .post('/edit/:id', (req,res,next) => {
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
  })
  .post('/eliminar/:id', (req,res,next) => {
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

module.exports = router;