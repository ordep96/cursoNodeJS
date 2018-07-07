'use-strict';

const TeamModal = require('../models/team-model'),
      tm = new TeamModal();


class TeamController{

  getAll(req,res,next){
      tm.getAll(data => {
        res.render('index', {
          title:'Indentantion War',
          data
        });
      })
  }


  getOne(req,res,next){
    tm.getOne(req.params.id, data => {
        res.render('edit',{
          title:'Editar Contacto',
          data
        })
    })
  }


  save(req,res,next){

    let contacto = {
      _id:(req.body.id || null),
      name:req.body.name,
      twitter:req.body.twitter,
      country:req.body.country,
      side:req.body.side
    };

    tm.save(contacto, (err,data) => res.redirect('/teams'));

  }

  delete(req,res,next){
    tm.delete(req.params.id, () => res.redirect('/teams'))
  }

  addForm(req,res,next){
    res.render('add', {title:'Agregar Contacto'});
  }

}

module.exports = TeamController;