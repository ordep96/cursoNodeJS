'use-strict';

const express = require('express'),
      router = express.Router(),
      HospitalController = require('../controllers/hospital-controller'),
      hc = new HospitalController();

router
  .get('/', hc.getAllConsultas)
  .get('/agregar-doctor', hc.addFormDoctor)
  .post('/add-doctor', hc.addDoctor)
  .get('/agregar-paciente', hc.addFormPaciente)
  .post('/add-paciente', hc.addPaciente)
  .get('/generar-cita', hc.formGenerarCita)
  .post('/add-cita', hc.generarCita)


module.exports = router;