'use-strict';

const app = require('./app'),
      server = app.listen(app.get('port'), () => console.log(`Iniciando Api Rest MVC con express en el puerto ${app.get('port')}`));