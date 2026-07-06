const fs = require('fs');
const path = require('path');

const tema2200 = {
  "tema_id": "2200",
  "tema_nombre": "Empleo Público y Personal (TREBEP y normativa CAC)",
  "preguntas": [
    {
      "id": "2200-01",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "El texto refundido del Estatuto Básico del Empleado Público (TREBEP) fue aprobado por:",
      "opciones": [
        "Real Decreto Legislativo 5/2015, de 30 de octubre.",
        "Ley 7/2007, de 12 de abril.",
        "Real Decreto Legislativo 1/2006.",
        "Ley Orgánica 3/2018."
      ],
      "correcta": 0,
      "justificacion": "El TREBEP vigente es el aprobado por el Real Decreto Legislativo 5/2015, de 30 de octubre, que refundió la Ley 7/2007.",
      "referencia": "RDL 5/2015 TREBEP"
    },
    {
      "id": "2200-02",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "Los empleados públicos se clasifican en el TREBEP en los siguientes colectivos:",
      "opciones": [
        "Funcionarios de carrera, funcionarios interinos, personal laboral y personal de confianza.",
        "Funcionarios de carrera, funcionarios interinos, personal laboral y personal eventual.",
        "Funcionarios de carrera, funcionarios interinos y personal laboral.",
        "Funcionarios de carrera, laborales fijos y laborales temporales."
      ],
      "correcta": 1,
      "justificacion": "El artículo 8 del TREBEP clasifica al personal al servicio de las AAPP en: funcionarios de carrera, funcionarios interinos, personal laboral y personal eventual.",
      "referencia": "Art. 8 TREBEP"
    },
    {
      "id": "2200-03",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "¿Cuál es el subgrupo de clasificación profesional al que corresponde el título universitario de Grado (4 años)?",
      "opciones": [
        "Grupo A, Subgrupo A1.",
        "Grupo A, Subgrupo A2.",
        "Grupo B.",
        "Grupo C, Subgrupo C1."
      ],
      "correcta": 0,
      "justificacion": "El Subgrupo A1 requiere estar en posesión del título universitario de Grado o equivalente para acceder a él.",
      "referencia": "Art. 76 TREBEP"
    },
    {
      "id": "2200-04",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "El título de Bachiller o Técnico Superior de Formación Profesional da acceso al subgrupo:",
      "opciones": [
        "A2.",
        "B.",
        "C1.",
        "C2."
      ],
      "correcta": 2,
      "justificacion": "El Subgrupo C1 requiere el título de Bachiller o Técnico (equivalente a Formación Profesional de Grado Superior).",
      "referencia": "Art. 76 TREBEP"
    },
    {
      "id": "2200-05",
      "tema": "2200",
      "nivel": "bronce",
      "enunciado": "El título de Graduado en Educación Secundaria Obligatoria (ESO) da acceso al subgrupo:",
      "opciones": [
        "C1.",
        "C2.",
        "E.",
        "B."
      ],
      "correcta": 1,
      "justificacion": "El Subgrupo C2 requiere el título de Graduado en Educación Secundaria Obligatoria (ESO) para el acceso.",
      "referencia": "Art. 76 TREBEP"
    },
    {
      "id": "2200-06",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "Los principios rectores del acceso al empleo público son, entre otros:",
      "opciones": [
        "Igualdad, mérito, capacidad y publicidad.",
        "Exclusivamente igualdad y mérito.",
        "Igualdad, antigüedad y discrecionalidad.",
        "Proximidad, eficiencia y mérito."
      ],
      "correcta": 0,
      "justificacion": "El artículo 55 del TREBEP establece como principios rectores del acceso al empleo público: igualdad, mérito, capacidad y publicidad de la convocatoria.",
      "referencia": "Art. 55 TREBEP"
    },
    {
      "id": "2200-07",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "Los sistemas selectivos para el acceso de funcionarios de carrera son:",
      "opciones": [
        "Solo la oposición.",
        "Oposición, concurso-oposición y concurso.",
        "Oposición, concurso y méritos directos.",
        "Concurso libre y concurso restringido."
      ],
      "correcta": 1,
      "justificacion": "El artículo 61 del TREBEP enumera como sistemas selectivos la oposición, el concurso-oposición y, excepcionalmente, el concurso.",
      "referencia": "Art. 61 TREBEP"
    },
    {
      "id": "2200-08",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "¿Cuál es la edad mínima de acceso al empleo público?",
      "opciones": [
        "16 años.",
        "18 años.",
        "16 años con permiso paterno.",
        "21 años."
      ],
      "correcta": 1,
      "justificacion": "El artículo 56.1.a) del TREBEP exige tener cumplidos 18 años y no exceder la edad máxima de jubilación forzosa.",
      "referencia": "Art. 56.1.a) TREBEP"
    },
    {
      "id": "2200-09",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "El personal eventual se caracteriza porque:",
      "opciones": [
        "Realiza funciones de confianza o asesoramiento especial y su nombramiento y cese son libres.",
        "Sustituye a funcionarios de carrera en situación de baja.",
        "Es idéntico al personal interino.",
        "Accede mediante concurso-oposición."
      ],
      "correcta": 0,
      "justificacion": "El artículo 12 del TREBEP define al personal eventual como el que realiza funciones de confianza o asesoramiento especial, siendo su nombramiento y cese libres.",
      "referencia": "Art. 12 TREBEP"
    },
    {
      "id": "2200-10",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "¿En qué supuestos puede nombrarse a un funcionario interino?",
      "opciones": [
        "Solo por razones de urgente necesidad.",
        "Por razones expresamente justificadas de necesidad y urgencia para el desempeño de funciones propias de funcionarios de carrera.",
        "Para cubrir vacantes de personal laboral.",
        "En cualquier caso si no hay oposición convocada."
      ],
      "correcta": 1,
      "justificacion": "El artículo 10.1 del TREBEP establece taxativamente los supuestos de nombramiento de funcionarios interinos: existencia de vacantes, sustitución transitoria, ejecución de programas temporales o exceso de tareas.",
      "referencia": "Art. 10.1 TREBEP"
    },
    {
      "id": "2200-11",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "La carrera profesional horizontal de los funcionarios consiste en:",
      "opciones": [
        "El ascenso en el escalafón por antigüedad.",
        "La progresión de grado, categoría, escalón u otros conceptos análogos sin necesidad de cambiar de puesto.",
        "El acceso a puestos de trabajo de nivel superior.",
        "La acumulación de méritos para el concurso de traslados."
      ],
      "correcta": 1,
      "justificacion": "El artículo 17 del TREBEP define la carrera horizontal como la progresión de grado, categoría, escalón u otros conceptos análogos sin necesidad de cambiar de puesto de trabajo.",
      "referencia": "Art. 17 TREBEP"
    },
    {
      "id": "2200-12",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "El sistema de provisión de puestos de trabajo de los funcionarios de carrera son:",
      "opciones": [
        "El concurso y la libre designación.",
        "Solo el concurso.",
        "El concurso de méritos y el concurso-oposición.",
        "La libre designación y la adscripción provisional."
      ],
      "correcta": 0,
      "justificacion": "El artículo 78 del TREBEP establece el concurso como sistema ordinario de provisión y la libre designación como sistema excepcional.",
      "referencia": "Art. 78 TREBEP"
    },
    {
      "id": "2200-13",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "¿Cuál de las siguientes es una situación administrativa de los funcionarios de carrera?",
      "opciones": [
        "Activo, excedencia voluntaria, excedencia forzosa, suspensión de funciones y servicio en otras Administraciones.",
        "Activo, interino, contratado y eventual.",
        "Activo, en prácticas y provisional.",
        "Activo, en reserva y en expectativa."
      ],
      "correcta": 0,
      "justificacion": "El artículo 85 del TREBEP enumera las situaciones administrativas: servicio activo, servicios especiales, servicio en otras AAPP, excedencia (voluntaria/forzosa/por cuidado) y suspensión de funciones.",
      "referencia": "Art. 85 TREBEP"
    },
    {
      "id": "2200-14",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "El funcionario en situación de 'servicios especiales' tiene derecho a:",
      "opciones": [
        "Percibir las retribuciones de su destino, pero no las del cargo que ocupe.",
        "Cómputo del tiempo a efectos de antigüedad, trienios y derechos en el Cuerpo de origen, y reserva del puesto de trabajo.",
        "La jubilación anticipada.",
        "Percibir las retribuciones de ambos puestos simultáneamente."
      ],
      "correcta": 1,
      "justificacion": "El artículo 87 establece que quienes pasen a servicios especiales tienen reserva del puesto y cómputo del tiempo a efectos de trienios, carrera y derechos pasivos.",
      "referencia": "Art. 87 TREBEP"
    },
    {
      "id": "2200-15",
      "tema": "2200",
      "nivel": "bronce",
      "enunciado": "El permiso por nacimiento de hijo para el otro progenitor (antiguo permiso de paternidad) tiene una duración de:",
      "opciones": [
        "2 semanas.",
        "4 semanas.",
        "16 semanas.",
        "20 semanas."
      ],
      "correcta": 2,
      "justificacion": "El artículo 49.b) del TREBEP, tras la reforma de igualdad de permisos parentales, reconoce 16 semanas de permiso por nacimiento al otro progenitor.",
      "referencia": "Art. 49.b) TREBEP"
    },
    {
      "id": "2200-16",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "¿Cuántos días de asuntos propios (o particulares) tienen los funcionarios al año, con carácter general?",
      "opciones": [
        "3 días.",
        "5 días.",
        "6 días.",
        "10 días."
      ],
      "correcta": 2,
      "justificacion": "El artículo 48.k) reconoce a los funcionarios 6 días de permiso por asuntos particulares al año, sin justificación.",
      "referencia": "Art. 48.k) TREBEP"
    },
    {
      "id": "2200-17",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "La jornada general de trabajo de los empleados públicos es de:",
      "opciones": [
        "35 horas semanales.",
        "37,5 horas semanales como mínimo.",
        "38 horas semanales.",
        "40 horas semanales."
      ],
      "correcta": 1,
      "justificacion": "El artículo 47.2 del TREBEP (modificado en 2023) establece que la jornada de trabajo de los funcionarios de la AGE será, con carácter general, de 37,5 horas semanales de trabajo efectivo en cómputo anual.",
      "referencia": "Art. 47 TREBEP"
    },
    {
      "id": "2200-18",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "Los funcionarios tienen derecho a vacaciones anuales de:",
      "opciones": [
        "22 días hábiles al año.",
        "30 días naturales al año.",
        "Un mes natural al año o los días que proporcionalmente correspondan.",
        "22 días laborables al año."
      ],
      "correcta": 2,
      "justificacion": "El artículo 50 del TREBEP reconoce el derecho a disfrutar de vacaciones retribuidas de, al menos, 22 días hábiles anuales (equivalente a un mes).",
      "referencia": "Art. 50 TREBEP"
    },
    {
      "id": "2200-19",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "El derecho a la negociación colectiva de los funcionarios públicos se ejerce principalmente a través de:",
      "opciones": [
        "Los sindicatos más representativos exclusivamente.",
        "Las Mesas de Negociación.",
        "El Consejo de Ministros.",
        "Los Comités de Empresa."
      ],
      "correcta": 1,
      "justificacion": "El artículo 33 del TREBEP reconoce el derecho a la negociación colectiva de los funcionarios, que se ejercerá mediante las Mesas de Negociación.",
      "referencia": "Art. 33 TREBEP"
    },
    {
      "id": "2200-20",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "¿Pueden los empleados públicos ejercer el derecho de huelga?",
      "opciones": [
        "No, les está prohibido.",
        "Sí, en igualdad de condiciones que los trabajadores privados.",
        "Sí, pero con los límites derivados de la garantía de los servicios esenciales.",
        "Solo los funcionarios de los grupos C y E."
      ],
      "correcta": 2,
      "justificacion": "El artículo 15.d) del TREBEP reconoce el derecho de huelga a los empleados públicos, con las garantías para el mantenimiento de los servicios esenciales.",
      "referencia": "Art. 15.d) TREBEP"
    },
    {
      "id": "2200-21",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "Las retribuciones de los funcionarios públicos se dividen en:",
      "opciones": [
        "Sueldo base y pagas extras.",
        "Retribuciones básicas (sueldo, trienios y pagas extra) y retribuciones complementarias.",
        "Sueldo, complementos y dietas.",
        "Retribuciones fijas y variables."
      ],
      "correcta": 1,
      "justificacion": "El artículo 22 del TREBEP establece que las retribuciones básicas son el sueldo (por subgrupo), los trienios y las pagas extraordinarias; el resto son complementarias.",
      "referencia": "Art. 22-24 TREBEP"
    },
    {
      "id": "2200-22",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "Los trienios son una retribución básica que consiste en:",
      "opciones": [
        "Una cantidad igual para todos los grupos.",
        "Una cantidad por cada tres años de servicios, cuya cuantía varía según el subgrupo o grupo de clasificación.",
        "Un complemento mensual por antigüedad superior a 5 años.",
        "Un porcentaje del sueldo base por cada año de servicio."
      ],
      "correcta": 1,
      "justificacion": "El artículo 23.b) establece los trienios como cantidades iguales para cada Subgrupo por cada 3 años de servicios en la Administración.",
      "referencia": "Art. 23.b) TREBEP"
    },
    {
      "id": "2200-23",
      "tema": "2200",
      "nivel": "bronce",
      "enunciado": "¿Cuántas pagas extraordinarias reciben al año los funcionarios públicos?",
      "opciones": [
        "Una al año.",
        "Dos al año.",
        "Tres al año.",
        "Una por trimestre."
      ],
      "correcta": 1,
      "justificacion": "El artículo 22.2 del TREBEP reconoce dos pagas extraordinarias al año, normalmente en junio y diciembre.",
      "referencia": "Art. 22.2 TREBEP"
    },
    {
      "id": "2200-24",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "El código de conducta de los empleados públicos recogido en el TREBEP incluye:",
      "opciones": [
        "Solo principios éticos.",
        "Principios éticos y principios de conducta.",
        "Exclusivamente obligaciones de asistencia al puesto.",
        "Solo el deber de guardar secreto profesional."
      ],
      "correcta": 1,
      "justificacion": "El TREBEP (arts. 52 a 54) distingue entre principios éticos (art. 53) y principios de conducta (art. 54), que juntos conforman el código de conducta.",
      "referencia": "Arts. 52-54 TREBEP"
    },
    {
      "id": "2200-25",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "Las faltas disciplinarias de los funcionarios se clasifican en:",
      "opciones": [
        "Leves, graves y muy graves.",
        "Simples y calificadas.",
        "Leves y graves.",
        "Ordinarias y extraordinarias."
      ],
      "correcta": 0,
      "justificacion": "El artículo 93 del TREBEP clasifica las faltas en leves, graves y muy graves, con el principio de tipicidad desarrollado por las leyes de cada Administración.",
      "referencia": "Art. 93 TREBEP"
    },
    {
      "id": "2200-26",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "¿Cuál es la sanción más grave que puede imponerse a un funcionario?",
      "opciones": [
        "La suspensión de funciones.",
        "La inhabilitación para acceso a la función pública.",
        "La separación del servicio.",
        "La traslación forzosa."
      ],
      "correcta": 2,
      "justificacion": "El artículo 96 establece la separación del servicio (que implica la pérdida de la condición de funcionario) como la sanción disciplinaria más grave.",
      "referencia": "Art. 96 TREBEP"
    },
    {
      "id": "2200-27",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "La prescripción de las faltas muy graves de los funcionarios públicos es de:",
      "opciones": [
        "1 año.",
        "2 años.",
        "3 años.",
        "6 años."
      ],
      "correcta": 2,
      "justificacion": "El artículo 97 del TREBEP fija la prescripción de las faltas muy graves en 3 años, las graves en 2 años y las leves en 6 meses.",
      "referencia": "Art. 97 TREBEP"
    },
    {
      "id": "2200-28",
      "tema": "2200",
      "nivel": "bronce",
      "enunciado": "¿Cuál es el plazo de prescripción de las sanciones impuestas por faltas muy graves?",
      "opciones": [
        "1 año.",
        "2 años.",
        "3 años.",
        "5 años."
      ],
      "correcta": 2,
      "justificacion": "El artículo 97.2 fija la prescripción de las sanciones de las faltas muy graves en 3 años, las graves en 2 años y las leves en 1 año.",
      "referencia": "Art. 97.2 TREBEP"
    },
    {
      "id": "2200-29",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "El régimen de incompatibilidades del personal al servicio de las Administraciones Públicas se regula en:",
      "opciones": [
        "El propio TREBEP exclusivamente.",
        "La Ley 53/1984, de 26 de diciembre, de Incompatibilidades del personal al servicio de las AAPP.",
        "El Código Civil.",
        "Las leyes de función pública de cada Comunidad Autónoma."
      ],
      "correcta": 1,
      "justificacion": "La Ley 53/1984, de incompatibilidades, es la norma básica en esta materia, complementada por la normativa de desarrollo de cada Administración.",
      "referencia": "Ley 53/1984"
    },
    {
      "id": "2200-30",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "Con carácter general, un funcionario público puede realizar actividades privadas siempre que:",
      "opciones": [
        "No exista conflicto de intereses y se reconozca compatibilidad por la autoridad competente.",
        "No le ocupe más de 4 horas semanales.",
        "Sean actividades artísticas o literarias sin limitación.",
        "No superen el 30% de sus retribuciones públicas."
      ],
      "correcta": 0,
      "justificacion": "La Ley 53/1984 permite la compatibilidad con actividades privadas, previa declaración de compatibilidad, siempre que no haya conflicto de intereses ni perjuicio al servicio.",
      "referencia": "Art. 11 Ley 53/1984"
    },
    {
      "id": "2200-31",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "En Canarias, la Ley de Función Pública de la Comunidad Autónoma vigente es:",
      "opciones": [
        "Ley 2/1987, de 30 de marzo.",
        "Ley 7/2007, de 12 de abril.",
        "Decreto Legislativo 1/1990.",
        "Ley 4/2021, de 28 de diciembre, de Función Pública de la CAC."
      ],
      "correcta": 3,
      "justificacion": "La Ley 4/2021, de 28 de diciembre, es la Ley de la Función Pública de la Comunidad Autónoma de Canarias actualmente vigente.",
      "referencia": "Ley 4/2021 CAC"
    },
    {
      "id": "2200-32",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "La Relación de Puestos de Trabajo (RPT) es el instrumento técnico a través del cual:",
      "opciones": [
        "Se selecciona al personal de nuevo ingreso.",
        "Las Administraciones Públicas ordenan el personal a su servicio, relacionando los puestos, su clasificación y retribuciones.",
        "Se aprueba la plantilla de personal eventual.",
        "Se realiza el concurso de traslados."
      ],
      "correcta": 1,
      "justificacion": "El artículo 74 del TREBEP establece que las AAPP estructurarán su organización a través de relaciones de puestos de trabajo u otros instrumentos organizativos similares.",
      "referencia": "Art. 74 TREBEP"
    },
    {
      "id": "2200-33",
      "tema": "2200",
      "nivel": "bronce",
      "enunciado": "¿Qué es el 'grado personal' del funcionario?",
      "opciones": [
        "El nivel del puesto de trabajo que ocupa.",
        "La posición que el funcionario consolida en la carrera profesional horizontal.",
        "El título académico con que accedió a la función pública.",
        "El escalón salarial dentro de su subgrupo."
      ],
      "correcta": 1,
      "justificacion": "El grado personal es la posición consolidada por el funcionario dentro del intervalo de niveles correspondiente a su cuerpo o escala, fruto de su carrera administrativa.",
      "referencia": "Art. 21 RD 364/1995 / TREBEP"
    },
    {
      "id": "2200-34",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "El complemento de destino de los funcionarios es una retribución complementaria que retribuye:",
      "opciones": [
        "El nivel del puesto de trabajo desempeñado.",
        "Las condiciones especiales del puesto (penosidad, peligrosidad, nocturnidad).",
        "El rendimiento y la productividad individual.",
        "Las horas extraordinarias realizadas."
      ],
      "correcta": 0,
      "justificacion": "El complemento de destino retribuye el nivel del puesto de trabajo asignado. Los niveles oscilan entre 1 y 30.",
      "referencia": "Art. 24.b) TREBEP"
    },
    {
      "id": "2200-35",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "El complemento específico retribuye:",
      "opciones": [
        "El nivel del puesto de trabajo.",
        "La antigüedad del funcionario.",
        "Las condiciones particulares del puesto: especial dificultad técnica, responsabilidad, peligrosidad, dedicación, incompatibilidad.",
        "La productividad de cada funcionario."
      ],
      "correcta": 2,
      "justificacion": "El artículo 24.c) del TREBEP establece que el complemento específico retribuye las condiciones particulares de algunos puestos (dificultad técnica, responsabilidad, peligrosidad, incompatibilidad, etc.).",
      "referencia": "Art. 24.c) TREBEP"
    },
    {
      "id": "2200-36",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "¿Cuál es la edad ordinaria de jubilación forzosa de los funcionarios públicos en España?",
      "opciones": [
        "60 años.",
        "63 años.",
        "65 años.",
        "67 años."
      ],
      "correcta": 3,
      "justificacion": "Con carácter general, la jubilación forzosa de los funcionarios se produce a los 67 años de edad (o a los 65 si se acreditan 38 años y 6 meses cotizados).",
      "referencia": "Art. 67 TREBEP / LGSS"
    },
    {
      "id": "2200-37",
      "tema": "2200",
      "nivel": "bronce",
      "enunciado": "La excedencia voluntaria por interés particular del funcionario se puede solicitar cuando:",
      "opciones": [
        "Se lleva 1 año en activo.",
        "Se llevan al menos 5 años de servicios efectivos.",
        "Se llevan al menos 2 años en el mismo puesto.",
        "En cualquier momento sin requisito de antigüedad."
      ],
      "correcta": 1,
      "justificacion": "El artículo 89.1 del TREBEP exige para solicitar la excedencia voluntaria por interés particular haber prestado servicios efectivos en cualquier Administración durante un mínimo de 5 años.",
      "referencia": "Art. 89.1 TREBEP"
    },
    {
      "id": "2200-38",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "¿Cuál es la duración mínima de la excedencia voluntaria por interés particular?",
      "opciones": [
        "6 meses.",
        "1 año.",
        "2 años.",
        "4 años."
      ],
      "correcta": 2,
      "justificacion": "El artículo 89.1 establece que la excedencia voluntaria por interés particular no podrá declararse por un período inferior a 2 años.",
      "referencia": "Art. 89.1 TREBEP"
    },
    {
      "id": "2200-39",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "¿Cuánto tiempo puede durar la suspensión de funciones firme como sanción disciplinaria?",
      "opciones": [
        "De 1 a 5 años.",
        "De 1 día a 6 años.",
        "De 3 meses a 6 años.",
        "De 6 meses a 6 años."
      ],
      "correcta": 2,
      "justificacion": "El artículo 96.1.c) del TREBEP establece que la suspensión firme de funciones oscilará entre 3 meses y 6 años.",
      "referencia": "Art. 96.1.c) TREBEP"
    },
    {
      "id": "2200-40",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "¿Qué organismo es el encargado de coordinar la política de personal de las Administraciones Públicas a nivel estatal?",
      "opciones": [
        "El Ministerio de Trabajo.",
        "La Comisión de Coordinación del Empleo Público.",
        "El Consejo de Estado.",
        "El Tribunal de Cuentas."
      ],
      "correcta": 1,
      "justificacion": "La Comisión de Coordinación del Empleo Público (art. 6 TREBEP) coordina la política de personal entre el Estado, las CCAA y las entidades locales.",
      "referencia": "Art. 6 TREBEP"
    },
    {
      "id": "2200-41",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "En la Administración de la CAC, ¿qué cuerpo de funcionarios corresponde al Subgrupo C1?",
      "opciones": [
        "Cuerpo Superior de Administradores Generales.",
        "Cuerpo de Gestión de la Administración General.",
        "Cuerpo Administrativo de la Administración General.",
        "Cuerpo Auxiliar de la Administración General."
      ],
      "correcta": 2,
      "justificacion": "En la CAC, el Cuerpo Administrativo de la Administración General (Auxiliar Administrativo en otras AAPP) pertenece al Subgrupo C1, requiriéndose el título de Bachiller.",
      "referencia": "Clasificación Cuerpos CAC"
    },
    {
      "id": "2200-42",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "¿Cuál es el cuerpo de funcionarios del Subgrupo C2 en la Administración General de Canarias?",
      "opciones": [
        "Cuerpo Superior.",
        "Cuerpo de Gestión.",
        "Cuerpo Administrativo.",
        "Cuerpo Auxiliar de la Administración General."
      ],
      "correcta": 3,
      "justificacion": "El Cuerpo Auxiliar de la Administración General de la CAC pertenece al Subgrupo C2, requiriéndose el título de Graduado en ESO.",
      "referencia": "Clasificación Cuerpos CAC / Ley 4/2021"
    },
    {
      "id": "2200-43",
      "tema": "2200",
      "nivel": "bronce",
      "enunciado": "¿Qué se entiende por 'oferta de empleo público'?",
      "opciones": [
        "El documento que convoca cada proceso selectivo.",
        "El instrumento de planificación que recoge las necesidades de recursos humanos de la Administración con dotación presupuestaria para cubrir mediante procesos selectivos.",
        "La lista de funcionarios disponibles para adscripción.",
        "El catálogo de plazas de libre designación."
      ],
      "correcta": 1,
      "justificacion": "El artículo 70 del TREBEP define la OEP como instrumento de planificación que publica las plazas con necesidad de cobertura, abriendo el proceso de selección.",
      "referencia": "Art. 70 TREBEP"
    },
    {
      "id": "2200-44",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "Las plazas incluidas en la OEP deben convocarse en el plazo improrrogable de:",
      "opciones": [
        "6 meses.",
        "1 año desde su aprobación.",
        "2 años desde su aprobación.",
        "3 años desde su aprobación."
      ],
      "correcta": 1,
      "justificacion": "El artículo 70.1 del TREBEP establece que las plazas incluidas en la OEP deben ser convocadas en el plazo improrrogable de 3 años.",
      "referencia": "Art. 70.1 TREBEP"
    },
    {
      "id": "2200-45",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "Las administraciones pueden convocar procesos de estabilización de empleo temporal. ¿Cuál fue el plazo general fijado por la Ley 20/2021 para resolverlos?",
      "opciones": [
        "Antes del 31 de diciembre de 2022.",
        "Antes del 31 de diciembre de 2024.",
        "Antes del 31 de diciembre de 2025.",
        "Antes del 31 de diciembre de 2027."
      ],
      "correcta": 1,
      "justificacion": "La Ley 20/2021 de medidas urgentes para la reducción de la temporalidad obligó a resolver los procesos de estabilización antes del 31 de diciembre de 2024.",
      "referencia": "Ley 20/2021"
    },
    {
      "id": "2200-46",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "El derecho de reunión de los empleados públicos en los centros de trabajo:",
      "opciones": [
        "Está prohibido durante el horario laboral.",
        "Puede ejercerse en locales adecuados cedidos por la Administración en los términos que ésta fije.",
        "Solo lo pueden convocar los sindicatos más representativos.",
        "Requiere autorización judicial previa."
      ],
      "correcta": 1,
      "justificacion": "El artículo 46 del TREBEP reconoce a los empleados públicos el derecho de reunión, que podrán ejercer en los locales de la Administración.",
      "referencia": "Art. 46 TREBEP"
    },
    {
      "id": "2200-47",
      "tema": "2200",
      "nivel": "bronce",
      "enunciado": "El permiso de maternidad del personal funcionario tiene una duración de:",
      "opciones": [
        "12 semanas.",
        "16 semanas.",
        "20 semanas.",
        "24 semanas."
      ],
      "correcta": 1,
      "justificacion": "El artículo 49.a) del TREBEP reconoce el permiso por parto con una duración de 16 semanas, ampliable en caso de parto múltiple.",
      "referencia": "Art. 49.a) TREBEP"
    },
    {
      "id": "2200-48",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "¿Qué porcentaje de las plazas convocadas en la AGE debe reservarse para personas con discapacidad?",
      "opciones": [
        "El 5%.",
        "El 7%.",
        "El 10%.",
        "El 15%."
      ],
      "correcta": 1,
      "justificacion": "El artículo 59.1 del TREBEP establece la reserva del 7% de las plazas convocadas en cada convocatoria para personas con discapacidad (mínimo del 2% para discapacidad intelectual).",
      "referencia": "Art. 59 TREBEP"
    },
    {
      "id": "2200-49",
      "tema": "2200",
      "nivel": "oro",
      "enunciado": "El principio de evaluación del desempeño está recogido en el TREBEP. ¿Qué implica?",
      "opciones": [
        "La realización de exámenes anuales a todos los funcionarios.",
        "La medición y valoración de la conducta profesional y el logro de resultados, pudiendo afectar a la carrera, formación o retribuciones.",
        "La evaluación anual de los cargos electos.",
        "El control de absentismo laboral únicamente."
      ],
      "correcta": 1,
      "justificacion": "El artículo 20 del TREBEP establece la evaluación del desempeño como la medición y valoración de la conducta profesional y el rendimiento, vinculándola a la carrera, formación y retribuciones complementarias.",
      "referencia": "Art. 20 TREBEP"
    },
    {
      "id": "2200-50",
      "tema": "2200",
      "nivel": "plata",
      "enunciado": "¿Cuál es la causa de pérdida de la condición de funcionario de carrera?",
      "opciones": [
        "La excedencia voluntaria.",
        "La renuncia voluntaria, pérdida de la nacionalidad, jubilación, sanción de separación del servicio o pena de inhabilitación absoluta o especial.",
        "La situación de servicios especiales.",
        "La suspensión provisional de funciones."
      ],
      "correcta": 1,
      "justificacion": "El artículo 63 del TREBEP enumera las causas de pérdida de la condición de funcionario: renuncia, pérdida de nacionalidad, jubilación total, sanción de separación del servicio o pena de inhabilitación.",
      "referencia": "Art. 63 TREBEP"
    }
  ]
};

fs.writeFileSync(path.join(__dirname, 'src/data/tema2200.json'), JSON.stringify(tema2200, null, 2), 'utf8');
console.log('tema2200.json creado con 50 preguntas.');
