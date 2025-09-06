class inicioPAM{
    constructor(){
        this.atr=document.getElementById('atr');
    }
    ReglamentoPOO(){
        this.atr.innerHTML=`
        <p>
        <br>1.Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.
        <br>2.Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia (Solamente en los horarios de inicio:7:00a.m y 14:00 p.m).
        <br>3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores a la hora de falta en clase mediante correo del tutor (a), justificantes entregados fuera de la fecha límite permitido no se aceptan, únicamente se aceptarán recetas médicas y citatorios jurídicos.(De forma física deben ser presentados al tutor para ser validados y de forma posterior emitidos).
        <br>4. Las tareas y trabajos deberán subirlas al Classroom de forma individual y no se recibirán de manera extemporánea.(Salvo previo justificante validado por el tutor)
        <br>5. Las tareas y trabajos presentarlos en tiempo y forma. La demora de un trabajo o tarea sin justificante y/o con justificante fuera del límite no se aceptan.
        <br>6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.
        <br>7. El plagio o copia de trabajos y/o exámenes, será condicionado a reprobar a la asignatura y se reportará al área correspondiente.
        <br>8. Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final
        <br>9. En circunstancia de indisciplina o falta de respeto por parte del alumno hacia docentes,administrativos, compañeros o cualquier persona perteneciente a la universidad, se realizará una primera llama de atención, si el alumno hace caso omiso tendrá que abandonar el aula, tres incidencias de este tipo el alumno no tendrá derecho a examen final o parcial.
        <br>10. Uso de laptops y/o dispositivos móviles quedará limitados a uso exclusivo de las actividades que así lo requieran.
        <br>11. Prohibido el uso de audífonos durante la clase.
        <br>12. Prohibido comer y/o tomar líquidos en el salón.
        <br>13. Prohibido sentarse encima de las mesas , así como columpiarse en las sillas.
        <br>14.Todo tema académido debe ser revisado primeramente por parte del alumno con el docente, de no resolverse, pasar con su respectivo tutor, y de ser necesario con la coordinación de tutores. En caso de no solucionarse pasar a la dirección del programa educativo (debe mantenerse este seguimiento de forma obligatoria)
        <br>15.Cualquier situación no prevista en el presente reglamento pasar directamente con la dirección del programa educativo.
        <br>16. El día destinado a entrega de calificaciones todos los estudiantes deben estar presentes, ese día se entregarán exámenes y se brindará retroalimentación
        <br>17.Este reglamento entra en vigor después de que se firme o se acepte por la mayoría de los estudiantes asistentes a la primera sesión de la materia, una vez firmado o aceptado por el 50% más el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no esté presente en la primera sesión.
        </p>`;
    }

    LineamientosClassroom(){
        this.atr.innerHTML=`
        <p><br>Las tareas y trabajos deberán subirse a Classroom de forma individual, en tiempo y forma.
        <br>Usar el correo institucional para trabajar en Classroom.
        <br>Entregas completas.
        <br>Las evidencias deberán llevar portada(estilo libre) y conclusiones de aprendizaje</p>`;
    }

    FechasdeParciales(){
        this.atr.innerHTML=`
        <p><br>1er Parcial-> 29-09-25
        <br>2do Parcial->03-11-25
        <br>3er Parcial->01-12-25
        <br>Final->08-12-25</p>`;
    }

    PorcentajesporParcial(){
        this.atr.innerHTML=`
        <p><br>PRIMER PARCIAL
        <br>conocimiento=40%
        <br>desempeño=20%
        <br>producto=30%
        <br>PI=10%
        <br>SEGUNDO PARCIAL
        <br>conocimiento=40%
        <br>desempeño=20%
        <br>producto=20%
        <br>PI=20%
        <br>TERCER PARCIAL
        <br>conocimiento=20%
        <br>desempeño=10%
        <br>producto=40%
        <br>PI=30%</p>`;
}
}

const act= new inicioPAM();
