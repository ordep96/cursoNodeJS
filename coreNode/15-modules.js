/*
  Módulos (require/exports)
    require(<paquete o ruta>)
      Importar módulos (paquetes, otros ficheros)
      Garantía: una única vez
      Devuelve el módulo

      exports.propiedadPublica = valor
        El otro lado del mecanismo
        Se puede Exportat cualquier valor
*/

'use-strict';

const Clock = require('./Clock'),
      cucu  = new Clock();

console.log(
  myData.name,
  myData.email,
  myData._phone
)
cucu.theTime();