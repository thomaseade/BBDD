const mysql = require('mysql2/promise');

const connect = async () => {



    try
    {
        let connection = await mysql.createConnection(
            {

            host:'localhost',
            user:'root',
            password:'esklavos100',
            database:'reto1',

        });
        console.log('Conexion correcta');

         
     
     // insertar profesores
     // const sql = `INSERT INTO reto1.teachers(first_name,last_name) VALUES ('Dani', 'Codenotch')`;


     // insertar subjects
     // const sql = `INSERT INTO reto1.subjects (title) VALUES ('Matematicas')`;


     //insertar grupos
     // const sql = `INSERT INTO reto1.grupos (name) VALUES ('A ciencias')`;


     // insertar estudiantes
     // const sql = `INSERT INTO reto1.students (first_name, last_name, id_group) VALUES ('Lolo', 'Perez', '1')`;
     

     //insertar notas (marks)
     // const sql = `INSERT INTO reto1.marks (mark_id, id_student, id_subject, date, mark) VALUES ('1', '1', '1', '2012-10-25', '5')`;



     // borrar una columna de la tabla direccion y añadir otra 

     //    const sql = `ALTER TABLE reto1.direccion
     //                 DROP COLUMN calle,
     //                 ADD COLUMN provincia VARCHAR(45) NULL AFTER numero`;



     // borrar tabla direccion de forma permanente
     //  const sql = `DROP TABLE reto1.direccion`;



     // setear las notas de todos los alumnos a 0
     //const sql = `UPDATE reto1.marks SET mark = 0` ;



     // obtener el nombre y primer apellido de todos los estudiantes
     //  const sql = `SELECT first_name, last_name FROM reto1.students`;



     //obtener todos los datos de los profesores
     //  const sql= `SELECT * FROM reto1.teachers`;

     

     //   RETO 2    //


     // eliminar notas cuya fecha tenga mas de 10 años 
     //  const sql =  `DELETE  FROM reto1.marks WHERE date < "2013-20-06"`;


     //cambiar las notas inferiores a 5 por un 5:
     //  const sql = `UPDATE reto1.marks
     //  SET mark = 5
     //  WHERE mark < 5;` ;

        
    
     const [result,data] = await connection.execute(sql);
     console.log(result);
    








 

    }
    



    catch(err) {
        console.log(err)
        await connection.end()
    }
};
connect();
