'use strict';

const mysql = require('mysql'),
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

module.exports = conn;