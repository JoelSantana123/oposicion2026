const fs = require('fs');
const path = require('path');

const tema0680 = {
  "tema_id": "0680",
  "tema_nombre": "Ley 7/2015 de Municipios de Canarias",
  "preguntas": [
    {
      "id": "0680-01",
      "tema": "0680",
      "nivel": "bronce",
      "enunciado": "Según el artículo 2 de la Ley 7/2015 de Municipios de Canarias, ¿cuál de las siguientes entidades forma parte de su ámbito de aplicación como entidad de gestión desconcentrada?",
      "opciones": [
        "La isla de Lobos.",
        "La isla de La Graciosa.",
        "Los Cabildos Insulares.",
        "Las Comarcas."
      ],
      "correcta": 1,
      "justificacion": "El artículo 2.1.d) establece expresamente que la ley será aplicable a 'La entidad de gestión desconcentrada de la isla de La Graciosa'.",
      "referencia": "Art. 2.1.d) Ley 7/2015"
    },
    {
      "id": "0680-02",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "¿Qué mayoría se exige para la aprobación de la Ley 7/2015 de Municipios de Canarias en el Parlamento de Canarias?",
      "opciones": [
        "Mayoría cualificada.",
        "Mayoría absoluta.",
        "Unanimidad.",
        "Mayoría simple."
      ],
      "correcta": 3,
      "justificacion": "Es una ley ordinaria autonómica (Ley 7/2015), por lo tanto, se aprueba por mayoría simple. No confundir con la Ley de Cabildos (8/2015) que sí requiere mayoría absoluta.",
      "referencia": "Marco normativo (Notas iniciales)"
    },
    {
      "id": "0680-03",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "La atribución de competencias a los municipios que hagan las leyes sectoriales canarias se ajustará, entre otros, al principio de:",
      "opciones": [
        "Mínima interferencia.",
        "Suficiencia administrativa.",
        "Máxima proximidad.",
        "Centralización competencial."
      ],
      "correcta": 2,
      "justificacion": "El artículo 5.1 establece los principios de: autonomía municipal, máxima proximidad, igualdad en el acceso a servicios y suficiencia financiera y estabilidad presupuestaria.",
      "referencia": "Art. 5.1 Ley 7/2015"
    },
    {
      "id": "0680-04",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "Las competencias municipales pueden ser:",
      "opciones": [
        "Propias, delegadas y transferidas.",
        "Exclusivas, compartidas y concurrentes.",
        "Propias, delegadas y otras que promuevan actividades que contribuyan a satisfacer necesidades vecinales.",
        "Básicas, complementarias y accesorias."
      ],
      "correcta": 2,
      "justificacion": "El artículo 10 divide las competencias en propias (10.1), delegadas (10.2) y otras que promuevan actividades y servicios para satisfacer aspiraciones vecinales (10.3).",
      "referencia": "Art. 10 Ley 7/2015"
    },
    {
      "id": "0680-05",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "Para que prospere la iniciativa de segregación de núcleos de población diferenciada, ¿cuántos habitantes debe tener como mínimo el núcleo a segregar?",
      "opciones": [
        "Más de 2.000 habitantes.",
        "Más de 3.000 habitantes.",
        "Más de 5.000 habitantes.",
        "Más de 10.000 habitantes."
      ],
      "correcta": 2,
      "justificacion": "El artículo 13.2 establece que solo podrá prosperar la segregación de núcleos de población diferenciada de más de 5.000 habitantes.",
      "referencia": "Art. 13.2 Ley 7/2015"
    },
    {
      "id": "0680-06",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "La autorización para la creación de un nuevo municipio en Canarias por segregación o fusión corresponde a:",
      "opciones": [
        "El Parlamento de Canarias.",
        "El Gobierno de Canarias.",
        "El Cabildo Insular competente.",
        "La Administración General del Estado."
      ],
      "correcta": 2,
      "justificacion": "El artículo 14.4 establece expresamente que la autorización para la creación del nuevo municipio corresponderá al Cabildo insular competente.",
      "referencia": "Art. 14.4 Ley 7/2015"
    },
    {
      "id": "0680-07",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "La resolución de las solicitudes de acceso a la información pública formuladas por los ciudadanos corresponde a:",
      "opciones": [
        "El Pleno del Ayuntamiento.",
        "La Junta de Gobierno Local.",
        "El Alcalde, sin perjuicio de su delegación.",
        "El Secretario General del Ayuntamiento."
      ],
      "correcta": 2,
      "justificacion": "El artículo 22.2 atribuye al Alcalde la competencia para resolver las solicitudes de acceso a la información pública.",
      "referencia": "Art. 22.2 Ley 7/2015"
    },
    {
      "id": "0680-08",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "¿Qué plazo máximo establece la Ley 7/2015 para resolver las solicitudes de información que formulen los miembros de la corporación (concejales)?",
      "opciones": [
        "5 días hábiles.",
        "5 días naturales.",
        "10 días hábiles.",
        "15 días naturales."
      ],
      "correcta": 1,
      "justificacion": "El artículo 25.2 fija un plazo no superior a 5 días naturales para resolver la solicitud de información de los miembros de los Ayuntamientos.",
      "referencia": "Art. 25.2 Ley 7/2015"
    },
    {
      "id": "0680-09",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "Pasado el plazo para resolver la solicitud de información de un Concejal sin resolución expresa denegatoria, se entenderá:",
      "opciones": [
        "Desestimada por silencio negativo.",
        "Estimada por silencio positivo.",
        "Interrumpido el procedimiento.",
        "Elevada la petición al Pleno."
      ],
      "correcta": 1,
      "justificacion": "El artículo 25.2 dispone que pasado el plazo se entenderá estimada por silencio, debiendo la Secretaría facilitarle el acceso directo al expediente.",
      "referencia": "Art. 25.2 Ley 7/2015"
    },
    {
      "id": "0680-10",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "¿Cuál es el número mínimo de Concejales necesarios para constituir un Grupo Político Municipal?",
      "opciones": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correcta": 1,
      "justificacion": "El artículo 27.1 establece que los Concejales, en número no inferior a 3, podrán constituirse en grupos políticos municipales.",
      "referencia": "Art. 27.1 Ley 7/2015"
    },
    {
      "id": "0680-11",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "Los Concejales que abandonen o sean expulsados del grupo político de su formación electoral tendrán la consideración de:",
      "opciones": [
        "Concejales independientes.",
        "Concejales no adscritos (tránsfugas).",
        "Concejales del Grupo Mixto.",
        "Concejales inhabilitados."
      ],
      "correcta": 1,
      "justificacion": "El artículo 28.1 dispone que tendrán la consideración de Concejales no adscritos.",
      "referencia": "Art. 28.1 Ley 7/2015"
    },
    {
      "id": "0680-12",
      "tema": "0680",
      "nivel": "bronce",
      "enunciado": "Según el artículo 29 (Fuentes), el orden jerárquico que rige la organización de los municipios canarios empieza por:",
      "opciones": [
        "La Constitución Española.",
        "La Ley 7/2015 de Municipios de Canarias.",
        "La legislación básica en materia de régimen local.",
        "Los Reglamentos orgánicos municipales."
      ],
      "correcta": 2,
      "justificacion": "El art. 29 enumera: 1º Legislación básica estatal; 2º La presente ley (Ley 7/2015); 3º Reglamentos orgánicos de los Ayuntamientos.",
      "referencia": "Art. 29 Ley 7/2015"
    },
    {
      "id": "0680-13",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "¿Cuál de las siguientes es una competencia indelegable del Alcalde?",
      "opciones": [
        "Presidir el Pleno.",
        "La jefatura de la Policía Local.",
        "La resolución de recursos de reposición.",
        "Firmar los convenios acordados por el Pleno."
      ],
      "correcta": 3,
      "justificacion": "El artículo 31.2 recoge las competencias que son indelegables, entre ellas la firma de convenios (letra e), dictar bandos, etc. (Otras sí se pueden delegar, hay que fijarse bien en la lista de indelegables).",
      "referencia": "Art. 31.2 Ley 7/2015"
    },
    {
      "id": "0680-14",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "Los actos dictados por delegación del Alcalde adoptarán la forma de:",
      "opciones": [
        "Resolución.",
        "Decreto.",
        "Bando.",
        "Acuerdo."
      ],
      "correcta": 1,
      "justificacion": "El artículo 32.5 establece que los actos dictados por delegación del Alcalde adoptarán la forma de decreto en el que se señalará expresamente tal circunstancia.",
      "referencia": "Art. 32.5 Ley 7/2015"
    },
    {
      "id": "0680-15",
      "tema": "0680",
      "nivel": "bronce",
      "enunciado": "¿Qué tratamiento protocolario corresponde a los Alcaldes de las capitales insulares canarias?",
      "opciones": [
        "Excelencia.",
        "Ilustrísima.",
        "Señoría.",
        "Majestad."
      ],
      "correcta": 1,
      "justificacion": "El artículo 34.1 otorga el tratamiento de 'ilustrísima' a los Alcaldes de capitales insulares (sin perjuicio del de 'Excelencia' para municipios de gran población por ley básica).",
      "referencia": "Art. 34.1 Ley 7/2015"
    },
    {
      "id": "0680-16",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "La Junta de Portavoces, si sus funciones deben materializarse en forma de acuerdo, podrá prever en su reglamento el sistema de:",
      "opciones": [
        "Voto por mayoría cualificada.",
        "Voto ponderado.",
        "Voto por unanimidad.",
        "Voto secreto."
      ],
      "correcta": 1,
      "justificacion": "El artículo 38.1 permite prever el voto ponderado cuando sus funciones deban materializarse en forma de acuerdo.",
      "referencia": "Art. 38.1 Ley 7/2015"
    },
    {
      "id": "0680-17",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "¿Cuál es el número máximo de miembros de una Comisión Informativa?",
      "opciones": [
        "La mitad del número legal de miembros de la corporación.",
        "Un tercio del número legal de miembros de la corporación.",
        "Un cuarto del número legal de miembros de la corporación.",
        "Un quinto del número legal de miembros de la corporación."
      ],
      "correcta": 1,
      "justificacion": "El artículo 43.2 dispone que estarán compuestas por un número de Concejales no superior a un tercio del número legal de miembros. Se añadirá uno más si el número fuese par.",
      "referencia": "Art. 43.2 Ley 7/2015"
    },
    {
      "id": "0680-18",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "¿En qué municipios es de existencia preceptiva la creación de Consejos de Barrio y Consejos de Sector?",
      "opciones": [
        "En todos los municipios.",
        "En los municipios de más de 20.000 habitantes.",
        "En los municipios de más de 50.000 habitantes.",
        "Sólo en los municipios de gran población."
      ],
      "correcta": 2,
      "justificacion": "El artículo 44.1.b establece que son preceptivos en los municipios de más de 50.000 habitantes que no estén sujetos al régimen de gran población.",
      "referencia": "Art. 44.1.b Ley 7/2015"
    },
    {
      "id": "0680-19",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "¿A qué órgano de gestión administrativa corresponde dictar instrucciones y órdenes de servicio para la homogenización de criterios, especialmente en procedimientos administrativos?",
      "opciones": [
        "A la Intervención General.",
        "A la Tesorería.",
        "A la Secretaría General.",
        "Al Alcalde."
      ],
      "correcta": 2,
      "justificacion": "El artículo 55.1.e) atribuye a la Secretaría General la función de dictar instrucciones y órdenes de servicio dirigidas a las Unidades administrativas.",
      "referencia": "Art. 55.1.e) Ley 7/2015"
    },
    {
      "id": "0680-20",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "La propuesta al órgano competente de la extinción de derechos liquidados por prescripción corresponde a:",
      "opciones": [
        "La Secretaría General.",
        "La Intervención General.",
        "La Tesorería.",
        "La Junta de Gobierno Local."
      ],
      "correcta": 2,
      "justificacion": "El artículo 57.a) otorga a la Tesorería la función de proponer la extinción de derechos liquidados por prescripción.",
      "referencia": "Art. 57.a) Ley 7/2015"
    },
    {
      "id": "0680-21",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "La creación de Áreas metropolitanas se realiza mediante:",
      "opciones": [
        "Ley del Parlamento de Canarias.",
        "Decreto del Gobierno de Canarias.",
        "Acuerdo del Cabildo Insular.",
        "Acuerdo de los Plenos de los Ayuntamientos afectados."
      ],
      "correcta": 0,
      "justificacion": "El artículo 65.1 establece que 'Mediante ley del Parlamento de Canarias podrán constituirse Áreas metropolitanas...'.",
      "referencia": "Art. 65.1 Ley 7/2015"
    },
    {
      "id": "0680-22",
      "tema": "0680",
      "nivel": "bronce",
      "enunciado": "Las entidades públicas empresariales municipales, cuando sus fines sean meramente comerciales, industriales o financieros:",
      "opciones": [
        "Dispondrán de todas las potestades públicas.",
        "Solo dispondrán de potestad sancionadora.",
        "No dispondrán de potestades públicas.",
        "Dispondrán de potestades tributarias y expropiatorias."
      ],
      "correcta": 2,
      "justificacion": "El artículo 71.2 establece que cuando sus fines sean meramente comerciales, industriales o financieros, no dispondrán de potestades públicas.",
      "referencia": "Art. 71.2 Ley 7/2015"
    },
    {
      "id": "0680-23",
      "tema": "0680",
      "nivel": "bronce",
      "enunciado": "¿Qué forma debe adoptar el orden del día en la parte destinada a 'Aprobación de actas de sesiones anteriores'?",
      "opciones": [
        "Parte de control y fiscalización.",
        "Parte declarativa.",
        "Ruegos y preguntas.",
        "Parte decisoria."
      ],
      "correcta": 3,
      "justificacion": "El artículo 88.1 sitúa la aprobación de actas de sesiones anteriores en la 'Parte decisoria'.",
      "referencia": "Art. 88.1 Ley 7/2015"
    },
    {
      "id": "0680-24",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "En materia de responsabilidad patrimonial, salvo que el reglamento orgánico disponga otra cosa, ¿cuándo es competente el Pleno del Ayuntamiento para resolver?",
      "opciones": [
        "Nunca, es siempre competencia exclusiva del Alcalde.",
        "Cuando la indemnización sea superior a 3.000 euros.",
        "Cuando el daño derive de un acuerdo plenario y la indemnización supere los 6.000 euros.",
        "Siempre que haya daños personales graves."
      ],
      "correcta": 2,
      "justificacion": "El artículo 107 señala que el Alcalde resuelve, excepto cuando la lesión derive de un acuerdo plenario y la cuantía sea superior a 6.000 euros, caso en el que resolverá el Pleno.",
      "referencia": "Art. 107 Ley 7/2015"
    },
    {
      "id": "0680-25",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "En ausencia de previsión específica sobre la vacatio legis, las disposiciones de carácter general (ordenanzas) locales entrarán en vigor a los:",
      "opciones": [
        "10 días de su publicación íntegra en el Boletín Oficial de la provincia.",
        "15 días hábiles.",
        "20 días de su publicación íntegra.",
        "Un mes desde su aprobación por el Pleno."
      ],
      "correcta": 2,
      "justificacion": "El artículo 106 establece que transcurrido el plazo que en ella se determine y, en su defecto, a los 20 días de su publicación íntegra.",
      "referencia": "Art. 106 Ley 7/2015"
    },
    {
      "id": "0680-26",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "¿A quién corresponde la imposición de sanciones dentro de los límites legales cuando esa potestad no esté atribuida a otro órgano?",
      "opciones": [
        "Al Pleno.",
        "A la Junta de Gobierno Local.",
        "Al Alcalde.",
        "Al Concejal Delegado de Policía."
      ],
      "correcta": 2,
      "justificacion": "El artículo 31.1.q) atribuye al Alcalde la competencia para imponer sanciones dentro de los límites legales.",
      "referencia": "Art. 31.1.q) Ley 7/2015"
    },
    {
      "id": "0680-27",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "Con respecto a la enajenación de bienes inmuebles patrimoniales, precisará autorización previa de la Comunidad Autónoma cuando su valor supere el:",
      "opciones": [
        "10% de los recursos ordinarios del presupuesto.",
        "20% de los recursos ordinarios del presupuesto.",
        "25% de los recursos ordinarios del presupuesto.",
        "50% de los recursos ordinarios del presupuesto."
      ],
      "correcta": 0,
      "justificacion": "El artículo 128.1.a) establece que requerirá autorización autonómica previa cuando el valor supere el 10% de los recursos ordinarios del presupuesto.",
      "referencia": "Art. 128.1.a) Ley 7/2015"
    },
    {
      "id": "0680-28",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "Por su parte, la constitución, transmisión y gravamen del derecho de superficie precisará autorización previa de la Comunidad Autónoma cuando supere el:",
      "opciones": [
        "10% de los recursos ordinarios.",
        "20% de los recursos ordinarios.",
        "25% de los recursos ordinarios.",
        "50% de los recursos ordinarios."
      ],
      "correcta": 2,
      "justificacion": "El artículo 128.1.c) establece el límite del 25% para el derecho de superficie (frente al 10% para ventas y permutas).",
      "referencia": "Art. 128.1.c) Ley 7/2015"
    },
    {
      "id": "0680-29",
      "tema": "0680",
      "nivel": "bronce",
      "enunciado": "¿Qué recurso procede, con carácter general, contra los actos que agoten la vía administrativa emanados del Ayuntamiento?",
      "opciones": [
        "El recurso de alzada.",
        "El recurso extraordinario de revisión.",
        "El recurso de reposición potestativo.",
        "Ninguno, solo cabe la vía judicial."
      ],
      "correcta": 2,
      "justificacion": "El artículo 123.1.A establece el recurso de reposición potestativo previo al contencioso-administrativo contra los actos que agoten la vía administrativa.",
      "referencia": "Art. 123.1.A Ley 7/2015"
    },
    {
      "id": "0680-30",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "¿Ante quién son recurribles en alzada los actos dictados por los Concejales de Área en ejercicio de competencias desconcentradas?",
      "opciones": [
        "Ante el Pleno.",
        "Ante el Alcalde.",
        "Ante la Junta de Gobierno Local.",
        "No admiten recurso administrativo."
      ],
      "correcta": 1,
      "justificacion": "El artículo 123.2 señala que son recurribles en alzada ante el Alcalde los actos dictados por Concejales de Área en régimen de desconcentración.",
      "referencia": "Art. 123.2 Ley 7/2015"
    },
    {
      "id": "0680-31",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "La ejecución de sanciones pecuniarias (multas) municipales podrá sustituirse por trabajos en beneficio de la comunidad vecinal:",
      "opciones": [
        "Si lo autoriza expresamente el Gobierno de Canarias.",
        "A través de la correspondiente ordenanza municipal.",
        "Solo si se trata de menores de edad infractores.",
        "En ningún caso, está prohibido por la normativa estatal."
      ],
      "correcta": 1,
      "justificacion": "La Disposición adicional decimocuarta habilita a los municipios a posibilitar esta sustitución a través de la correspondiente ordenanza.",
      "referencia": "DA 14ª Ley 7/2015"
    },
    {
      "id": "0680-32",
      "tema": "0680",
      "nivel": "bronce",
      "enunciado": "Si falta el trámite de audiencia en un procedimiento municipal, y dicha omisión no lleva aparejada nulidad, ¿qué sucede?",
      "opciones": [
        "Se archiva el expediente.",
        "Se retrotraerán las actuaciones hasta concederlo.",
        "Se sancionará al instructor del expediente.",
        "Se dará por concedido tácitamente."
      ],
      "correcta": 1,
      "justificacion": "El artículo 127 indica que se retrotraerán las actuaciones hasta concederlo sin que puedan conservarse informes o pruebas ya realizadas.",
      "referencia": "Art. 127 Ley 7/2015"
    },
    {
      "id": "0680-33",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "Los Concejales que hubiesen votado EN CONTRA de los acuerdos plenarios tienen la facultad de:",
      "opciones": [
        "Vetar su publicación inmediata.",
        "Exigir una segunda votación en la siguiente sesión.",
        "Solicitar a la Secretaría que conste en acta la motivación de su voto por escrito.",
        "Suspender la ejecutividad del acuerdo hasta resolución judicial."
      ],
      "correcta": 2,
      "justificacion": "El artículo 120.1 permite a los que voten en contra hacer constar en acta la motivación de su voto, pudiendo entregarla por escrito con posterioridad.",
      "referencia": "Art. 120.1 Ley 7/2015"
    },
    {
      "id": "0680-34",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "Las resoluciones de los Alcaldes, Tenientes de Alcalde y Concejales Delegados tendrán la forma de:",
      "opciones": [
        "Acuerdo.",
        "Bando.",
        "Decreto.",
        "Ordenanza."
      ],
      "correcta": 2,
      "justificacion": "El artículo 112.2 establece explícitamente que las resoluciones de los órganos unipersonales (Alcalde, Tenientes, Delegados) tendrán forma de decreto.",
      "referencia": "Art. 112.2 Ley 7/2015"
    },
    {
      "id": "0680-35",
      "tema": "0680",
      "nivel": "bronce",
      "enunciado": "¿Qué instrumento se utiliza para la participación ciudadana mediante la formulación de programas de necesidades valorados económicamente?",
      "opciones": [
        "Consultas ciudadanas.",
        "Encuestas locales.",
        "Presupuestos participativos.",
        "Iniciativa popular."
      ],
      "correcta": 2,
      "justificacion": "El artículo 17.1.l) y 17.2 regula los presupuestos participativos, permitiendo que los vecinos formulen programas de necesidades valorados económicamente.",
      "referencia": "Art. 17 Ley 7/2015"
    },
    {
      "id": "0680-36",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "En materia tributaria, ¿qué potestad tiene expresamente PROHIBIDA la Ley de Presupuestos Generales del Estado / Autonómica y se traslada conceptualmente a nivel municipal?",
      "opciones": [
        "Modificar tributos existentes.",
        "Crear nuevos tributos ex novo sin amparo en una ley sustantiva.",
        "Bonificar tasas municipales.",
        "Recaudar impuestos en especie."
      ],
      "correcta": 1,
      "justificacion": "De acuerdo con los principios constitucionales (Art. 134.7 CE) referidos también en el temario asociado, la ley de presupuestos no puede crear tributos. A nivel local se requiere ordenanza sobre tributo amparado en ley.",
      "referencia": "Concordancia con Título IX"
    },
    {
      "id": "0680-37",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "¿Pueden los Ayuntamientos canarios admitir el pago en especie de los tributos locales?",
      "opciones": [
        "En ningún caso.",
        "Sí, en los términos y condiciones previstos en la legislación estatal de haciendas locales.",
        "Sólo en los municipios de menos de 5.000 habitantes.",
        "Sólo mediante trabajos en beneficio de la comunidad."
      ],
      "correcta": 1,
      "justificacion": "El artículo 132 (modificado por DL 1/2019) permite a los Ayuntamientos admitir el pago en especie de tributos locales según la legislación estatal.",
      "referencia": "Art. 132 Ley 7/2015"
    },
    {
      "id": "0680-38",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "Si la Intervención Delegada de un Ayuntamiento formula reparos a un gasto, y hay discrepancia, se elevará a:",
      "opciones": [
        "El Alcalde directamente.",
        "El Pleno del Ayuntamiento.",
        "El Tribunal de Cuentas.",
        "La persona titular de la Intervención General."
      ],
      "correcta": 3,
      "justificacion": "El artículo 134.1 indica que la discrepancia se elevará a la persona titular de la Intervención General antes que al Alcalde o al Pleno.",
      "referencia": "Art. 134.1 Ley 7/2015"
    },
    {
      "id": "0680-39",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "En los Ayuntamientos canarios, los reparos formulados por la Intervención General solo tendrán carácter suspensivo cuando:",
      "opciones": [
        "La cuantía exceda del 10% del presupuesto.",
        "El Alcalde así lo determine.",
        "Se funden en causas que prevea la legislación básica o de nulidad de pleno derecho.",
        "Siempre tienen carácter suspensivo."
      ],
      "correcta": 2,
      "justificacion": "El artículo 134.2 establece que los reparos solo tendrán carácter suspensivo cuando expresamente se funden en causas previstas en la legislación básica o nulidad de Pleno derecho.",
      "referencia": "Art. 134.2 Ley 7/2015"
    },
    {
      "id": "0680-40",
      "tema": "0680",
      "nivel": "bronce",
      "enunciado": "¿A quién le corresponde la creación y organización interna de una Concejalía de Área?",
      "opciones": [
        "Al Cabildo insular respectivo.",
        "El Pleno acuerda la creación del Área y el Alcalde (por Decreto) desarrolla su organización interna.",
        "A la Junta de Gobierno Local de forma exclusiva.",
        "Al Consejero Autonómico de Administración Local."
      ],
      "correcta": 1,
      "justificacion": "El Art. 39 establece que el Pleno aprueba la estructura en Áreas, y el Alcalde por decreto establece la organización interna de cada Área.",
      "referencia": "Art. 39.1 y 39.5 Ley 7/2015"
    },
    {
      "id": "0680-41",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "¿Cuál es la función del 'Consejo Municipal de Canarias' regulado en las Disposiciones Adicionales?",
      "opciones": [
        "Órgano jurisdiccional para conflictos entre Cabildos y Ayuntamientos.",
        "Órgano de representación sindical del personal al servicio de las entidades locales.",
        "Órgano de participación y colaboración permanente de la Comunidad Autónoma y los municipios canarios.",
        "Entidad responsable de la recaudación de tributos locales a nivel autonómico."
      ],
      "correcta": 2,
      "justificacion": "La Disposición Adicional Quinta crea el Consejo Municipal de Canarias como órgano de participación y colaboración permanente entre el Gobierno Autonómico y los Ayuntamientos.",
      "referencia": "DA 5ª Ley 7/2015"
    },
    {
      "id": "0680-42",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "¿Quién preside el Consejo Municipal de Canarias?",
      "opciones": [
        "El Presidente del Gobierno de Canarias.",
        "La persona titular de la consejería competente en materia de Administraciones Públicas.",
        "El Presidente de la Federación Canaria de Municipios (FECAM).",
        "Se elige rotatoriamente entre los Alcaldes de las capitales insulares."
      ],
      "correcta": 1,
      "justificacion": "La Disposición Adicional Quinta, apartado 3.a) indica que la presidencia del Consejo la desempeñará la persona titular de la consejería competente en Administraciones Públicas.",
      "referencia": "DA 5ª.3.a) Ley 7/2015"
    },
    {
      "id": "0680-43",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "La solicitud de informe sobre inexistencia de duplicidades de competencias municipales se dirigirá a:",
      "opciones": [
        "La Presidencia del Cabildo Insular.",
        "El Parlamento de Canarias.",
        "La Viceconsejería de Administración Pública del Gobierno de Canarias.",
        "El Ministerio de Política Territorial."
      ],
      "correcta": 2,
      "justificacion": "La Disposición Adicional Decimotercera, apartado 2, establece que la solicitud se dirigirá a la Viceconsejería de Administración Pública u órgano que lo sustituya.",
      "referencia": "DA 13ª.2 Ley 7/2015"
    },
    {
      "id": "0680-44",
      "tema": "0680",
      "nivel": "bronce",
      "enunciado": "En la Administración Local de Canarias, las pedanías y caseríos tendrán el mismo régimen previsto para:",
      "opciones": [
        "Los Ayuntamientos de municipios de menos de 1.000 habitantes.",
        "Las Mancomunidades.",
        "Los Consejos de barrio.",
        "Las Entidades Locales Menores peninsulares."
      ],
      "correcta": 2,
      "justificacion": "La Disposición Adicional Primera establece que a las pedanías y caseríos se les aplicará el régimen previsto para los Consejos de barrio.",
      "referencia": "DA 1ª Ley 7/2015"
    },
    {
      "id": "0680-45",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "En el caso de que los municipios de Canarias quieran formar una asociación de municipios, la representación institucional en sus relaciones con el Gobierno de Canarias será ostentada por:",
      "opciones": [
        "Cualquier asociación debidamente inscrita.",
        "Solo por asociaciones formadas por municipios de la misma isla.",
        "La Federación Canaria de Municipios (Fecam), siempre que represente a la mayoría.",
        "Los Cabildos Insulares en su nombre."
      ],
      "correcta": 2,
      "justificacion": "La Disposición Adicional Tercera establece que la Fecam ostentará la representación institucional siempre que represente al mayor número de municipios.",
      "referencia": "DA 3ª Ley 7/2015"
    },
    {
      "id": "0680-46",
      "tema": "0680",
      "nivel": "bronce",
      "enunciado": "Para la prestación de servicios, las mancomunidades canarias podrán asumir competencias de los ayuntamientos asociados, debiendo relacionarse estas:",
      "opciones": [
        "Con funciones ejecutivas puramente políticas.",
        "Preferentemente con la prestación de un servicio obligatorio municipal que no puedan prestar por separado.",
        "Con la seguridad ciudadana y protección civil en todo caso.",
        "Con el control financiero municipal."
      ],
      "correcta": 1,
      "justificacion": "El artículo 62 especifica que las competencias de las Mancomunidades deberán estar relacionadas preferentemente con la prestación de un servicio obligatorio municipal.",
      "referencia": "Art. 62 Ley 7/2015"
    },
    {
      "id": "0680-47",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "La presidencia de las Áreas metropolitanas canarias se desempeñará de manera:",
      "opciones": [
        "Rotatoria anual por cada uno de los Alcaldes de los Ayuntamientos integrados.",
        "Electiva por el pleno del Área metropolitana por un periodo de 4 años.",
        "Vitalicia por el Alcalde del municipio de mayor población.",
        "Designada directamente por el Presidente del Gobierno de Canarias."
      ],
      "correcta": 0,
      "justificacion": "El artículo 69.a) señala que existirá un órgano unipersonal (Presidencia) desempeñada por periodos anuales rotatoriamente por cada uno de los Alcaldes.",
      "referencia": "Art. 69.a) Ley 7/2015"
    },
    {
      "id": "0680-48",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "Los actos de los órganos colegiados del Ayuntamiento se considerarán nulos de pleno derecho si son adoptados:",
      "opciones": [
        "Con el voto en contra de algún concejal de la oposición.",
        "Fuera de la Casa Consistorial por motivos de urgencia justificada.",
        "Sin haberse notificado en forma la convocatoria u orden del día a todos sus miembros.",
        "Por el Alcalde delegando en la Junta de Gobierno Local."
      ],
      "correcta": 2,
      "justificacion": "El artículo 124.a) declara nulos de Pleno derecho los acuerdos adoptados sin haberse notificado en forma la convocatoria u orden del día a todos los miembros.",
      "referencia": "Art. 124.a) Ley 7/2015"
    },
    {
      "id": "0680-49",
      "tema": "0680",
      "nivel": "plata",
      "enunciado": "Si en la Junta de Portavoces se materializan acuerdos, ¿cómo intervienen los portavoces de cada grupo?",
      "opciones": [
        "Un voto por persona física asistente.",
        "Voto por mayoría cualificada de los presentes.",
        "Voto ponderado (tantos votos como concejales representen).",
        "Siempre por unanimidad."
      ],
      "correcta": 2,
      "justificacion": "El artículo 38.1 permite prever en el reglamento orgánico el voto ponderado en la Junta de Portavoces.",
      "referencia": "Art. 38.1 Ley 7/2015"
    },
    {
      "id": "0680-50",
      "tema": "0680",
      "nivel": "oro",
      "enunciado": "En los Ayuntamientos canarios, los solicitantes de una sesión extraordinaria NO podrán reiterar su solicitud si los asuntos ya fueron debatidos en sesión anterior, salvo que:",
      "opciones": [
        "Se base en los mismos hechos, pero lo solicite un grupo político distinto.",
        "El Alcalde acceda de forma voluntaria.",
        "Se basen en otros hechos que no tengan identidad sustancial o íntima conexión.",
        "Hayan transcurrido 30 días desde la última sesión."
      ],
      "correcta": 2,
      "justificacion": "El artículo 94 señala que los solicitantes no podrán reiterarla basándose en otros hechos que tengan identidad sustancial o íntima conexión.",
      "referencia": "Art. 94 Ley 7/2015"
    }
  ]
};

fs.writeFileSync(path.join(__dirname, 'src/data/tema0680.json'), JSON.stringify(tema0680, null, 2), 'utf8');
console.log('tema0680.json creado con 50 preguntas.');
