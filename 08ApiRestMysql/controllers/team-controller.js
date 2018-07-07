'use-strict';

const TeamModal = require('../models/team-model'),
      tm = new TeamModal();


class TeamController{

  getAll(req,res,next){
      tm.getAll( (err,data) => {
         if(!err){
            res.render('index', {
              title:'Indentantion War',
              data
            });
         }
      })
  }


  getOne(req,res,next){
    tm.getOne(req.params.id, (err,data) => {
      if(!err){
        res.render('edit',{
          title:'Editar Contacto',
          data:data[0]
        })
      }
    })
  }


  save(req,res,next){

    let contacto = {
      id:(req.body.id || 0),
      name:req.body.name,
      twitter:req.body.twitter,
      country:req.body.country,
      side:req.body.side
    };

    tm.save(contacto, (err,data) => {
        if(!err){
          res.redirect('/');
        }else{
          res.redirect('/agregar');
        }
    })

  }

  delete(req,res,next){
    tm.delete(req.params.id, (err,data) => {
        if(!err){
          res.redirect('/')
        }else{
          return next(new Error('Registro no Encontrado'));
        }
    })
  }

  addForm(req,res,next){
    res.render('add', {title:'Agregar Contacto'});
  }

}

module.exports = TeamController;