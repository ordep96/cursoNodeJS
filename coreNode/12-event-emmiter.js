'use-strict';

const EventEmitter = require('events').EventEmitter,
      ee = new EventEmitter();

ee
  .on('myevent', message => console.log('message'))
  .once('myevent', message => console.log(`Se emite la primera vez ${message}`));

ee.emit('myevent', 'Soy un Emisor de Eventos');
ee.emit('myevent', 'volviendo a emitir');  

/*
Con estos elimanmos eventos 
ee.removeAllListener('myevent')*/