'use strict';

const mysql = require('mysql'),
      conf = require('./db-conf'),
      dbOptions = {
        host:conf.mysql.host,
        user:conf.mysql.user,
        password: conf.mysql.password,
        port: conf.mysql.port,
        database:conf.mysql.db
      },
      conn = mysql.createConnection(dbOptions);

conn.connect((err) => {
  return (err)
      ? console.log(`Error al conectarse a Mysql: ${err.starck}`)
      : console.log(`Conexión establecida con Mysql: ${conn.threadId}`)
})

module.exports = conn;