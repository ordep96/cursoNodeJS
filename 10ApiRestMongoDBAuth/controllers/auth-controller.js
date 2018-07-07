'use-strict';

const AuthModel = require('../models/auth-model'),
      erros = require('../middlewares/errors'),
      am = new AuthModel();

class AuthController{

  index(req,res,next){
    if( req.session.username ){
      res.redirect('/teams');
    }else{
      res.render('login-form',{
        title:'Autenticacion de Usuarios',
        message:req.query.message
      })
    }
  }

  logInGet(req,res,next){
   res.redirect('/');
  }

  logInPost(req,res,next){
    let user = {
      username:req.body.username,
      password:req.body.password
    }

    am.getUser(user,(data) => {
      req.session.username = (data !== null ) ? user.username : null

      return (req.session.username)
        ? res.redirect('/teams')
        : erros.http401(req,res,next)
    })

  }

  signInGet(req,res,next){
    res.render('signin-form',{title:'Registro de Usuarios'})
  }

  signInPost(req,res,next){
    let user = {
      user_id:0,
      username:req.body.username,
      password:req.body.password
    }

    am.setUser(user,(data) => {
      res.redirect(`/?message=El usuario ${user.username} ha sido creado`)
    })
  }

  logout(req,res,next){
    req.session.destroy((err) => {
        return (err)
          ? erros.http500(req,res,next)
          : res.redirect('/')
    })
  }

}



module.exports = AuthController;