const fs = require('fs');
const path = require('path');

const tema2350 = {
  "tema_id": "2350",
  "tema_nombre": "Transparencia y Buen Gobierno (Ley 19/2013 y Ley 12/2014 de Canarias)",
  "preguntas": [
    {
      "id": "2350-01",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "La Ley estatal básica de transparencia es:",
      "opciones": [
        "Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno.",
        "Ley 39/2015, de 1 de octubre, de Procedimiento Administrativo Común.",
        "Ley 40/2015, de 1 de octubre, de Régimen Jurídico del Sector Público.",
        "Ley 12/2014, de 26 de diciembre."
      ],
      "correcta": 0,
      "justificacion": "La Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la información pública y buen gobierno es la norma básica estatal en esta materia.",
      "referencia": "Ley 19/2013"
    },
    {
      "id": "2350-02",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "La ley canaria de transparencia es:",
      "opciones": [
        "Ley 3/2005, de 8 de julio.",
        "Ley 12/2014, de 26 de diciembre, de transparencia y de acceso a la información pública de Canarias.",
        "Decreto 75/2020, de 23 de julio.",
        "Ley 4/2021, de 28 de diciembre."
      ],
      "correcta": 1,
      "justificacion": "La Ley 12/2014, de 26 de diciembre, es la norma autonómica canaria específica sobre transparencia y acceso a la información pública.",
      "referencia": "Ley 12/2014 Canarias"
    },
    {
      "id": "2350-03",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "La publicidad activa obliga a las Administraciones a publicar información de forma:",
      "opciones": [
        "Solo cuando lo solicite un ciudadano.",
        "Proactiva, periódica y actualizada, sin necesidad de solicitud previa.",
        "Únicamente en papel, en el tablón de anuncios.",
        "Solo la información declarada de interés general por el Parlamento."
      ],
      "correcta": 1,
      "justificacion": "La publicidad activa (arts. 5-11 Ley 19/2013) obliga a las AAPP a publicar proactivamente, de forma regular y actualizada, determinada información sin esperar petición de los ciudadanos.",
      "referencia": "Arts. 5-11 Ley 19/2013"
    },
    {
      "id": "2350-04",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "¿Dónde deben publicar las Administraciones la información de publicidad activa?",
      "opciones": [
        "Exclusivamente en el BOE o boletines oficiales.",
        "En sus respectivos Portales de Transparencia de forma accesible y gratuita.",
        "Solo en la sede central de cada Consejería.",
        "En la página web de la Presidencia del Gobierno de forma centralizada."
      ],
      "correcta": 1,
      "justificacion": "El artículo 10 de la Ley 19/2013 establece que los sujetos obligados publicarán la información en sus respectivos Portales de Transparencia.",
      "referencia": "Art. 10 Ley 19/2013"
    },
    {
      "id": "2350-05",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "¿Cuál de los siguientes grupos de información forma parte de la publicidad activa institucional y organizativa según la Ley 19/2013?",
      "opciones": [
        "El nombre y apellidos de todos los funcionarios.",
        "Las funciones de los órganos, la normativa aplicable, la estructura organizativa y los planes y programas anuales.",
        "Los expedientes disciplinarios de los empleados.",
        "Los datos personales de los beneficiarios de subvenciones."
      ],
      "correcta": 1,
      "justificacion": "El artículo 6 de la Ley 19/2013 exige publicar las funciones de los órganos, la normativa, el organigrama y los planes y programas con sus objetivos e indicadores.",
      "referencia": "Art. 6 Ley 19/2013"
    },
    {
      "id": "2350-06",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "En materia de publicidad activa económica, la Ley 19/2013 obliga a publicar los contratos formalizados. ¿A partir de qué importe deben publicarse individualmente?",
      "opciones": [
        "Todos los contratos sin excepción.",
        "Los contratos mayores y los de valor estimado superior a 5.000 euros.",
        "Solo los contratos de obras superiores a 1 millón de euros.",
        "Contratos de valor igual o superior a los umbrales de publicidad de la LCSP."
      ],
      "correcta": 0,
      "justificacion": "El artículo 8.1.a) de la Ley 19/2013 exige publicar todos los contratos formalizados (con indicación del objeto, duración, importe, adjudicatario y número de licitadores).",
      "referencia": "Art. 8.1.a) Ley 19/2013"
    },
    {
      "id": "2350-07",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "¿Quién tiene derecho a ejercer el derecho de acceso a la información pública según la Ley 19/2013?",
      "opciones": [
        "Solo ciudadanos españoles mayores de edad.",
        "Solo personas con interés legítimo acreditado.",
        "Todas las personas, sin necesidad de motivar la solicitud ni alegar interés alguno.",
        "Solo los representantes legales de entidades públicas."
      ],
      "correcta": 2,
      "justificacion": "El artículo 12 de la Ley 19/2013 reconoce el derecho de acceso a todas las personas, sin que sea necesario motivar la solicitud ni alegar un interés concreto.",
      "referencia": "Art. 12 Ley 19/2013"
    },
    {
      "id": "2350-08",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "El plazo máximo para resolver y notificar una solicitud de acceso a la información pública es:",
      "opciones": [
        "15 días hábiles.",
        "1 mes, prorrogable por otro mes más.",
        "3 meses.",
        "2 meses sin prórroga."
      ],
      "correcta": 1,
      "justificacion": "El artículo 20 de la Ley 19/2013 fija un plazo de 1 mes para resolver las solicitudes, prorrogable por otro mes más cuando el volumen o complejidad de la información lo requiera.",
      "referencia": "Art. 20 Ley 19/2013"
    },
    {
      "id": "2350-09",
      "tema": "2350",
      "nivel": "bronce",
      "enunciado": "¿Qué se entiende por silencio negativo en el procedimiento de acceso a la información pública?",
      "opciones": [
        "No existe silencio en este procedimiento.",
        "Transcurrido el plazo máximo sin resolución expresa, la solicitud se entiende desestimada.",
        "La solicitud se entiende estimada si no hay respuesta en 15 días.",
        "El silencio solo opera si el solicitante lo pide expresamente."
      ],
      "correcta": 1,
      "justificacion": "El artículo 20.4 de la Ley 19/2013 establece que transcurrido el plazo máximo sin resolución expresa, la solicitud se entenderá desestimada (silencio negativo).",
      "referencia": "Art. 20.4 Ley 19/2013"
    },
    {
      "id": "2350-10",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "¿Cuáles son los límites al derecho de acceso a la información pública establecidos en la Ley 19/2013?",
      "opciones": [
        "No existen límites; el acceso es absoluto.",
        "Solo la protección de datos personales.",
        "Seguridad nacional, defensa, relaciones exteriores, seguridad pública, prevención de delitos, igualdad de partes en procesos judiciales, política económica, propiedad intelectual, secreto profesional, garantía de confidencialidad y protección del medio ambiente.",
        "Solo los datos clasificados como secreto oficial."
      ],
      "correcta": 2,
      "justificacion": "El artículo 14 de la Ley 19/2013 enumera los límites al derecho de acceso, que incluyen seguridad nacional, defensa, relaciones exteriores, economía, propiedad intelectual, secreto profesional, entre otros.",
      "referencia": "Art. 14 Ley 19/2013"
    },
    {
      "id": "2350-11",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "Cuando la información solicitada afecta a datos personales, la Administración debe aplicar el principio de:",
      "opciones": [
        "Disociación y acceso parcial.",
        "Denegación automática.",
        "Ponderación entre el derecho de acceso y la protección de datos, pudiendo facilitar la información con disociación o anonimización.",
        "Traslado al responsable del dato para que decida."
      ],
      "correcta": 2,
      "justificacion": "El artículo 15 de la Ley 19/2013 exige ponderar el interés público del acceso con la protección de datos, pudiendo facilitarse la información mediante anonimización o disociación.",
      "referencia": "Art. 15 Ley 19/2013"
    },
    {
      "id": "2350-12",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "El órgano estatal que resuelve las reclamaciones contra las resoluciones de acceso a la información de la Administración General del Estado es:",
      "opciones": [
        "El Defensor del Pueblo.",
        "El Consejo de Transparencia y Buen Gobierno (CTBG).",
        "La Audiencia Nacional.",
        "El Tribunal Supremo."
      ],
      "correcta": 1,
      "justificacion": "El Consejo de Transparencia y Buen Gobierno (CTBG) resuelve las reclamaciones que los ciudadanos puedan presentar contra las denegaciones de acceso de la AGE (art. 24 Ley 19/2013).",
      "referencia": "Art. 24 Ley 19/2013"
    },
    {
      "id": "2350-13",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "¿Qué órgano resuelve las reclamaciones contra denegaciones de acceso a la información pública de la Comunidad Autónoma de Canarias?",
      "opciones": [
        "El Diputado del Común.",
        "El Comisionado de Transparencia de Canarias.",
        "El Consejo Consultivo de Canarias.",
        "El Consejo de Transparencia y Buen Gobierno estatal."
      ],
      "correcta": 1,
      "justificacion": "La Ley 12/2014 de Canarias creó el Comisionado de Transparencia como órgano independiente que resuelve las reclamaciones en el ámbito autonómico canario.",
      "referencia": "Art. 41 Ley 12/2014 Canarias"
    },
    {
      "id": "2350-14",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "¿Cuál es el plazo para interponer la reclamación ante el Consejo de Transparencia (o el Comisionado autonómico) frente a una resolución denegatoria de acceso?",
      "opciones": [
        "10 días hábiles.",
        "15 días hábiles.",
        "1 mes desde la notificación de la resolución o desde que se produzca el silencio.",
        "3 meses desde la notificación."
      ],
      "correcta": 2,
      "justificacion": "El artículo 24.2 de la Ley 19/2013 fija en 1 mes el plazo para interponer la reclamación ante el CTBG, contado desde la notificación de la resolución o desde que se produzca el silencio administrativo.",
      "referencia": "Art. 24.2 Ley 19/2013"
    },
    {
      "id": "2350-15",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "La reclamación ante el Consejo de Transparencia y Buen Gobierno es:",
      "opciones": [
        "Obligatoria antes de acudir a los tribunales.",
        "Potestativa y sustitutiva del recurso de alzada o reposición.",
        "Obligatoria solo en materias de contratos.",
        "Solo puede interponerse después de la vía judicial."
      ],
      "correcta": 1,
      "justificacion": "El artículo 24.1 establece que la reclamación ante el CTBG es potestativa y tiene carácter sustitutivo de los recursos administrativos ordinarios (alzada o reposición).",
      "referencia": "Art. 24.1 Ley 19/2013"
    },
    {
      "id": "2350-16",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "La Ley 19/2013 distingue entre 'información pública' y 'datos de especial protección'. La información sobre la vida privada que figure en expedientes administrativos:",
      "opciones": [
        "Se deniega siempre.",
        "Se facilita directamente sin restricciones.",
        "Requiere ponderación: si el acceso afecta a la intimidad o datos sensibles, se deniega o se facilita con disociación.",
        "Solo la puede solicitar el propio afectado."
      ],
      "correcta": 2,
      "justificacion": "El artículo 15 exige una ponderación caso a caso; si la información contiene datos íntimos o sensibles (salud, vida sexual, origen racial, etc.), se deniega o se disocian esos datos.",
      "referencia": "Art. 15 Ley 19/2013"
    },
    {
      "id": "2350-17",
      "tema": "2350",
      "nivel": "bronce",
      "enunciado": "El buen gobierno, regulado en el Título II de la Ley 19/2013, establece:",
      "opciones": [
        "Los procedimientos electorales de los altos cargos.",
        "Principios de actuación y obligaciones de los altos cargos y asimilados, con su régimen sancionador.",
        "Solo las incompatibilidades de los miembros del Gobierno.",
        "La regulación de los grupos de interés (lobbies)."
      ],
      "correcta": 1,
      "justificacion": "El Título II (arts. 25-40) de la Ley 19/2013 regula el buen gobierno: principios éticos y de conducta de los altos cargos y su régimen de infracciones y sanciones.",
      "referencia": "Arts. 25-40 Ley 19/2013"
    },
    {
      "id": "2350-18",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "¿Qué sujetos están obligados a publicar información de publicidad activa según la Ley 19/2013?",
      "opciones": [
        "Solo la Administración General del Estado.",
        "Todas las Administraciones Públicas, sus organismos y entidades dependientes, partidos políticos, sindicatos, organizaciones empresariales y entidades privadas que perciban más de 100.000 euros en subvenciones.",
        "Solo las Administraciones con más de 500 empleados.",
        "Solo los Ministerios y Consejerías."
      ],
      "correcta": 1,
      "justificacion": "El artículo 2 de la Ley 19/2013 amplía el ámbito subjetivo a todas las AAPP, sus entidades dependientes, partidos, sindicatos y organizaciones empresariales y entidades privadas con más de 100.000€ en ayudas públicas.",
      "referencia": "Art. 2 Ley 19/2013"
    },
    {
      "id": "2350-19",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "¿Están los partidos políticos y los sindicatos obligados por la Ley 19/2013?",
      "opciones": [
        "No, gozan de total autonomía.",
        "Solo en materia de financiación.",
        "Sí, en cuanto a las obligaciones de publicidad activa establecidas en la ley.",
        "Solo si reciben más de 1 millón de euros en subvenciones."
      ],
      "correcta": 2,
      "justificacion": "El artículo 3 de la Ley 19/2013 incluye a partidos políticos, organizaciones sindicales y empresariales en las obligaciones de publicidad activa.",
      "referencia": "Art. 3 Ley 19/2013"
    },
    {
      "id": "2350-20",
      "tema": "2350",
      "nivel": "bronce",
      "enunciado": "Las infracciones en materia de buen gobierno de la Ley 19/2013 se clasifican en:",
      "opciones": [
        "Leves y graves.",
        "Graves y muy graves.",
        "Leves, graves y muy graves.",
        "Solo muy graves."
      ],
      "correcta": 2,
      "justificacion": "Los artículos 28-30 de la Ley 19/2013 clasifican las infracciones en materia de gestión económico-presupuestaria y en materia disciplinaria en leves, graves y muy graves.",
      "referencia": "Arts. 28-30 Ley 19/2013"
    },
    {
      "id": "2350-21",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "Las sanciones por infracciones muy graves en materia de buen gobierno de la Ley 19/2013 incluyen:",
      "opciones": [
        "Solo la multa económica.",
        "La destitución, inhabilitación para cargos públicos y reintegro de cantidades.",
        "Únicamente la publicación en el BOE.",
        "Solo la pérdida del complemento de productividad."
      ],
      "correcta": 1,
      "justificacion": "El artículo 30 establece que las infracciones muy graves llevan aparejadas la destitución del cargo y la inhabilitación para ocupar puestos de alto cargo durante entre 5 y 10 años, además del reintegro.",
      "referencia": "Art. 30 Ley 19/2013"
    },
    {
      "id": "2350-22",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "La Ley 12/2014 de Canarias amplía el catálogo de publicidad activa respecto a la ley estatal. ¿A qué órganos insulares se les aplica?",
      "opciones": [
        "Solo a la Administración de la Comunidad Autónoma.",
        "A la Administración de la CAC, los Cabildos Insulares y los Ayuntamientos canarios.",
        "Solo a los Cabildos.",
        "A todos los órganos excepto los municipios de menos de 1.000 habitantes."
      ],
      "correcta": 1,
      "justificacion": "La Ley 12/2014 de Canarias es de aplicación a la Administración de la CAC, los organismos autónomos, los Cabildos Insulares y los Ayuntamientos canarios.",
      "referencia": "Art. 2 Ley 12/2014 Canarias"
    },
    {
      "id": "2350-23",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "¿Qué información de los altos cargos deben publicar las AAPP en el Portal de Transparencia según la Ley 19/2013?",
      "opciones": [
        "Solo el salario.",
        "Las retribuciones percibidas, las declaraciones anuales de bienes e intereses y las actividades que realicen.",
        "Solo las actividades privadas compatibles.",
        "Solo la declaración de incompatibilidades."
      ],
      "correcta": 1,
      "justificacion": "El artículo 8.1.f) y g) de la Ley 19/2013 exige publicar las retribuciones de los altos cargos y las declaraciones anuales de bienes y actividades.",
      "referencia": "Art. 8.1.f) y g) Ley 19/2013"
    },
    {
      "id": "2350-24",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "La información que se publique en el Portal de Transparencia debe ser:",
      "opciones": [
        "En cualquier formato, sin restricciones técnicas.",
        "Clara, estructurada, accesible, comprensible, de fácil acceso gratuito, preferentemente en formatos reutilizables.",
        "Solo en formato PDF.",
        "Exclusivamente en castellano, sin otras lenguas."
      ],
      "correcta": 1,
      "justificacion": "El artículo 11 de la Ley 19/2013 exige que la información sea clara, estructurada y de fácil acceso, preferiblemente en formatos reutilizables (open data).",
      "referencia": "Art. 11 Ley 19/2013"
    },
    {
      "id": "2350-25",
      "tema": "2350",
      "nivel": "bronce",
      "enunciado": "¿Qué información debe publicarse en materia de subvenciones y ayudas públicas según la Ley 19/2013?",
      "opciones": [
        "Solo el importe total de las subvenciones concedidas.",
        "Las subvenciones y ayudas públicas concedidas, con indicación del importe, objetivo, beneficiarios y convocatoria.",
        "Solo las subvenciones superiores a 100.000 euros.",
        "Solo las subvenciones europeas."
      ],
      "correcta": 1,
      "justificacion": "El artículo 8.1.c) exige publicar información sobre todas las subvenciones y ayudas públicas concedidas, incluyendo convocatoria, beneficiario, importe y objetivo.",
      "referencia": "Art. 8.1.c) Ley 19/2013"
    },
    {
      "id": "2350-26",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "¿Puede inadmitirse a trámite una solicitud de acceso a la información pública?",
      "opciones": [
        "No, todas las solicitudes deben tramitarse.",
        "Sí, en causas tasadas: si se refieren a información en curso de elaboración, auxiliar o de apoyo, requiere actividad compleja, está siendo tramitada por la judicatura, o es manifiestamente repetitiva.",
        "Sí, siempre que la información tenga carácter reservado.",
        "Solo si la solicitud la presenta un extranjero."
      ],
      "correcta": 1,
      "justificacion": "El artículo 18 de la Ley 19/2013 enumera las causas de inadmisión: información en curso de elaboración, información auxiliar/de apoyo, solicitudes abusivas, información en proceso judicial, o que requiera refundición de datos de varias unidades.",
      "referencia": "Art. 18 Ley 19/2013"
    },
    {
      "id": "2350-27",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "El acceso a la información pública es, con carácter general:",
      "opciones": [
        "Gratuito, pero con tasas por copia.",
        "Gratuito, tanto para el acceso como para la obtención de copias.",
        "De pago en todo caso.",
        "Gratuito para los residentes en el municipio capital."
      ],
      "correcta": 0,
      "justificacion": "El artículo 22 de la Ley 19/2013 establece que el acceso a la información es gratuito, pero la expedición de copias o la transposición a formatos diferentes puede conllevar la exacción de las tasas previstas.",
      "referencia": "Art. 22 Ley 19/2013"
    },
    {
      "id": "2350-28",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "El principio de 'acceso parcial' a la información pública significa que:",
      "opciones": [
        "Se puede acceder al 50% de cualquier expediente.",
        "Cuando un documento contiene información cuyo acceso deba limitarse, se facilita el resto del documento, omitiendo o disociando la parte afectada.",
        "Solo se puede acceder a documentos de menos de 20 páginas.",
        "No existe este principio en la Ley 19/2013."
      ],
      "correcta": 1,
      "justificacion": "El artículo 16 de la Ley 19/2013 consagra el principio de acceso parcial: si parte del documento está sujeto a límites, se facilita el resto previo ocultamiento o disociación de la parte limitada.",
      "referencia": "Art. 16 Ley 19/2013"
    },
    {
      "id": "2350-29",
      "tema": "2350",
      "nivel": "bronce",
      "enunciado": "El Portal de la Transparencia de la AGE (Administración General del Estado) es:",
      "opciones": [
        "transparencia.gob.es",
        "datos.gob.es",
        "sede.gob.es",
        "contrataciondelestado.es"
      ],
      "correcta": 0,
      "justificacion": "El Portal de la Transparencia de la AGE, creado por la Ley 19/2013, tiene como dominio transparencia.gob.es.",
      "referencia": "Art. 10 Ley 19/2013"
    },
    {
      "id": "2350-30",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "¿Cuánto tiempo tiene la Administración para emitir resolución sobre una reclamación presentada ante el Consejo de Transparencia y Buen Gobierno?",
      "opciones": [
        "15 días hábiles.",
        "1 mes.",
        "3 meses.",
        "6 meses."
      ],
      "correcta": 2,
      "justificacion": "El artículo 24.3 de la Ley 19/2013 establece que el CTBG resolverá en el plazo de 3 meses; transcurrido sin resolución, la reclamación se entenderá desestimada.",
      "referencia": "Art. 24.3 Ley 19/2013"
    },
    {
      "id": "2350-31",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "¿Cuál es la naturaleza jurídica del Consejo de Transparencia y Buen Gobierno?",
      "opciones": [
        "Es una Dirección General del Ministerio de Hacienda.",
        "Es un organismo público independiente adscrito al Ministerio de Hacienda.",
        "Es una comisión parlamentaria.",
        "Es una entidad privada sin ánimo de lucro."
      ],
      "correcta": 1,
      "justificacion": "El CTBG es un organismo público independiente, con personalidad jurídica propia, adscrito al Ministerio de Hacienda (art. 33 Ley 19/2013).",
      "referencia": "Art. 33 Ley 19/2013"
    },
    {
      "id": "2350-32",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "La Ley 19/2013 obliga a publicar información sobre los presupuestos con el nivel de desglose adecuado y su grado de ejecución. ¿Con qué periodicidad?",
      "opciones": [
        "Anualmente.",
        "Trimestralmente.",
        "Mensualmente.",
        "Solo al cierre del ejercicio."
      ],
      "correcta": 1,
      "justificacion": "El artículo 8.1.d) exige la publicación trimestral de la información presupuestaria con el nivel de desglose adecuado.",
      "referencia": "Art. 8.1.d) Ley 19/2013"
    },
    {
      "id": "2350-33",
      "tema": "2350",
      "nivel": "bronce",
      "enunciado": "Los medios de comunicación social de titularidad pública ¿están obligados por la Ley 19/2013?",
      "opciones": [
        "No, gozan de libertad de prensa.",
        "Sí, en lo referente a sus obligaciones de publicidad activa.",
        "Solo si están participados mayoritariamente por el Estado.",
        "Solo si tienen más de 50 trabajadores."
      ],
      "correcta": 1,
      "justificacion": "El artículo 2.1.h) incluye a las corporaciones de radio y televisión públicas y sus sociedades en el ámbito subjetivo de las obligaciones de publicidad activa.",
      "referencia": "Art. 2.1.h) Ley 19/2013"
    },
    {
      "id": "2350-34",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "¿Qué obligación impone la Ley 19/2013 a los altos cargos de la AGE en cuanto a su situación patrimonial?",
      "opciones": [
        "Solo declarar los bienes inmuebles.",
        "Presentar declaración de bienes y derechos al inicio, durante y al cese de su mandato, que es pública.",
        "Presentar la declaración del IRPF anual.",
        "Declarar solo los conflictos de interés."
      ],
      "correcta": 1,
      "justificacion": "La Ley 3/2015 reguladora del Estatuto del Alto Cargo (complementaria a la Ley 19/2013) obliga a formular declaración de bienes y derechos al inicio, durante y al cese, publicándose en el Portal de Transparencia.",
      "referencia": "Ley 3/2015 / Art. 8.1.f) Ley 19/2013"
    },
    {
      "id": "2350-35",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "Cuando una solicitud de acceso afecta a información que pertenece a terceros, la Administración debe:",
      "opciones": [
        "Denegarla automáticamente.",
        "Conceder audiencia a esos terceros en un plazo de 15 días para que formulen alegaciones.",
        "Remitirla directamente a la AEPD.",
        "Facilitarla directamente sin más trámites."
      ],
      "correcta": 1,
      "justificacion": "El artículo 19.3 de la Ley 19/2013 establece que cuando la solicitud afecte a información sobre terceros, se les dará trámite de audiencia por un plazo de 15 días.",
      "referencia": "Art. 19.3 Ley 19/2013"
    },
    {
      "id": "2350-36",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "El Portal de Transparencia del Gobierno de Canarias debe publicar, entre otros, las retribuciones de los altos cargos autonómicos. ¿Cómo se denomina este instrumento en la Ley 12/2014?",
      "opciones": [
        "Directorio de cargos públicos.",
        "Registro de Intereses.",
        "Portal de Buen Gobierno de Canarias.",
        "Portal de Transparencia del Gobierno de Canarias."
      ],
      "correcta": 3,
      "justificacion": "La Ley 12/2014 de Canarias prevé el Portal de Transparencia del Gobierno de Canarias como herramienta de publicidad activa de la información autonómica.",
      "referencia": "Arts. 7-18 Ley 12/2014 Canarias"
    },
    {
      "id": "2350-37",
      "tema": "2350",
      "nivel": "bronce",
      "enunciado": "La Ley 19/2013 establece que la información se debe publicar de manera que sea entendible para los ciudadanos. Este principio se denomina:",
      "opciones": [
        "Principio de claridad y comprensión.",
        "Principio de accesibilidad.",
        "Principio de reutilización.",
        "Principio de proporcionalidad."
      ],
      "correcta": 0,
      "justificacion": "El artículo 5.4 de la Ley 19/2013 exige que la información sea publicada de forma clara y comprensible para el ciudadano.",
      "referencia": "Art. 5.4 Ley 19/2013"
    },
    {
      "id": "2350-38",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "¿Cuál es la diferencia entre 'información pública' y 'documentos'?",
      "opciones": [
        "No hay diferencia.",
        "El derecho de acceso recae sobre la información (contenidos) en poder de la Administración, no necesariamente sobre los documentos físicos concretos.",
        "Solo se puede acceder a documentos, no a información.",
        "La información es accesible para todos; los documentos solo para funcionarios."
      ],
      "correcta": 1,
      "justificacion": "El artículo 13 define 'información pública' como los contenidos o documentos en poder de la Administración. El derecho de acceso recae sobre la información, pudiendo la Administración facilitarla en el formato que estime más adecuado.",
      "referencia": "Art. 13 Ley 19/2013"
    },
    {
      "id": "2350-39",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "La Ley 19/2013 establece que las resoluciones del CTBG:",
      "opciones": [
        "Son siempre vinculantes para la Administración afectada.",
        "Son meras recomendaciones.",
        "Son vinculantes para la AGE y demás entes estatales, pudiendo ser impugnadas ante la jurisdicción contencioso-administrativa.",
        "Solo son vinculantes si la Administración las acepta."
      ],
      "correcta": 2,
      "justificacion": "Las resoluciones del CTBG son vinculantes para la Administración General del Estado y sus organismos, y podrán ser impugnadas directamente ante los juzgados centrales de lo contencioso-administrativo.",
      "referencia": "Art. 24.4 Ley 19/2013"
    },
    {
      "id": "2350-40",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "¿Cuándo no es de aplicación la Ley 19/2013 de transparencia en lo relativo al acceso a la información?",
      "opciones": [
        "Cuando se solicita información de más de 10 años de antigüedad.",
        "Cuando el acceso se regula por su normativa específica: acceso a archivos y registros judiciales, al Registro Civil, procedimientos en curso, documentos con datos personales, etc.",
        "Cuando el solicitante sea extranjero.",
        "En ningún caso: la Ley 19/2013 es siempre aplicable."
      ],
      "correcta": 1,
      "justificacion": "El artículo 2.2 excluye de su ámbito el acceso regulado por normativa específica (archivos judiciales, Registro Civil, procedimientos en tramitación, información fiscal, etc.), que se rige por sus propias normas.",
      "referencia": "Art. 2.2 Ley 19/2013"
    },
    {
      "id": "2350-41",
      "tema": "2350",
      "nivel": "bronce",
      "enunciado": "¿A través de qué vía puede el ciudadano presentar una solicitud de acceso a la información pública?",
      "opciones": [
        "Solo mediante instancia presencial en el registro.",
        "Solo a través de la sede electrónica.",
        "Por cualquier medio que permita tener constancia de la solicitud: presencial, postal o electrónica.",
        "Exclusivamente mediante formulario normalizado aprobado por el Ministerio."
      ],
      "correcta": 2,
      "justificacion": "El artículo 17.1 permite presentar la solicitud por cualquier medio que permita tener constancia de su envío y recepción, incluyendo medios electrónicos.",
      "referencia": "Art. 17.1 Ley 19/2013"
    },
    {
      "id": "2350-42",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "¿Con qué periodicidad se actualiza la información publicada en el Portal de Transparencia?",
      "opciones": [
        "Con carácter anual.",
        "Cuando la Administración lo estime conveniente.",
        "De forma periódica y actualizada, sin periodicidad fija salvo la que establezca la normativa específica.",
        "Solo cuando se produzcan cambios normativos."
      ],
      "correcta": 2,
      "justificacion": "El artículo 5.3 de la Ley 19/2013 exige que la información se publique de manera periódica y actualizada, con la periodicidad que establezca cada normativa específica.",
      "referencia": "Art. 5.3 Ley 19/2013"
    },
    {
      "id": "2350-43",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "El 'principio de prueba' en el acceso a la información pública significa que:",
      "opciones": [
        "El solicitante debe probar su interés.",
        "La Administración debe probar las razones de la denegación, no el ciudadano las razones de acceso.",
        "Ambas partes comparten la carga de la prueba.",
        "No existe este principio en la Ley 19/2013."
      ],
      "correcta": 1,
      "justificacion": "Conforme al artículo 12 (no es necesario motivar la solicitud), si la Administración deniega el acceso, debe motivar la denegación y justificar la aplicación de los límites.",
      "referencia": "Art. 12 y 20 Ley 19/2013"
    },
    {
      "id": "2350-44",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "El incumplimiento de las obligaciones de publicidad activa de la Ley 19/2013 puede conllevar:",
      "opciones": [
        "Solo una amonestación verbal.",
        "Responsabilidad disciplinaria y eventual responsabilidad penal de los responsables.",
        "La nulidad automática de los actos de la Administración.",
        "Solo la publicación de la infracción en el BOE."
      ],
      "correcta": 1,
      "justificacion": "El artículo 9.2 establece que el incumplimiento de las obligaciones de publicidad activa puede dar lugar a la exigencia de responsabilidades disciplinarias y eventual responsabilidad penal.",
      "referencia": "Art. 9.2 Ley 19/2013"
    },
    {
      "id": "2350-45",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "La Ley 12/2014 de Canarias incluye como obligación de publicidad activa:",
      "opciones": [
        "Solo las retribuciones del Presidente del Gobierno.",
        "Las agendas institucionales de los miembros del Gobierno de Canarias.",
        "Solo los contratos mayores de obras.",
        "La publicación de las actas del Consejo de Gobierno."
      ],
      "correcta": 1,
      "justificacion": "La Ley 12/2014 de Canarias va más allá de la ley estatal e incluye como obligación de publicidad activa las agendas institucionales de los miembros del Gobierno.",
      "referencia": "Art. 10 Ley 12/2014 Canarias"
    },
    {
      "id": "2350-46",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "¿Puede un ciudadano solicitar acceso a información que contenga datos de otra persona en el marco de un expediente sancionador?",
      "opciones": [
        "Sí, siempre que pague las tasas.",
        "Sí, sin restricción alguna.",
        "Solo si es el propio interesado del expediente.",
        "Posiblemente, previo análisis de ponderación entre el derecho de acceso y la protección de datos del tercero afectado."
      ],
      "correcta": 3,
      "justificacion": "El artículo 15 exige ponderar el derecho de acceso frente a la protección de datos de terceros; si se trata de datos especialmente protegidos (salud, sanciones penales), prevalece la denegación salvo consentimiento del afectado.",
      "referencia": "Art. 15 Ley 19/2013"
    },
    {
      "id": "2350-47",
      "tema": "2350",
      "nivel": "bronce",
      "enunciado": "¿Qué información sobre las normas en preparación debe publicarse según la Ley 19/2013?",
      "opciones": [
        "Solo las normas ya aprobadas.",
        "Los proyectos de reglamentos y anteproyectos de ley, así como los documentos preparatorios relevantes.",
        "Solo los proyectos de ley remitidos al Parlamento.",
        "Solo los reglamentos de más de 10 artículos."
      ],
      "correcta": 1,
      "justificacion": "El artículo 7 de la Ley 19/2013 obliga a publicar los proyectos normativos cuya iniciativa corresponda al Gobierno, incluyendo anteproyectos de ley y proyectos de reglamento.",
      "referencia": "Art. 7 Ley 19/2013"
    },
    {
      "id": "2350-48",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "El Comisionado de Transparencia de Canarias es elegido por el Parlamento de Canarias con una mayoría de:",
      "opciones": [
        "Mayoría simple.",
        "Mayoría absoluta.",
        "Mayoría de dos tercios.",
        "Mayoría de tres quintos."
      ],
      "correcta": 3,
      "justificacion": "El Comisionado de Transparencia de Canarias es elegido por el Parlamento de Canarias por mayoría de tres quintos (3/5).",
      "referencia": "Art. 41 Ley 12/2014 Canarias"
    },
    {
      "id": "2350-49",
      "tema": "2350",
      "nivel": "oro",
      "enunciado": "¿Puede la Administración exigir identificación al solicitante de acceso a la información pública?",
      "opciones": [
        "No, el acceso es completamente anónimo.",
        "Sí, debe identificarse con DNI o equivalente para poder tramitar la solicitud.",
        "Solo si la información es de carácter especialmente sensible.",
        "Solo si la información va a facilitarse en papel."
      ],
      "correcta": 1,
      "justificacion": "El artículo 17.2 establece que el solicitante debe identificarse, aunque no tenga que motivar su solicitud. La identificación permite comunicarle la resolución.",
      "referencia": "Art. 17.2 Ley 19/2013"
    },
    {
      "id": "2350-50",
      "tema": "2350",
      "nivel": "plata",
      "enunciado": "La Ley 12/2014 de Canarias contempla la figura del 'Registro de Grupos de Interés'. ¿Para qué sirve?",
      "opciones": [
        "Para registrar a los lobbies y grupos de presión que tratan de influir en las políticas públicas canarias.",
        "Para inscribir a las asociaciones sin ánimo de lucro.",
        "Para gestionar las subvenciones a entidades privadas.",
        "Para controlar las organizaciones sindicales."
      ],
      "correcta": 0,
      "justificacion": "La Ley 12/2014 de Canarias incluyó pioneramente un Registro de Grupos de Interés para registrar a los lobistas que intervienen ante las instituciones canarias.",
      "referencia": "Capítulo V Ley 12/2014 Canarias"
    }
  ]
};

fs.writeFileSync(path.join(__dirname, 'src/data/tema2350.json'), JSON.stringify(tema2350, null, 2), 'utf8');
console.log('tema2350.json creado con 50 preguntas.');
