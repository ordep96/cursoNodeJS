let $queryGetAll = 'select doctor.nombre_doctor, doctor.apellido_doctor, doctor.especialidad, paciente.nombre_paciente,paciente.apellido_paciente, cita.precio,cita.tipo from doctor,paciente,cita where doctor.idDoctor = fkDoctor AND paciente.idPaciente = fkPaciente',

    $queryAddDoctor = 'INSERT INTO doctor SET ?',
    $queryAddPaciente = 'INSERT INTO paciente SET ?',
    $queryGetAllPacientes = 'SELECT * FROM paciente';
    $queryGetAllDoctors = 'SELECT * FROM doctor';
    $queryGenerarCita = 'INSERT INTO cita SET ?';



module.exports.$getAll = $queryGetAll;
module.exports.$addDoctor = $queryAddDoctor;
module.exports.$addPaciente = $queryAddPaciente;
module.exports.$getAllPacientes = $queryGetAllPacientes;
module.exports.$getAllDoctors = $queryGetAllDoctors;
module.exports.$generarCita = $queryGenerarCita;