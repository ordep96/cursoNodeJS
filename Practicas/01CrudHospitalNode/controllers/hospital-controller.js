'use-strict';

const HospitalModel = require('../models/hospital-model'),
      hm = new HospitalModel();


class HospitalController{

  getAllConsultas(req,res,next){
    hm.getAllConsultas((err,data) => {
      res.render('index',{
        title:'Citas Generadas',
        data
      })
    })
  }

  addFormDoctor(req,res,next){
    res.render('add-doctor',{title:'Agregar Doctor'});
  }


  addDoctor(req,res,next){
    let doctor = {
      idDoctor:0,
      nombre_doctor:req.body.nombre_doctor,
      apellido_doctor:req.body.apellido_doctor,
      especialidad:req.body.especialidad
    };

    hm.addDoctor(doctor,(err,data) => {
      if(!err){
        res.redirect('/');
      }else{
        console.log(err)
        res.redirect('/agregar-doctor');
      }
    })

  }

  addFormPaciente(req,res,next){
    res.render('add-paciente',{title:'Agregar Paciente'});
  }

  addPaciente(req,res,next){
    let paciente = {
      idPaciente:0,
      nombre_paciente:req.body.nombre_paciente,
      apellido_paciente:req.body.apellido_paciente,
      edad_paciente:req.body.edad_paciente
    }

    hm.addPaciente(paciente,(err,data) => {
      if(!err){
        res.redirect('/')
      }else{
        res.redirect('/agregar-paciente')
      }
    })

  }

  formGenerarCita(req,res,next){

    hm.getAllPacientes((err,pacientes) => {
      if(!err){

        hm.getAllDoctors((err,doctors) => {
          if(!err){
            res.render('add-cita',{
              title:'Generar Cita',
              pacientes,
              doctors
            })
          }

        });

      }

    });

  }

  generarCita(req,res,next){
    let cita = {
      idCita:0,
      fkPaciente:req.body.paciente,
      fkDoctor:req.body.doctor,
      precio:req.body.precio,
      tipo:req.body.tipo_consulta
    }

    hm.generarCita(cita,(err,data) => {
      if(!err){
        res.redirect('/');
      }else{
        console.log(err)
        res.redirect('/generar-cita');
      }
    })

  }



}


module.exports = HospitalController;