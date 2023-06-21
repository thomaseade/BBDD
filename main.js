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

         
        
        // DIA 1 

     //RETO 1
     
     // insertar profesores
     // const sql = `INSERT INTO reto1.teachers(first_name,last_name) VALUES ('Dani', 'Codenotch')`;

     // insertar subjects
     // const sql = `INSERT INTO reto1.subjects (title) VALUES ('Matematicas')`;

     //insertar grupos
     //  const sql = `INSERT INTO reto1.grupos (name) VALUES ('A ciencias')`;

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





           //DIA2
    
     //RETO 1

     //calcular la nota media de los alumnos de la asignatura 1.

     //  const sql =`SELECT AVG(mark) AS nota_media
     //              FROM reto1.marks
     //              WHERE id_subject = 1`;



     //Calcular el número total de alumnos que hay en el bootcamp.

     //  const sql=`SELECT COUNT(*) AS total_alumnos
     //             FROM reto1.students`;



     //Listar todos los campos de la tabla “groups”.

     //  const sql=`SELECT * FROM reto1.grupos`;



     //Elimina todas las notas de la base de datos que estén por encima de 5 y que sean del año pasado (no utilices BETWEEN).

     //  const sql= `DELETE FROM reto1.marks
     //             WHERE mark > 5 AND YEAR(date) <"2023"`;


     //Obtén los datos de todos los estudiantes que estén en el bootcamp este año.

     //  const sql=`SELECT * FROM reto1.students
     //             WHERE DATE(año_ingreso) = "2023-01-01"`;


     //Calcular el numero de profesores que hay por cada asignatura.

     // const sql =`SELECT subject_id, COUNT(teacher_id) AS numero_profesores
     //             FROM subject_teacher
     //             GROUP BY subject_id`;



        //RETO 2//

     //Obtén el id y la nota de los alumnos que tengan un id entre 1 y 20, o que tenga una nota mayor de 8 y la nota tenga fecha del año pasado.

     //  const sql =`SELECT mark_id, mark
     //              FROM reto1.marks
     //              WHERE (id_student BETWEEN 1 AND 20) OR (mark > 8 AND YEAR(date) > "2022-01-01")`;



     //Obtén la media de las notas que se han dado en el último año por asignatura.


     //  const sql = `SELECT id_subject, AVG(mark) AS media_notas FROM reto1.marks
     //               WHERE date > "2023-01-01"
     //               GROUP BY id_subject`;



     //Obtén la media aritmética de las notas que se han dado en el último año por alumno.

     //  const sql =` SELECT id_student, AVG(mark) AS media_notas FROM reto1.marks
     //              WHERE date > "2023-01-01"
     //              GROUP BY id_student`;
 



        
    
     const [result,data] = await connection.execute(sql);
     console.log(result);
    
     

 

    }
    



    catch(err) {
        console.log(err)
        await connection.end()
    }
};
connect();
