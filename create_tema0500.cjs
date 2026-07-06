const fs = require('fs');
const path = require('path');

const tema0500 = {
  "tema_id": "0500",
  "tema_nombre": "Unión Europea",
  "preguntas": [
    {
      "id": "0500-01",
      "tema": "0500",
      "nivel": "oro",
      "enunciado": "¿Qué Estado miembro salió oficialmente de la Unión Europea el 31 de enero de 2020?",
      "opciones": [
        "Irlanda.",
        "Noruega.",
        "Reino Unido.",
        "Suecia."
      ],
      "correcta": 2,
      "justificacion": "El Reino Unido tuvo un referéndum de salida el 24 de junio de 2016 y su salida se hizo oficial el 31 de enero de 2020.",
      "referencia": "Países miembros de la UE"
    },
    {
      "id": "0500-02",
      "tema": "0500",
      "nivel": "plata",
      "enunciado": "¿Cuál fue el último país en adherirse a la Unión Europea en el año 2013?",
      "opciones": [
        "Bulgaria.",
        "Rumanía.",
        "Croacia.",
        "Eslovenia."
      ],
      "correcta": 2,
      "justificacion": "Croacia fue el último país en adherirse a la Unión Europea, haciéndolo efectivo en 2013.",
      "referencia": "Países miembros de la UE"
    },
    {
      "id": "0500-03",
      "tema": "0500",
      "nivel": "oro",
      "enunciado": "La Unión Europea se fundamenta en dos Tratados con el mismo valor jurídico, que son:",
      "opciones": [
        "El Tratado de París y el Tratado de Roma.",
        "El Tratado de la Unión Europea y el Tratado de Funcionamiento de la Unión Europea.",
        "El Tratado de Maastricht y el Tratado de Ámsterdam.",
        "La Carta de los Derechos Fundamentales y el Tratado de Lisboa."
      ],
      "correcta": 1,
      "justificacion": "El artículo 1 del TUE establece que la Unión se fundamenta en el Tratado de la Unión Europea (TUE) y en el Tratado de Funcionamiento de la Unión Europea (TFUE).",
      "referencia": "Art. 1 TUE"
    },
    {
      "id": "0500-04",
      "tema": "0500",
      "nivel": "oro",
      "enunciado": "El principio por el cual la Unión Europea intervendrá en ámbitos que no sean de su competencia exclusiva sólo cuando los objetivos no puedan ser alcanzados de manera suficiente por los Estados miembros, se denomina:",
      "opciones": [
        "Principio de atribución.",
        "Principio de primacía.",
        "Principio de subsidiariedad.",
        "Principio de proporcionalidad."
      ],
      "correcta": 2,
      "justificacion": "El principio de subsidiariedad regula que la UE sólo actúa si el objetivo se puede alcanzar mejor a escala de la Unión que a nivel nacional, regional o local.",
      "referencia": "Art. 5.3 TUE"
    },
    {
      "id": "0500-05",
      "tema": "0500",
      "nivel": "oro",
      "enunciado": "El principio que establece que en caso de conflicto entre la normativa europea y la normativa interna de un Estado miembro prevalece la normativa europea, se denomina:",
      "opciones": [
        "Principio de efecto directo.",
        "Principio de proporcionalidad.",
        "Principio de primacía.",
        "Principio de subsidiariedad."
      ],
      "correcta": 2,
      "justificacion": "El principio de primacía consagra la superioridad del Derecho de la Unión sobre el Derecho nacional de los Estados miembros en caso de conflicto.",
      "referencia": "Principios de la UE"
    },
    {
      "id": "0500-06",
      "tema": "0500",
      "nivel": "oro",
      "enunciado": "¿En cuál de los siguientes ámbitos dispone la Unión Europea de competencia exclusiva?",
      "opciones": [
        "La agricultura y la pesca.",
        "La cohesión económica, social y territorial.",
        "El medio ambiente.",
        "La política comercial común."
      ],
      "correcta": 3,
      "justificacion": "Según el artículo 3 del TFUE, la UE tiene competencia exclusiva en materias como la unión aduanera, el establecimiento de normas sobre competencia, política monetaria (países euro), conservación de recursos pesqueros y política comercial común.",
      "referencia": "Art. 3 TFUE"
    },
    {
      "id": "0500-07",
      "tema": "0500",
      "nivel": "plata",
      "enunciado": "La ciudadanía de la Unión Europea da derecho a ser elector y elegible en las elecciones al Parlamento Europeo y en:",
      "opciones": [
        "Las elecciones generales del Estado en el que residan.",
        "Las elecciones autonómicas del territorio en el que residan.",
        "Las elecciones municipales del Estado miembro en el que residan.",
        "Cualquier tipo de elección que se celebre en la Unión."
      ],
      "correcta": 2,
      "justificacion": "Los ciudadanos de la Unión tienen derecho a sufragio activo y pasivo en las elecciones al Parlamento Europeo y en las municipales del Estado donde residan.",
      "referencia": "Art. 20 TFUE"
    },
    {
      "id": "0500-08",
      "tema": "0500",
      "nivel": "oro",
      "enunciado": "Según el artículo 13 del TUE, ¿cuál de los siguientes órganos NO tiene el rango de Institución de la Unión Europea?",
      "opciones": [
        "El Comité Económico y Social.",
        "El Tribunal de Cuentas.",
        "El Banco Central Europeo.",
        "El Consejo Europeo."
      ],
      "correcta": 0,
      "justificacion": "El Comité Económico y Social es un órgano consultivo, no una Institución. Las Instituciones son 7: Parlamento Europeo, Consejo Europeo, Consejo, Comisión Europea, Tribunal de Justicia, Banco Central Europeo y Tribunal de Cuentas.",
      "referencia": "Art. 13 TUE"
    },
    {
      "id": "0500-09",
      "tema": "0500",
      "nivel": "plata",
      "enunciado": "El mandato de los diputados del Parlamento Europeo se establece por un período de:",
      "opciones": [
        "2,5 años.",
        "4 años.",
        "5 años.",
        "6 años."
      ],
      "correcta": 2,
      "justificacion": "Los diputados del Parlamento Europeo son elegidos por sufragio universal directo para un mandato de 5 años.",
      "referencia": "Parlamento Europeo"
    },
    {
      "id": "0500-10",
      "tema": "0500",
      "nivel": "oro",
      "enunciado": "Tras las elecciones de 2024, el número máximo de miembros del Parlamento Europeo, excluyendo al Presidente, es de:",
      "opciones": [
        "705",
        "719",
        "750",
        "751"
      ],
      "correcta": 1,
      "justificacion": "El número de miembros no excederá de 750 más el Presidente. Actualmente son 720 incluido el presidente, por tanto, son 719 diputados más el Presidente.",
      "referencia": "Parlamento Europeo (Composición)"
    },
    {
      "id": "0500-11",
      "tema": "0500",
      "nivel": "bronce",
      "enunciado": "La sede oficial del Parlamento Europeo, donde se celebran los plenos mensuales, se encuentra en:",
      "opciones": [
        "Bruselas.",
        "La Haya.",
        "Luxemburgo.",
        "Estrasburgo."
      ],
      "correcta": 3,
      "justificacion": "La sede oficial está en Estrasburgo (Francia), aunque las reuniones de las comisiones y plenos adicionales se hacen en Bruselas, y su Secretaría General está en Luxemburgo.",
      "referencia": "Parlamento Europeo (Sede)"
    },
    {
      "id": "0500-12",
      "tema": "0500",
      "nivel": "oro",
      "enunciado": "La Institución que da a la Unión Europea los impulsos necesarios para su desarrollo y define sus orientaciones y prioridades políticas generales, sin ejercer función legislativa, es:",
      "opciones": [
        "El Parlamento Europeo.",
        "La Comisión Europea.",
        "El Consejo.",
        "El Consejo Europeo."
      ],
      "correcta": 3,
      "justificacion": "El Consejo Europeo reúne a los Jefes de Estado o de Gobierno, y es el órgano que marca el rumbo político de la UE sin legislar.",
      "referencia": "Art. 15 TUE"
    },
    {
      "id": "0500-13",
      "tema": "0500",
      "nivel": "plata",
      "enunciado": "El Consejo Europeo está compuesto por:",
      "opciones": [
        "Un ministro de cada Estado miembro.",
        "Los Jefes de Estado o de Gobierno, su Presidente y el Presidente de la Comisión.",
        "Los eurodiputados elegidos por cada país.",
        "27 comisarios, uno por cada Estado miembro."
      ],
      "correcta": 1,
      "justificacion": "Se compone de los Jefes de Estado o de Gobierno de los Estados miembros, así como por su Presidente y por el Presidente de la Comisión. Participa también el Alto Representante.",
      "referencia": "Art. 15 TUE"
    },
    {
      "id": "0500-14",
      "tema": "0500",
      "nivel": "plata",
      "enunciado": "El Presidente del Consejo Europeo es elegido para un mandato de:",
      "opciones": [
        "5 años, no renovable.",
        "2,5 años, renovable una sola vez.",
        "6 meses (presidencia rotatoria).",
        "4 años."
      ],
      "correcta": 1,
      "justificacion": "El Consejo Europeo elige a su Presidente por mayoría cualificada por un mandato de dos años y medio, renovable una sola vez.",
      "referencia": "Art. 15 TUE"
    },
    {
      "id": "0500-15",
      "tema": "0500",
      "nivel": "oro",
      "enunciado": "¿Qué dos instituciones ejercen conjuntamente la función legislativa y presupuestaria en la Unión Europea?",
      "opciones": [
        "El Consejo Europeo y la Comisión.",
        "El Parlamento Europeo y la Comisión.",
        "El Parlamento Europeo y el Consejo.",
        "El Consejo y la Comisión."
      ],
      "correcta": 2,
      "justificacion": "El Parlamento Europeo y el Consejo de la Unión Europea ejercen conjuntamente las funciones legislativa y presupuestaria.",
      "referencia": "Art. 14 y 16 TUE"
    },
    {
      "id": "0500-16",
      "tema": "0500",
      "nivel": "plata",
      "enunciado": "El Consejo de la Unión Europea (o simplemente el Consejo) está presidido de forma:",
      "opciones": [
        "Vitalicia por el Estado más poblado.",
        "Rotatoria cada 6 meses por los Estados miembros.",
        "Electiva por un período de 2,5 años.",
        "Compartida por tres países durante 5 años."
      ],
      "correcta": 1,
      "justificacion": "La Presidencia de las formaciones del Consejo (salvo Asuntos Exteriores) es rotatoria entre los Estados miembros cada 6 meses.",
      "referencia": "El Consejo (Presidencia)"
    },
    {
      "id": "0500-17",
      "tema": "0500",
      "nivel": "oro",
      "enunciado": "La Institución que ostenta el monopolio de la iniciativa legislativa de los actos de la Unión es:",
      "opciones": [
        "El Parlamento Europeo.",
        "La Comisión Europea.",
        "El Consejo Europeo.",
        "El Tribunal de Justicia."
      ],
      "correcta": 1,
      "justificacion": "Salvo que los Tratados dispongan otra cosa, los actos legislativos sólo podrán adoptarse a propuesta de la Comisión Europea.",
      "referencia": "Art. 17 TUE"
    },
    {
      "id": "0500-18",
      "tema": "0500",
      "nivel": "oro",
      "enunciado": "La Comisión Europea está compuesta actualmente por:",
      "opciones": [
        "15 miembros elegidos entre los países más poblados.",
        "27 miembros (uno por cada Estado miembro).",
        "720 miembros.",
        "Un número de miembros correspondiente a dos tercios de los Estados miembros."
      ],
      "correcta": 1,
      "justificacion": "La Comisión está compuesta por un nacional de cada Estado miembro (27 en total actualmente), incluyendo su Presidente y el Alto Representante.",
      "referencia": "Composición Comisión"
    },
    {
      "id": "0500-19",
      "tema": "0500",
      "nivel": "plata",
      "enunciado": "El Alto Representante de la Unión para Asuntos Exteriores y Política de Seguridad es a su vez uno de los vicepresidentes natos de:",
      "opciones": [
        "El Parlamento Europeo.",
        "El Consejo Europeo.",
        "El Consejo de la Unión Europea.",
        "La Comisión Europea."
      ],
      "correcta": 3,
      "justificacion": "El Alto Representante es también Vicepresidente nato de la Comisión Europea, además de presidir el Consejo de Asuntos Exteriores.",
      "referencia": "Alto Representante"
    },
    {
      "id": "0500-20",
      "tema": "0500",
      "nivel": "bronce",
      "enunciado": "¿Dónde tiene su sede el Tribunal de Justicia de la Unión Europea?",
      "opciones": [
        "Bruselas.",
        "La Haya.",
        "Luxemburgo.",
        "Estrasburgo."
      ],
      "correcta": 2,
      "justificacion": "La sede del Tribunal de Justicia de la UE se encuentra en Luxemburgo.",
      "referencia": "Sede TJUE"
    },
    {
      "id": "0500-21",
      "tema": "0500",
      "nivel": "plata",
      "enunciado": "El Tribunal de Justicia de la Unión Europea (TJUE) está compuesto por:",
      "opciones": [
        "Un juez por Estado miembro y 11 abogados generales.",
        "Dos jueces por Estado miembro y 8 abogados generales.",
        "Un juez por Estado miembro, sin abogados generales.",
        "15 jueces y 15 abogados generales."
      ],
      "correcta": 0,
      "justificacion": "El TJUE está compuesto por un juez por cada Estado miembro (27) y asistido por 11 abogados generales, con mandato de 6 años renovables.",
      "referencia": "Composición TJUE"
    },
    {
      "id": "0500-22",
      "tema": "0500",
      "nivel": "oro",
      "enunciado": "El objetivo principal del Sistema Europeo de Bancos Centrales (SEBC) y del Banco Central Europeo es:",
      "opciones": [
        "Reducir la tasa de desempleo en Europa.",
        "Mantener la estabilidad de precios.",
        "Financiar proyectos de inversión en regiones desfavorecidas.",
        "Establecer la política fiscal común."
      ],
      "correcta": 1,
      "justificacion": "El objetivo fundamental del SEBC y del Banco Central Europeo es mantener la estabilidad de precios (control de la inflación).",
      "referencia": "Banco Central Europeo"
    },
    {
      "id": "0500-23",
      "tema": "0500",
      "nivel": "plata",
      "enunciado": "Los miembros del Tribunal de Cuentas de la Unión Europea son nombrados por el Consejo para un período de:",
      "opciones": [
        "4 años.",
        "5 años.",
        "6 años, renovables.",
        "9 años, no renovables."
      ],
      "correcta": 2,
      "justificacion": "Los 27 miembros del Tribunal de Cuentas tienen un mandato de 6 años, renovables.",
      "referencia": "Tribunal de Cuentas"
    },
    {
      "id": "0500-24",
      "tema": "0500",
      "nivel": "bronce",
      "enunciado": "¿Qué función tienen el Comité Económico y Social y el Comité de las Regiones en la arquitectura de la UE?",
      "opciones": [
        "Función legislativa.",
        "Función jurisdiccional.",
        "Función ejecutiva.",
        "Función consultiva."
      ],
      "correcta": 3,
      "justificacion": "Ambos comités asisten al Parlamento Europeo, al Consejo y a la Comisión ejerciendo funciones estrictamente consultivas.",
      "referencia": "Comités consultivos"
    },
    {
      "id": "0500-25",
      "tema": "0500",
      "nivel": "oro",
      "enunciado": "En el Derecho derivado de la UE, la norma que es obligatoria en todos sus elementos y directamente aplicable en cada Estado miembro sin necesidad de transposición es:",
      "opciones": [
        "La Directiva.",
        "El Reglamento.",
        "La Decisión.",
        "El Dictamen."
      ],
      "correcta": 1,
      "justificacion": "El Reglamento tiene alcance general, es obligatorio en todos sus elementos y directamente aplicable, no precisando de normas de transposición.",
      "referencia": "Derecho Derivado (Reglamento)"
    },
    {
      "id": "0500-26",
      "tema": "0500",
      "nivel": "oro",
      "enunciado": "¿Qué instrumento normativo obliga al Estado miembro en cuanto al resultado, dejando a las autoridades nacionales la elección de la forma y de los medios (requiere transposición)?",
      "opciones": [
        "La Directiva.",
        "El Reglamento.",
        "El Dictamen.",
        "La Recomendación."
      ],
      "correcta": 0,
      "justificacion": "La Directiva obliga en cuanto al resultado que debe conseguirse, pero deja a los Estados la elección de la forma y los medios mediante la correspondiente transposición.",
      "referencia": "Derecho Derivado (Directiva)"
    },
    {
      "id": "0500-27",
      "tema": "0500",
      "nivel": "plata",
      "enunciado": "Respecto a los actos del derecho derivado de la UE, ¿cuáles NO son jurídicamente vinculantes?",
      "opciones": [
        "Reglamentos y Directivas.",
        "Decisiones y Reglamentos.",
        "Recomendaciones y Dictámenes.",
        "Directivas y Recomendaciones."
      ],
      "correcta": 2,
      "justificacion": "El artículo 288 del TFUE especifica claramente que las recomendaciones y los dictámenes no son vinculantes.",
      "referencia": "Derecho Derivado"
    },
    {
      "id": "0500-28",
      "tema": "0500",
      "nivel": "oro",
      "enunciado": "El artículo 349 del TFUE otorga un estatuto especial a ciertos territorios alejados geográfica y económicamente. Se les conoce como:",
      "opciones": [
        "Zonas francas europeas.",
        "Regiones Ultraperiféricas (RUP).",
        "Regiones insulares periféricas.",
        "Países y Territorios de Ultramar (PTU)."
      ],
      "correcta": 1,
      "justificacion": "Canarias, junto a otros territorios de Francia y Portugal, ostenta el estatus de Región Ultraperiférica (RUP) en la UE.",
      "referencia": "Canarias en la UE (Art 349 TFUE)"
    },
    {
      "id": "0500-29",
      "tema": "0500",
      "nivel": "plata",
      "enunciado": "La Delegación del Gobierno de Canarias en Bruselas tiene como función principal:",
      "opciones": [
        "Aprobar la transposición de las Directivas en el Archipiélago.",
        "Ejercer el derecho a veto en el Consejo de la Unión Europea.",
        "Hacer el análisis, seguimiento y gestiones de las políticas europeas en defensa de los intereses de Canarias.",
        "Recaudar fondos estructurales de la Unión Europea directamente."
      ],
      "correcta": 2,
      "justificacion": "Su función es actuar como órgano de relación, información y seguimiento de los asuntos e intereses de la Comunidad Autónoma ante las instituciones comunitarias.",
      "referencia": "Delegación Canarias Bruselas"
    },
    {
      "id": "0500-30",
      "tema": "0500",
      "nivel": "plata",
      "enunciado": "En la jerarquía normativa comunitaria, los Tratados Fundacionales y sus modificaciones constituyen:",
      "opciones": [
        "El Derecho Derivado.",
        "El Derecho Originario.",
        "El Derecho Complementario.",
        "La Legislación Supletoria."
      ],
      "correcta": 1,
      "justificacion": "Los tratados constitutivos forman el Derecho Originario (o primario), que es el fundamento constitucional y prevalece sobre cualquier otra norma derivada.",
      "referencia": "Derecho Comunitario Originario"
    }
  ]
};

fs.writeFileSync(path.join(__dirname, 'src/data/tema0500.json'), JSON.stringify(tema0500, null, 2), 'utf8');
console.log('tema0500.json creado con 30 preguntas');
