'use-strict';

const AuthController = require('../controllers/auth-controller'),
      express = require('express'),
      router = express.Router(),
      ac = new AuthController();


router
  .get('/', ac.index )
  .get('/login', ac.logInGet)
  .post('/login', ac.logInPost)
  .get('/signin', ac.signInGet)
  .post('/signin', ac.signInPost)
  .post('/logout', ac.logout);

module.exports = router;