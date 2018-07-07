/* Single Thread */
'use-strict'

const singleThread = () => {

  console.log('********************************')
  console.log('    El proceso de Node.js       ')
  console.log('Id del proceso ***********', process.pid)
  console.log('Titulo *******************', process.title)
  console.log('Directorio de Node ************', process.execPath)
  console.log('Directorio Actual ************', process.cwd())
  console.log('Versión de Node **************', process.version)
  console.log('Versiones Dependencias *********', process.versions)
  console.log('Plataforma (S.O) **************', process.platform)
  console.log('Arquitectura (S.O) *************', process.arch)
  console.log('Tiempo activo de Node **********', process.uptime())
  console.log('Argumentos de Node**************', process.argv)
  console.log('******************************************')
}


singleThread();


console.log(
    process.argv[0],
    process.argv[1]
  )