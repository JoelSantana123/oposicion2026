const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/tema0500.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const newQuestions = [
  {
    id: "0500-31",
    tema: "0500",
    nivel: "oro",
    enunciado: "Como regla general, ¿cómo adopta sus decisiones el Consejo Europeo?",
    opciones: [
      "Por mayoría cualificada.",
      "Por mayoría absoluta.",
      "Por mayoría simple.",
      "Por consenso."
    ],
    correcta: 3,
    justificacion: "El Consejo Europeo se pronunciará por consenso, excepto cuando los Tratados dispongan otra cosa.",
    referencia: "Art. 15 TUE (Mayorías)"
  },
  {
    id: "0500-32",
    tema: "0500",
    nivel: "plata",
    enunciado: "¿Qué mayoría se exige en el Consejo Europeo para elegir a su Presidente?",
    opciones: [
      "Consenso.",
      "Mayoría absoluta.",
      "Mayoría cualificada.",
      "Mayoría simple."
    ],
    correcta: 2,
    justificacion: "El Consejo Europeo elegirá a su Presidente por mayoría cualificada para un mandato de 2,5 años.",
    referencia: "Art. 15 TUE (Mayorías)"
  },
  {
    id: "0500-33",
    tema: "0500",
    nivel: "oro",
    enunciado: "Salvo disposición en contrario de los Tratados, el Parlamento Europeo decidirá por:",
    opciones: [
      "Mayoría absoluta de sus miembros.",
      "Mayoría de los votos emitidos.",
      "Mayoría cualificada.",
      "Consenso."
    ],
    correcta: 1,
    justificacion: "El artículo 231 del TFUE establece que el Parlamento Europeo decidirá por mayoría de los votos emitidos.",
    referencia: "Art. 231 TFUE"
  },
  {
    id: "0500-34",
    tema: "0500",
    nivel: "oro",
    enunciado: "Para que se apruebe una moción de censura en el Parlamento Europeo contra la Comisión, se requiere:",
    opciones: [
      "Mayoría absoluta de los votos emitidos.",
      "Mayoría simple de los diputados que componen el Parlamento.",
      "Dos tercios de los votos emitidos que representen la mayoría de los diputados.",
      "Unanimidad."
    ],
    correcta: 2,
    justificacion: "Se requiere mayoría de dos tercios de los votos emitidos que representen, a su vez, la mayoría de los diputados que componen el Parlamento Europeo.",
    referencia: "Art. 234 TFUE"
  },
  {
    id: "0500-35",
    tema: "0500",
    nivel: "plata",
    enunciado: "En el Consejo (de la Unión Europea), la regla general para la toma de decisiones, a partir del 1 de noviembre de 2014, es:",
    opciones: [
      "La unanimidad.",
      "La mayoría absoluta.",
      "La mayoría cualificada.",
      "El consenso."
    ],
    correcta: 2,
    justificacion: "El Consejo se pronunciará por mayoría cualificada, excepto cuando los Tratados dispongan otra cosa.",
    referencia: "Art. 16 TUE"
  },
  {
    id: "0500-36",
    tema: "0500",
    nivel: "plata",
    enunciado: "¿Cómo se define la mayoría cualificada en el Consejo?",
    opciones: [
      "Mínimo del 55% de los miembros del Consejo que representen al 65% de la población de la Unión.",
      "Mínimo del 50% de los miembros que representen el 50% de la población.",
      "Mínimo del 65% de los miembros que representen el 55% de la población.",
      "Mínimo del 75% de los miembros que representen el 65% de la población."
    ],
    correcta: 0,
    justificacion: "Se alcanza con un mínimo del 55% de los Estados miembros (15 de 27) que representen al menos el 65% de la población total de la UE.",
    referencia: "Mayoría cualificada en el Consejo"
  },
  {
    id: "0500-37",
    tema: "0500",
    nivel: "bronce",
    enunciado: "¿Por qué mayoría aprueba el Consejo de la Unión Europea la composición del Comité Económico y Social y el Comité de las Regiones?",
    opciones: [
      "Mayoría absoluta.",
      "Mayoría simple.",
      "Unanimidad.",
      "Mayoría cualificada."
    ],
    correcta: 2,
    justificacion: "Tanto el Comité Económico y Social como el Comité de las Regiones (máx. 350 miembros cada uno) son nombrados por el Consejo por unanimidad, a propuesta de la Comisión.",
    referencia: "Art. 301 y 305 TFUE"
  },
  {
    id: "0500-38",
    tema: "0500",
    nivel: "oro",
    enunciado: "El procedimiento legislativo ordinario de la Unión Europea consiste en la adopción conjunta de actos jurídicos por parte de:",
    opciones: [
      "El Consejo Europeo y el Consejo, a propuesta de la Comisión.",
      "El Parlamento Europeo y el Consejo, a propuesta de la Comisión.",
      "El Parlamento Europeo y la Comisión, a propuesta del Consejo.",
      "La Comisión y el Consejo Europeo, a propuesta del Parlamento."
    ],
    correcta: 1,
    justificacion: "Conocido coloquialmente como 'Codecisión', consiste en la adopción conjunta por el Parlamento Europeo y el Consejo, a propuesta de la Comisión.",
    referencia: "Art. 289 TFUE"
  },
  {
    id: "0500-39",
    tema: "0500",
    nivel: "plata",
    enunciado: "El Tratado de Lisboa otorgó el mismo valor jurídico que a los Tratados a:",
    opciones: [
      "El Convenio Europeo de Derechos Humanos.",
      "El Tratado Constitutivo de la Comunidad Europea del Carbón y del Acero.",
      "La Carta de los Derechos Fundamentales de la Unión Europea.",
      "Los Reglamentos de la Comisión Europea."
    ],
    correcta: 2,
    justificacion: "El Tratado de Lisboa reconoce a la Carta de los Derechos Fundamentales de la Unión Europea el mismo valor jurídico que a los Tratados.",
    referencia: "Derecho Comunitario Originario"
  },
  {
    id: "0500-40",
    tema: "0500",
    nivel: "oro",
    enunciado: "¿Cuál de los siguientes NO es un acto legislativo vinculante en el derecho de la Unión Europea?",
    opciones: [
      "El Reglamento.",
      "La Recomendación.",
      "La Directiva.",
      "La Decisión."
    ],
    correcta: 1,
    justificacion: "Las recomendaciones y los dictámenes no son vinculantes, mientras que los reglamentos, las directivas y las decisiones sí lo son.",
    referencia: "Art. 288 TFUE"
  },
  {
    id: "0500-41",
    tema: "0500",
    nivel: "oro",
    enunciado: "La institución comunitaria que ejerce la función ejecutiva y vela por la aplicación de los Tratados es:",
    opciones: [
      "El Consejo de la Unión Europea.",
      "El Parlamento Europeo.",
      "El Tribunal de Cuentas.",
      "La Comisión Europea."
    ],
    correcta: 3,
    justificacion: "La Comisión Europea es el órgano ejecutivo de la UE. Promueve el interés general, vela por la aplicación de los tratados y gestiona los programas.",
    referencia: "La Comisión Europea"
  },
  {
    id: "0500-42",
    tema: "0500",
    nivel: "bronce",
    enunciado: "¿Qué institución prepara los trabajos del Consejo (de la UE)?",
    opciones: [
      "El Consejo Europeo.",
      "El COREPER.",
      "La Comisión.",
      "La Secretaría General del Parlamento."
    ],
    correcta: 1,
    justificacion: "El Comité de Representantes Permanentes (COREPER) se encarga de preparar los trabajos del Consejo y de realizar las tareas que este le confíe.",
    referencia: "COREPER"
  },
  {
    id: "0500-43",
    tema: "0500",
    nivel: "plata",
    enunciado: "Las decisiones del Consejo Europeo para proponer un candidato al cargo de Presidente de la Comisión se toman por:",
    opciones: [
      "Unanimidad.",
      "Consenso.",
      "Mayoría simple.",
      "Mayoría cualificada."
    ],
    correcta: 3,
    justificacion: "El Consejo Europeo propondrá al Parlamento Europeo un candidato a Presidente de la Comisión por mayoría cualificada.",
    referencia: "Nombramiento Presidente Comisión"
  },
  {
    id: "0500-44",
    tema: "0500",
    nivel: "plata",
    enunciado: "En relación a las Directivas europeas, es correcto afirmar que:",
    opciones: [
      "Son obligatorias en todos sus elementos y directamente aplicables.",
      "No tienen carácter vinculante.",
      "Obligan al Estado miembro en cuanto al resultado, dejando a las autoridades nacionales la elección de los medios.",
      "Son actos normativos adoptados exclusivamente por el Tribunal de Justicia."
    ],
    correcta: 2,
    justificacion: "La Directiva obliga al Estado miembro destinatario en cuanto al resultado que debe conseguirse, pero le deja libertad para elegir la forma y los medios (requiere transposición).",
    referencia: "Art. 288 TFUE"
  },
  {
    id: "0500-45",
    tema: "0500",
    nivel: "oro",
    enunciado: "¿Cuál es la función principal del Tribunal de Cuentas de la Unión Europea?",
    opciones: [
      "Controlar la legalidad de los actos del Consejo y del Parlamento.",
      "Dictar sentencias en recursos de casación contra Tribunales Nacionales.",
      "Fiscalizar o controlar las cuentas de la Unión.",
      "Aprobar el Presupuesto General de la UE."
    ],
    correcta: 2,
    justificacion: "El Tribunal de Cuentas realiza la fiscalización de las cuentas de la Unión, comprobando la legalidad y regularidad de los ingresos y gastos.",
    referencia: "Tribunal de Cuentas"
  },
  {
    id: "0500-46",
    tema: "0500",
    nivel: "bronce",
    enunciado: "¿Cuál de estos órganos consultivos de la UE representa a las organizaciones sociales e industriales?",
    opciones: [
      "El Comité de las Regiones.",
      "El Comité Económico y Social.",
      "El Defensor del Pueblo Europeo.",
      "El COREPER."
    ],
    correcta: 1,
    justificacion: "El Comité Económico y Social representa a las organizaciones de empresarios, de trabajadores y a otros sectores representativos de la sociedad civil.",
    referencia: "Comité Económico y Social"
  },
  {
    id: "0500-47",
    tema: "0500",
    nivel: "plata",
    enunciado: "La política monetaria de los Estados miembros cuya moneda es el euro (Eurosistema) es competencia de:",
    opciones: [
      "El Parlamento Europeo.",
      "El Consejo Europeo.",
      "El Banco Central Europeo.",
      "La Comisión Europea."
    ],
    correcta: 2,
    justificacion: "El BCE y los bancos centrales nacionales de los Estados cuya moneda es el euro constituyen el Eurosistema, el cual dirige la política monetaria de la Unión.",
    referencia: "Banco Central Europeo"
  },
  {
    id: "0500-48",
    tema: "0500",
    nivel: "oro",
    enunciado: "El Defensor del Pueblo Europeo está facultado para recibir las reclamaciones relativas a:",
    opciones: [
      "Casos de mala administración en la acción de las instituciones de la Unión, con exclusión del Tribunal de Justicia.",
      "Cualquier actuación de los Gobiernos nacionales de los Estados miembros.",
      "Decisiones judiciales de los tribunales de primera instancia de España.",
      "Mala administración exclusiva de la Comisión Europea."
    ],
    correcta: 0,
    justificacion: "Investiga casos de mala administración en la acción de las instituciones, órganos u organismos de la Unión, excepto el Tribunal de Justicia en el ejercicio de sus funciones jurisdiccionales.",
    referencia: "Defensor del Pueblo Europeo"
  },
  {
    id: "0500-49",
    tema: "0500",
    nivel: "plata",
    enunciado: "El Tratado que eliminó la estructura de los 'tres pilares' y otorgó personalidad jurídica única a la Unión Europea fue:",
    opciones: [
      "El Tratado de Niza.",
      "El Tratado de Ámsterdam.",
      "El Tratado de Lisboa.",
      "El Tratado de Roma."
    ],
    correcta: 2,
    justificacion: "El Tratado de Lisboa (2007) eliminó los tres pilares de la UE, creando una única entidad con personalidad jurídica.",
    referencia: "Tratado de Lisboa"
  },
  {
    id: "0500-50",
    tema: "0500",
    nivel: "oro",
    enunciado: "Si el Parlamento Europeo aprueba una moción de censura contra la Comisión:",
    opciones: [
      "Sólo el Presidente de la Comisión debe dimitir.",
      "Los miembros de la Comisión deberán dimitir colectivamente de sus cargos.",
      "El Parlamento es automáticamente disuelto.",
      "El Consejo Europeo debe ratificarla por unanimidad para que tenga efecto."
    ],
    correcta: 1,
    justificacion: "Si se aprueba una moción de censura, los miembros de la Comisión deberán dimitir colectivamente de sus cargos (incluido el Alto Representante en lo que respecta a sus funciones en la Comisión).",
    referencia: "Moción de censura"
  }
];

data.preguntas.push(...newQuestions);

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Se han añadido las 20 preguntas finales (total 50) al archivo.');
