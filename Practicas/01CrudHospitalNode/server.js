'use-strict';

const app = require('./app'),
      server = app.listen(app.get('port'), () => console.log("corriendo servidor en el puerto 3000"));

