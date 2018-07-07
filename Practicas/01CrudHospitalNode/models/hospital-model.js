'use-strict';

const conn = require('./model'),
      querys = require('./query');


class HospitalModel{

  getAllConsultas(cb){
    conn.query(querys.$getAll, cb);
  }


  addDoctor(data,cb){
    conn.query(querys.$addDoctor, data , cb);
  }


  addPaciente(data,cb){
    conn.query(querys.$addPaciente,data,cb);
  }

  getAllPacientes(cb){
    conn.query(querys.$getAllPacientes,cb);
  }

  getAllDoctors(cb){
    conn.query(querys.$getAllDoctors,cb);
  }

  generarCita(data,cb){
    conn.query(querys.$generarCita,data,cb);
  }

}


module.exports = HospitalModel;