'use-strict';

const TeamController = require('../controllers/team-controller'),
      express = require('express'),
      router = express.Router(),
      tc = new TeamController();


router
  .get('/', tc.getAll )
  .get('/agregar', tc.addForm )
  .post('/', tc.save)
  .get('/editar/:id', tc.getOne)
  .put('/edit/:id', tc.save)
  .delete('/eliminar/:id', tc.delete)


module.exports = router;