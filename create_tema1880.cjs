const fs = require('fs');
const path = require('path');

const tema1880 = {
  "tema_id": "1880",
  "tema_nombre": "Ley 8/2015 de Cabildos Insulares de Canarias",
  "preguntas": [
    {
      "id": "1880-01",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "Según el artículo 1 de la Ley 8/2015, los Cabildos Insulares son:",
      "opciones": [
        "Órganos consultivos de la Comunidad Autónoma de Canarias.",
        "Instituciones de la Comunidad Autónoma de Canarias y órganos de gobierno, administración y representación de cada isla.",
        "Entidades locales subordinadas jerárquicamente al Gobierno de Canarias.",
        "Meros delegados territoriales de la Administración del Estado."
      ],
      "correcta": 1,
      "justificacion": "El artículo 1.1 de la Ley 8/2015 establece que los Cabildos Insulares son instituciones de la CAC y órganos de gobierno, administración y representación de cada isla.",
      "referencia": "Art. 1.1 Ley 8/2015"
    },
    {
      "id": "1880-02",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "Los Cabildos Insulares son elegidos mediante sufragio universal, igual, libre, directo y secreto. ¿Cuándo se celebran sus elecciones?",
      "opciones": [
        "En convocatoria independiente de cualquier otra elección.",
        "Simultáneamente con las elecciones al Parlamento de Canarias.",
        "Simultáneamente con las elecciones municipales.",
        "Cada cinco años en fecha fijada por el Gobierno de Canarias."
      ],
      "correcta": 2,
      "justificacion": "Las elecciones a Cabildos se celebran simultáneamente con las elecciones municipales, al amparo de lo previsto en la LOREG y en la normativa canaria.",
      "referencia": "Art. 5 Ley 8/2015"
    },
    {
      "id": "1880-03",
      "tema": "1880",
      "nivel": "bronce",
      "enunciado": "¿Cómo se denomina el Presidente del Cabildo Insular?",
      "opciones": [
        "Alcalde insular.",
        "Gobernador insular.",
        "Presidente del Cabildo.",
        "Consejero Insular."
      ],
      "correcta": 2,
      "justificacion": "El máximo órgano unipersonal del Cabildo Insular se denomina Presidente del Cabildo.",
      "referencia": "Art. 28 Ley 8/2015"
    },
    {
      "id": "1880-04",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "¿Cómo se elige el Presidente del Cabildo Insular?",
      "opciones": [
        "Por sufragio universal directo de los vecinos de la isla.",
        "Por el Pleno del Cabildo de entre los consejeros insulares del grupo político que haya obtenido mayor número de consejeros.",
        "Por designación del Presidente del Gobierno de Canarias.",
        "Por el Consejero de Presidencia de la CAC."
      ],
      "correcta": 1,
      "justificacion": "El artículo 28 establece que el Presidente del Cabildo es elegido por el Pleno entre los consejeros insulares que encabecen sus candidaturas (el candidato del partido con mayor número de escaños).",
      "referencia": "Art. 28 Ley 8/2015"
    },
    {
      "id": "1880-05",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "Los miembros del Cabildo Insular se denominan:",
      "opciones": [
        "Concejales.",
        "Diputados provinciales.",
        "Consejeros Insulares.",
        "Representantes insulares."
      ],
      "correcta": 2,
      "justificacion": "Los miembros del Cabildo Insular reciben la denominación de Consejeros Insulares.",
      "referencia": "Art. 5 Ley 8/2015"
    },
    {
      "id": "1880-06",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "¿Cuál es el tratamiento protocolario que corresponde al Presidente del Cabildo?",
      "opciones": [
        "Excelentísimo Señor.",
        "Ilustrísimo Señor.",
        "Señoría.",
        "Magnífico."
      ],
      "correcta": 0,
      "justificacion": "El artículo 34 de la Ley 8/2015 establece que el Presidente del Cabildo tendrá el tratamiento de 'Excelentísimo Señor'.",
      "referencia": "Art. 34 Ley 8/2015"
    },
    {
      "id": "1880-07",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "La moción de censura contra el Presidente del Cabildo Insular es constructiva. ¿Qué mayoría se requiere para prosperar?",
      "opciones": [
        "Mayoría simple.",
        "Mayoría de dos tercios.",
        "Mayoría absoluta del número legal de consejeros insulares.",
        "Mayoría de tres quintos."
      ],
      "correcta": 2,
      "justificacion": "El artículo 37.2 establece que la moción de censura deberá ser aprobada por la mayoría absoluta del número legal de miembros del Cabildo.",
      "referencia": "Art. 37.2 Ley 8/2015"
    },
    {
      "id": "1880-08",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "¿Cuántos Vicepresidentes puede nombrar el Presidente del Cabildo, como máximo?",
      "opciones": [
        "Hasta 3.",
        "Hasta la tercera parte del número legal de consejeros insulares.",
        "Hasta la mitad del número legal de consejeros insulares.",
        "Tantos como islas tenga el archipiélago."
      ],
      "correcta": 1,
      "justificacion": "El artículo 41.1 permite al Presidente nombrar Vicepresidentes hasta un número máximo de un tercio del número legal de consejeros insulares.",
      "referencia": "Art. 41.1 Ley 8/2015"
    },
    {
      "id": "1880-09",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "El Consejo de Gobierno Insular es el órgano colegiado de dirección política del Cabildo. ¿Cuántos miembros puede tener como máximo?",
      "opciones": [
        "Un tercio del número legal de consejeros.",
        "La mitad del número legal de consejeros.",
        "Un máximo de 7 miembros.",
        "Un máximo de 9 miembros."
      ],
      "correcta": 0,
      "justificacion": "El artículo 43.2 dispone que el Consejo de Gobierno Insular no podrá exceder de un tercio del número legal de consejeros insulares.",
      "referencia": "Art. 43.2 Ley 8/2015"
    },
    {
      "id": "1880-10",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "¿Quién preside el Consejo de Gobierno Insular del Cabildo?",
      "opciones": [
        "El Vicepresidente Primero.",
        "El Secretario General del Cabildo.",
        "El Presidente del Cabildo.",
        "El Consejero de mayor edad."
      ],
      "correcta": 2,
      "justificacion": "El artículo 43.1 establece que el Consejo de Gobierno Insular está presidido por el Presidente del Cabildo.",
      "referencia": "Art. 43.1 Ley 8/2015"
    },
    {
      "id": "1880-11",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "¿Cuál es la competencia exclusiva e indelegable del Pleno del Cabildo Insular?",
      "opciones": [
        "Contratar obras de importe inferior a 300.000 euros.",
        "La aprobación del presupuesto insular.",
        "Nombrar a los funcionarios de carrera.",
        "Publicar las ordenanzas fiscales."
      ],
      "correcta": 1,
      "justificacion": "El artículo 20.1 recoge como competencias indelegables del Pleno, entre otras, la aprobación y modificación de los presupuestos insulares.",
      "referencia": "Art. 20.1 Ley 8/2015"
    },
    {
      "id": "1880-12",
      "tema": "1880",
      "nivel": "bronce",
      "enunciado": "Las sesiones ordinarias del Pleno del Cabildo se celebrarán con una periodicidad mínima de:",
      "opciones": [
        "Mensual.",
        "Bimensual.",
        "Trimestral.",
        "Semestral."
      ],
      "correcta": 1,
      "justificacion": "El artículo 68.2 fija que las sesiones ordinarias del Pleno tendrán lugar con una periodicidad mínima bimensual (cada dos meses).",
      "referencia": "Art. 68.2 Ley 8/2015"
    },
    {
      "id": "1880-13",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "El Pleno del Cabildo queda válidamente constituido en primera convocatoria cuando concurren:",
      "opciones": [
        "La mitad más uno de sus miembros legales.",
        "Un tercio de sus miembros legales.",
        "Dos tercios de sus miembros legales.",
        "La mayoría absoluta de sus miembros."
      ],
      "correcta": 0,
      "justificacion": "El artículo 71.1 exige para la válida constitución del Pleno en primera convocatoria la asistencia de la mayoría absoluta (mitad más uno) del número legal de miembros.",
      "referencia": "Art. 71.1 Ley 8/2015"
    },
    {
      "id": "1880-14",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "En segunda convocatoria, el Pleno del Cabildo queda válidamente constituido con la asistencia de:",
      "opciones": [
        "La mitad de sus miembros.",
        "Un tercio de sus miembros.",
        "Al menos 3 miembros.",
        "Mayoría de tres quintos."
      ],
      "correcta": 1,
      "justificacion": "El artículo 71.1 permite en segunda convocatoria la constitución válida del Pleno con la asistencia de un tercio del número legal de miembros.",
      "referencia": "Art. 71.1 Ley 8/2015"
    },
    {
      "id": "1880-15",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "Los consejeros insulares que abandonen el grupo político de su formación electoral tendrán la consideración de:",
      "opciones": [
        "Consejeros independientes.",
        "Consejeros no adscritos.",
        "Miembros del grupo mixto.",
        "Consejeros en situación de incompatibilidad."
      ],
      "correcta": 1,
      "justificacion": "Al igual que en los ayuntamientos, el artículo 15.1 de la Ley 8/2015 establece que tendrán la consideración de consejeros no adscritos.",
      "referencia": "Art. 15.1 Ley 8/2015"
    },
    {
      "id": "1880-16",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "¿Qué número mínimo de Consejeros Insulares se requiere para constituir un Grupo Político Insular?",
      "opciones": [
        "2.",
        "3.",
        "4.",
        "5."
      ],
      "correcta": 1,
      "justificacion": "El artículo 14.1 establece que los consejeros insulares, en número no inferior a 3, pueden constituirse en grupos políticos insulares.",
      "referencia": "Art. 14.1 Ley 8/2015"
    },
    {
      "id": "1880-17",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "Las competencias propias de los Cabildos Insulares incluyen, entre otras:",
      "opciones": [
        "La gestión de los servicios básicos municipales.",
        "La cooperación económica, técnica y administrativa con los municipios insulares.",
        "La aprobación del planeamiento urbanístico de los municipios.",
        "La recaudación del IRPF en el ámbito insular."
      ],
      "correcta": 1,
      "justificacion": "El artículo 7 y siguientes de la Ley 8/2015 recogen entre las competencias de los Cabildos la cooperación económica, técnica y administrativa con los municipios de la isla.",
      "referencia": "Art. 7.c Ley 8/2015"
    },
    {
      "id": "1880-18",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "El Presidente del Cabildo puede ser sometido a una cuestión de confianza. ¿Sobre qué materias puede plantearse?",
      "opciones": [
        "Sobre cualquier asunto de su competencia.",
        "Sobre la aprobación del presupuesto insular, la aprobación de la relación de puestos de trabajo o la aprobación de la normativa reglamentaria de carácter general.",
        "Solo sobre el presupuesto insular.",
        "Sobre la contratación de obras de importe superior a 1 millón de euros."
      ],
      "correcta": 1,
      "justificacion": "El artículo 38.1 permite al Presidente vincular su continuidad a la aprobación del presupuesto, la RPT o la normativa reglamentaria general de carácter organizativo.",
      "referencia": "Art. 38.1 Ley 8/2015"
    },
    {
      "id": "1880-19",
      "tema": "1880",
      "nivel": "bronce",
      "enunciado": "¿En qué isla o islas puede existir una Delegación del Cabildo Insular de Gran Canaria?",
      "opciones": [
        "En Lanzarote y Fuerteventura.",
        "Ninguna, los Cabildos no tienen delegaciones territoriales.",
        "En La Palma, La Gomera y El Hierro exclusivamente.",
        "En cualquier municipio de la propia isla o en islas adscritas administrativamente."
      ],
      "correcta": 3,
      "justificacion": "Los Cabildos pueden establecer delegaciones o servicios en cualquier municipio de su isla o en islas administrativamente dependientes (como La Graciosa respecto a Lanzarote).",
      "referencia": "Art. 3 Ley 8/2015"
    },
    {
      "id": "1880-20",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "Las ordenanzas insulares y los reglamentos del Cabildo entrarán en vigor, salvo que dispongan otra cosa, a los:",
      "opciones": [
        "10 días de su publicación íntegra.",
        "15 días de su publicación íntegra.",
        "20 días de su publicación íntegra.",
        "Un mes de su publicación íntegra."
      ],
      "correcta": 2,
      "justificacion": "El artículo 107 de la Ley 8/2015 (siguiendo el patrón de la Ley 7/2015) establece que las ordenanzas entrarán en vigor a los 20 días de su publicación íntegra en el BOC.",
      "referencia": "Art. 107 Ley 8/2015"
    },
    {
      "id": "1880-21",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "¿Cuál es la función del Consejo Insular de Gobierno respecto al Pleno del Cabildo?",
      "opciones": [
        "Sustituir al Pleno en todos sus cometidos.",
        "Actuar como órgano de dirección política y coordinación de la acción de gobierno insular.",
        "Fiscalizar al Presidente del Cabildo.",
        "Aprobar el presupuesto insular de forma ordinaria."
      ],
      "correcta": 1,
      "justificacion": "El Consejo de Gobierno Insular es el órgano colegiado de dirección política y coordinación de la acción del gobierno insular, sin perjuicio de las atribuciones del Pleno.",
      "referencia": "Art. 43 Ley 8/2015"
    },
    {
      "id": "1880-22",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "La potestad expropiatoria de los Cabildos Insulares se ejerce en el ámbito de:",
      "opciones": [
        "Solo sus competencias propias.",
        "Cualquier materia si lo autoriza el Parlamento.",
        "Las competencias propias y las delegadas por la CAC o el Estado.",
        "Exclusivamente obras públicas insulares."
      ],
      "correcta": 2,
      "justificacion": "Los Cabildos tienen potestad expropiatoria tanto en el ámbito de sus competencias propias como en las delegadas por la CAC o el Estado.",
      "referencia": "Art. 4 Ley 8/2015 (Potestades)"
    },
    {
      "id": "1880-23",
      "tema": "1880",
      "nivel": "bronce",
      "enunciado": "¿Cómo se denominan las disposiciones generales de carácter normativo aprobadas por el Pleno del Cabildo?",
      "opciones": [
        "Leyes insulares.",
        "Decretos insulares.",
        "Ordenanzas insulares.",
        "Circulares insulares."
      ],
      "correcta": 2,
      "justificacion": "Las disposiciones generales de carácter normativo aprobadas por el Pleno del Cabildo se denominan Ordenanzas insulares.",
      "referencia": "Art. 103 Ley 8/2015"
    },
    {
      "id": "1880-24",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "Las resoluciones del Presidente del Cabildo adoptarán la forma de:",
      "opciones": [
        "Acuerdos.",
        "Decretos.",
        "Resoluciones.",
        "Bandos."
      ],
      "correcta": 1,
      "justificacion": "Las resoluciones del Presidente, al igual que las del Alcalde en los ayuntamientos, adoptan la forma de Decretos (art. 113 Ley 8/2015).",
      "referencia": "Art. 113 Ley 8/2015"
    },
    {
      "id": "1880-25",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "La Ley 8/2015 de Cabildos Insulares requirió para su aprobación por el Parlamento de Canarias:",
      "opciones": [
        "Mayoría simple.",
        "Mayoría absoluta.",
        "Mayoría de tres quintos.",
        "Mayoría de dos tercios."
      ],
      "correcta": 1,
      "justificacion": "La Ley 8/2015 es una Ley Cualificada del Parlamento de Canarias, cuya aprobación requirió mayoría absoluta por afectar a la organización de los Cabildos como instituciones autonómicas.",
      "referencia": "Disposición final Ley 8/2015"
    },
    {
      "id": "1880-26",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "Los actos del Cabildo Insular que agotan la vía administrativa pueden recurrirse mediante:",
      "opciones": [
        "Recurso de alzada ante el Gobierno de Canarias.",
        "Recurso de reposición potestativo ante el propio Cabildo, previo al contencioso-administrativo.",
        "Recurso ordinario ante el Pleno del Cabildo.",
        "Reclamación ante la Audiencia de Cuentas."
      ],
      "correcta": 1,
      "justificacion": "Al igual que en los ayuntamientos, contra los actos insulares que agotan la vía administrativa procede el recurso de reposición potestativo previo al contencioso.",
      "referencia": "Art. 124 Ley 8/2015"
    },
    {
      "id": "1880-27",
      "tema": "1880",
      "nivel": "bronce",
      "enunciado": "¿Qué isla tiene reconocida expresamente en el Estatuto de Autonomía y en la Ley 8/2015 la existencia de un Consejo Insular de Aguas?",
      "opciones": [
        "Todas las islas sin excepción.",
        "Solo Gran Canaria y Tenerife.",
        "Las islas mayores: Gran Canaria, Tenerife, Lanzarote y Fuerteventura.",
        "Cada Cabildo puede crearlo de forma potestativa."
      ],
      "correcta": 3,
      "justificacion": "Los Consejos Insulares de Aguas son organismos autónomos de cada Cabildo, existiendo en cada isla de forma potestativa según su normativa específica.",
      "referencia": "Competencias Cabildos / Normativa agua Canarias"
    },
    {
      "id": "1880-28",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "La potestad sancionadora del Cabildo Insular:",
      "opciones": [
        "Solo puede ejercerse en materia de medio ambiente.",
        "Es la misma que la de los ayuntamientos de la isla.",
        "Se ejerce dentro del ámbito de sus competencias propias y en los términos de la legislación aplicable.",
        "Requiere delegación expresa del Gobierno de Canarias para cada expediente."
      ],
      "correcta": 2,
      "justificacion": "El artículo 4.d) reconoce la potestad sancionadora del Cabildo dentro del ámbito de sus competencias y en los términos establecidos en la legislación.",
      "referencia": "Art. 4.d) Ley 8/2015"
    },
    {
      "id": "1880-29",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "¿Es posible la delegación de competencias entre el Cabildo Insular y los Ayuntamientos de la isla?",
      "opciones": [
        "No, está expresamente prohibido.",
        "Sí, el Cabildo puede delegar competencias a los Ayuntamientos y los Ayuntamientos al Cabildo.",
        "Solo en sentido descendente (del Cabildo a los Ayuntamientos).",
        "Solo con autorización del Gobierno de Canarias."
      ],
      "correcta": 1,
      "justificacion": "La Ley 8/2015 permite la delegación de competencias en ambas direcciones: del Cabildo a los Ayuntamientos y de los Ayuntamientos al Cabildo.",
      "referencia": "Art. 9 Ley 8/2015"
    },
    {
      "id": "1880-30",
      "tema": "1880",
      "nivel": "bronce",
      "enunciado": "¿En qué se diferencian las competencias 'propias' de las competencias 'delegadas' de los Cabildos Insulares?",
      "opciones": [
        "En nada, son términos sinónimos.",
        "Las propias las ejercen con plena autonomía; las delegadas se ejercen bajo las directrices del ente delegante.",
        "Las propias son las estatales y las delegadas las autonómicas.",
        "Las delegadas tienen mayor rango jurídico que las propias."
      ],
      "correcta": 1,
      "justificacion": "Las competencias propias se ejercen con plena autonomía y bajo la propia responsabilidad del Cabildo; las delegadas se ejercen bajo las directrices, control y supervisión del ente que delega.",
      "referencia": "Art. 7 y 8 Ley 8/2015"
    },
    {
      "id": "1880-31",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "La Ley 8/2015 de Cabildos fue aprobada el mismo día que la Ley 7/2015 de Municipios. ¿Cuándo entró en vigor?",
      "opciones": [
        "El mismo día de su publicación en el BOC.",
        "A los 20 días de su publicación en el BOC.",
        "A los 3 meses de su publicación en el BOC.",
        "El 1 de enero de 2016."
      ],
      "correcta": 1,
      "justificacion": "La Ley 8/2015 entró en vigor a los 20 días de su íntegra publicación en el Boletín Oficial de Canarias, conforme a la vacatio legis estándar.",
      "referencia": "DF Ley 8/2015"
    },
    {
      "id": "1880-32",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "El Presidente del Cabildo puede delegar el ejercicio de sus competencias en los Vicepresidentes, miembros del Consejo de Gobierno Insular o Consejeros Insulares. Las delegaciones se publicarán en:",
      "opciones": [
        "El Boletín Oficial del Estado.",
        "El Boletín Oficial de Canarias (BOC).",
        "El Boletín Oficial de la Provincia.",
        "La página web del Cabildo sin publicación oficial."
      ],
      "correcta": 1,
      "justificacion": "Las delegaciones del Presidente del Cabildo Insular deben publicarse en el BOC para su eficacia frente a terceros.",
      "referencia": "Art. 35.4 Ley 8/2015"
    },
    {
      "id": "1880-33",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "¿Qué órgano del Cabildo tiene asignada la función de control interno de la gestión económica, financiera y presupuestaria?",
      "opciones": [
        "El Pleno del Cabildo.",
        "La Intervención General del Cabildo.",
        "El Consejo de Gobierno Insular.",
        "La Auditoría Insular."
      ],
      "correcta": 1,
      "justificacion": "La Intervención General del Cabildo ejerce las funciones de control interno de la gestión económico-financiera y presupuestaria de la corporación insular.",
      "referencia": "Art. 135 Ley 8/2015"
    },
    {
      "id": "1880-34",
      "tema": "1880",
      "nivel": "bronce",
      "enunciado": "¿Cómo se denominan los miembros del Consejo de Gobierno Insular del Cabildo que no son Consejeros Insulares (electos)?",
      "opciones": [
        "Consejeros técnicos.",
        "Miembros no electos del Consejo.",
        "Consejeros insulares natos.",
        "Consejeros de Área."
      ],
      "correcta": 1,
      "justificacion": "El Consejo de Gobierno Insular puede estar integrado tanto por Consejeros Insulares electos como por miembros no electos (personal de confianza), conforme al art. 43.3 Ley 8/2015.",
      "referencia": "Art. 43.3 Ley 8/2015"
    },
    {
      "id": "1880-35",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "El Cabildo Insular dispone de potestad tributaria para establecer y exigir:",
      "opciones": [
        "Solo las tasas por servicios insulares.",
        "Los tributos propios que establezcan sus ordenanzas fiscales, en los términos de la legislación aplicable.",
        "Cualquier impuesto sin limitación de cuantía.",
        "Únicamente contribuciones especiales por obras insulares."
      ],
      "correcta": 1,
      "justificacion": "El artículo 4.b) reconoce la potestad tributaria del Cabildo para establecer y exigir tributos propios en los términos de la legislación aplicable.",
      "referencia": "Art. 4.b) Ley 8/2015"
    },
    {
      "id": "1880-36",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "En la Ley 8/2015, ¿qué competencia insular está relacionada con la gestión y conservación de la red de carreteras insulares?",
      "opciones": [
        "Es competencia exclusiva del Gobierno de Canarias.",
        "Es una competencia propia de los Cabildos Insulares.",
        "Es competencia de los Ayuntamientos de más de 20.000 habitantes.",
        "Es competencia de la Administración General del Estado."
      ],
      "correcta": 1,
      "justificacion": "La conservación y administración de las carreteras y caminos insulares cuya titularidad corresponda al Cabildo es una competencia propia insular.",
      "referencia": "Art. 7 Ley 8/2015"
    },
    {
      "id": "1880-37",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "En materia de presupuesto, el Cabildo Insular deberá aprobar su presupuesto antes del:",
      "opciones": [
        "31 de octubre del año anterior.",
        "31 de diciembre del año anterior.",
        "15 de enero del mismo ejercicio.",
        "31 de marzo del mismo ejercicio."
      ],
      "correcta": 1,
      "justificacion": "El presupuesto insular debe aprobarse antes del 31 de diciembre del año anterior a aquel al que vaya a referirse.",
      "referencia": "Normativa presupuestaria local / Art. 169 Ley 8/2015"
    },
    {
      "id": "1880-38",
      "tema": "1880",
      "nivel": "bronce",
      "enunciado": "La enajenación de bienes patrimoniales del Cabildo, cuando su valor supera el 10% de los recursos ordinarios del presupuesto, requiere autorización de:",
      "opciones": [
        "El Ministerio de Hacienda.",
        "El Gobierno de Canarias.",
        "El Tribunal de Cuentas.",
        "El Parlamento de Canarias."
      ],
      "correcta": 1,
      "justificacion": "Al igual que para los ayuntamientos (art. 128 Ley 7/2015), la enajenación que supere el 10% de los recursos ordinarios requiere autorización previa del Gobierno de Canarias.",
      "referencia": "Art. 128 (por analogía con Ley 7/2015) / Ley 8/2015"
    },
    {
      "id": "1880-39",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "Los Organismos Autónomos del Cabildo Insular se crean mediante:",
      "opciones": [
        "Decreto del Presidente del Cabildo.",
        "Acuerdo del Pleno del Cabildo.",
        "Ley del Parlamento de Canarias.",
        "Decreto del Gobierno de Canarias."
      ],
      "correcta": 1,
      "justificacion": "La creación de organismos autónomos del Cabildo es competencia del Pleno del Cabildo, que aprueba sus estatutos.",
      "referencia": "Art. 20.1 Ley 8/2015"
    },
    {
      "id": "1880-40",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "La Comisión Insular de Gobierno es el nombre utilizado en la Ley 8/2015 para referirse a:",
      "opciones": [
        "El Pleno del Cabildo.",
        "El Consejo de Gobierno Insular.",
        "La Comisión de Hacienda del Cabildo.",
        "La Junta de Gobierno de la Mancomunidad insular."
      ],
      "correcta": 1,
      "justificacion": "La Ley 8/2015 denomina Consejo de Gobierno Insular al órgano equivalente a la Junta de Gobierno Local de los ayuntamientos.",
      "referencia": "Art. 43 Ley 8/2015"
    },
    {
      "id": "1880-41",
      "tema": "1880",
      "nivel": "bronce",
      "enunciado": "¿Puede el Cabildo Insular personarse como parte interesada en los procedimientos que tramitan los Ayuntamientos de la isla cuando afecten a intereses insulares?",
      "opciones": [
        "No, solo puede hacerlo el Gobierno de Canarias.",
        "Sí, en los términos previstos en la normativa.",
        "Solo en procedimientos de más de 1 millón de euros.",
        "Solo mediante resolución judicial."
      ],
      "correcta": 1,
      "justificacion": "Los Cabildos pueden defender los intereses insulares en procedimientos de otras Administraciones, personándose conforme a la normativa procedimental aplicable.",
      "referencia": "Art. 4 Ley 8/2015 (potestades)"
    },
    {
      "id": "1880-42",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "La iniciativa legislativa de los Cabildos Insulares ante el Parlamento de Canarias se denomina:",
      "opciones": [
        "Proposición de ley insular.",
        "Iniciativa legislativa insular.",
        "Proyecto de ley insular.",
        "Moción insular."
      ],
      "correcta": 1,
      "justificacion": "Los Cabildos pueden ejercer la iniciativa legislativa ante el Parlamento de Canarias mediante lo que se denomina iniciativa legislativa insular, regulada en el EAC.",
      "referencia": "Art. 44 EAC / Ley 8/2015"
    },
    {
      "id": "1880-43",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "La Junta de Portavoces del Cabildo Insular puede establecer en su reglamento el sistema de:",
      "opciones": [
        "Voto secreto.",
        "Voto ponderado.",
        "Voto cualificado.",
        "Voto delegado."
      ],
      "correcta": 1,
      "justificacion": "Al igual que en la Ley 7/2015, la Ley 8/2015 permite que el reglamento de la Junta de Portavoces prevea el voto ponderado cuando sus acuerdos deban materializarse en forma de acuerdo.",
      "referencia": "Art. 26 Ley 8/2015"
    },
    {
      "id": "1880-44",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "La responsabilidad patrimonial de los Cabildos Insulares se rige por:",
      "opciones": [
        "La Ley 8/2015 exclusivamente.",
        "El régimen general establecido en la Ley 39/2015 y en la Ley 40/2015.",
        "El Código Civil.",
        "Una normativa específica de responsabilidad insular."
      ],
      "correcta": 1,
      "justificacion": "La responsabilidad patrimonial de los Cabildos se rige por el régimen general de la Ley 39/2015 y la Ley 40/2015 de Régimen Jurídico del Sector Público.",
      "referencia": "Art. 108 Ley 8/2015 / Leyes 39 y 40/2015"
    },
    {
      "id": "1880-45",
      "tema": "1880",
      "nivel": "bronce",
      "enunciado": "¿Qué función cumple la Conferencia de Presidentes de Cabildos de Canarias?",
      "opciones": [
        "Ejercer control presupuestario de los Cabildos.",
        "Ser un foro de encuentro, debate y colaboración entre los Presidentes de los Cabildos y el Presidente de la Comunidad Autónoma.",
        "Sustituir al Parlamento cuando este está disuelto.",
        "Fiscalizar al Gobierno de Canarias."
      ],
      "correcta": 1,
      "justificacion": "La Conferencia de Presidentes (art. 74 EAC) es un foro de encuentro para debatir asuntos de interés común entre los Presidentes de los Cabildos y el Presidente del Gobierno de Canarias.",
      "referencia": "Art. 74 EAC"
    },
    {
      "id": "1880-46",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "¿Cuántos consejeros insulares tiene el Cabildo de Tenerife, la isla más poblada, conforme a la legislación electoral?",
      "opciones": [
        "11",
        "15",
        "17",
        "21"
      ],
      "correcta": 2,
      "justificacion": "El número de Consejeros Insulares varía según la población de cada isla. Para Tenerife y Gran Canaria, que son las más pobladas, corresponden 17 consejeros insulares.",
      "referencia": "LOREG / DA Ley 8/2015"
    },
    {
      "id": "1880-47",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "El control de legalidad de los actos y acuerdos de los Cabildos Insulares que puedan infringir el ordenamiento jurídico corresponde a:",
      "opciones": [
        "El Gobierno de Canarias mediante tutela administrativa.",
        "El Tribunal Superior de Justicia de Canarias.",
        "La Audiencia de Cuentas.",
        "El Ministerio de Administraciones Públicas."
      ],
      "correcta": 1,
      "justificacion": "El control de legalidad de los actos de los Cabildos (como de toda la Administración Local) corresponde a los Tribunales de la jurisdicción contencioso-administrativa, con el TSJC a la cabeza.",
      "referencia": "Principio autonomía local / LJCA"
    },
    {
      "id": "1880-48",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "La disolución del Pleno del Cabildo Insular por incumplimiento de sus obligaciones constitucionales puede ser acordada por:",
      "opciones": [
        "El Presidente del Gobierno de Canarias.",
        "El Gobierno de la Nación mediante Real Decreto, con aprobación del Senado.",
        "El Tribunal Superior de Justicia de Canarias.",
        "El Parlamento de Canarias por mayoría absoluta."
      ],
      "correcta": 1,
      "justificacion": "Conforme al artículo 61 de la Ley de Bases de Régimen Local y el artículo 155 CE, la disolución de corporaciones locales puede acordarse por el Gobierno de la Nación con el Senado.",
      "referencia": "Art. 61 LBRL / Art. 155 CE"
    },
    {
      "id": "1880-49",
      "tema": "1880",
      "nivel": "plata",
      "enunciado": "En el régimen de sesiones del Cabildo Insular, ¿quién convoca las sesiones extraordinarias urgentes?",
      "opciones": [
        "Cualquier consejero insular.",
        "La mayoría absoluta del Pleno.",
        "El Presidente del Cabildo, apreciando la urgencia.",
        "El Vicepresidente Primero, de forma exclusiva."
      ],
      "correcta": 2,
      "justificacion": "El Presidente del Cabildo puede convocar sesiones extraordinarias urgentes cuando la urgencia del asunto lo requiera.",
      "referencia": "Art. 69 Ley 8/2015"
    },
    {
      "id": "1880-50",
      "tema": "1880",
      "nivel": "oro",
      "enunciado": "El Plan Insular de Ordenación (PIO) es el principal instrumento de planificación territorial de cada isla. ¿Quién lo aprueba?",
      "opciones": [
        "El Gobierno de Canarias.",
        "El Parlamento de Canarias mediante ley especial.",
        "El Pleno del Cabildo Insular.",
        "Los Ayuntamientos de la isla por acuerdo conjunto."
      ],
      "correcta": 2,
      "justificacion": "El Plan Insular de Ordenación es competencia de los Cabildos Insulares y es aprobado por el Pleno del Cabildo en el marco de la normativa de ordenación del territorio canaria.",
      "referencia": "Competencias insulares / TRLOTENC"
    }
  ]
};

fs.writeFileSync(path.join(__dirname, 'src/data/tema1880.json'), JSON.stringify(tema1880, null, 2), 'utf8');
console.log('tema1880.json creado con 50 preguntas.');
