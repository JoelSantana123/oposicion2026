const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/data/tema0100.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const newQuestions = [
  {
    id: "0100-21",
    tema: "0100",
    nivel: "bronce",
    enunciado: "Según el artículo 21 de la Constitución, respecto al derecho de reunión pacífica y sin armas en lugares de tránsito público y manifestaciones:",
    opciones: [
      "No precisará de ningún trámite previo, dado que es un derecho fundamental.",
      "Requerirá autorización previa de la autoridad competente.",
      "Se dará comunicación previa a la autoridad, que sólo podrá prohibirlas cuando existan razones fundadas de alteración del orden público, con peligro para personas y bienes.",
      "Deberá autorizarse por mayoría absoluta del Ayuntamiento correspondiente."
    ],
    correcta: 2,
    justificacion: "El art. 21.2 indica que en reuniones en tránsito público y manifestaciones se dará comunicación previa a la autoridad, que sólo podrá prohibirlas cuando existan razones fundadas de alteración del orden público, con peligro para personas o bienes.",
    referencia: "Art. 21.2 CE"
  },
  {
    id: "0100-22",
    tema: "0100",
    nivel: "oro",
    enunciado: "En relación con el derecho de asociación (Art. 22 de la CE), ¿cuáles de las siguientes asociaciones están expresamente prohibidas?",
    opciones: [
      "Las asociaciones sin fines de lucro.",
      "Las asociaciones secretas y las de carácter paramilitar.",
      "Las asociaciones que no cuenten con autorización judicial previa para su formación.",
      "Las asociaciones con fines políticos o sindicales."
    ],
    correcta: 1,
    justificacion: "El art. 22.5 de la Constitución prohíbe explícitamente las asociaciones secretas y las de carácter paramilitar.",
    referencia: "Art. 22.5 CE"
  },
  {
    id: "0100-23",
    tema: "0100",
    nivel: "oro",
    enunciado: "El artículo 23 de la Constitución reconoce a los ciudadanos el derecho a acceder en condiciones de igualdad a las funciones y cargos públicos:",
    opciones: [
      "Únicamente si son mayores de 21 años.",
      "Aprobando previamente una oposición libre y pública.",
      "Con los requisitos que señalen las leyes.",
      "Siempre que acrediten arraigo en el territorio."
    ],
    correcta: 2,
    justificacion: "El art. 23.2 señala que los ciudadanos tienen derecho a acceder en condiciones de igualdad a las funciones y cargos públicos, con los requisitos que señalen las leyes.",
    referencia: "Art. 23.2 CE"
  },
  {
    id: "0100-24",
    tema: "0100",
    nivel: "oro",
    enunciado: "Según el artículo 24 de la Constitución, todas las personas tienen derecho a obtener la tutela efectiva de los jueces y tribunales en el ejercicio de sus derechos e intereses legítimos, sin que, en ningún caso, pueda producirse:",
    opciones: [
      "Retraso indebido.",
      "Indefensión.",
      "Condena previa.",
      "Detención."
    ],
    correcta: 1,
    justificacion: "El art. 24.1 afirma que en ningún caso podrá producirse indefensión en la obtención de la tutela efectiva de los jueces y tribunales.",
    referencia: "Art. 24.1 CE"
  },
  {
    id: "0100-25",
    tema: "0100",
    nivel: "plata",
    enunciado: "Conforme al artículo 25 de la CE, las penas privativas de libertad y las medidas de seguridad estarán orientadas hacia:",
    opciones: [
      "La reeducación y reinserción social.",
      "El castigo ejemplarizante del infractor.",
      "La retribución del daño causado a las víctimas.",
      "La prevención general y especial de delitos."
    ],
    correcta: 0,
    justificacion: "El art. 25.2 establece que las penas privativas de libertad y las medidas de seguridad estarán orientadas hacia la reeducación y reinserción social y no podrán consistir en trabajos forzados.",
    referencia: "Art. 25.2 CE"
  },
  {
    id: "0100-26",
    tema: "0100",
    nivel: "plata",
    enunciado: "¿En qué ámbito prohíbe la Constitución Española los Tribunales de Honor?",
    opciones: [
      "Exclusivamente en el ámbito de la Administración Militar.",
      "En el ámbito de la Administración Civil y de las organizaciones profesionales.",
      "En el ámbito de las relaciones laborales y sindicales.",
      "En ningún ámbito, puesto que están permitidos si la ley los regula."
    ],
    correcta: 1,
    justificacion: "El artículo 26 prohíbe los Tribunales de Honor en el ámbito de la Administración civil y de las organizaciones profesionales.",
    referencia: "Art. 26 CE"
  },
  {
    id: "0100-27",
    tema: "0100",
    nivel: "oro",
    enunciado: "Respecto al derecho a la educación (art. 27), la Constitución dispone expresamente que la enseñanza básica es:",
    opciones: [
      "Optativa y gratuita.",
      "Obligatoria y gratuita.",
      "Obligatoria, pero podrá establecerse un copago.",
      "Obligatoria y gratuita sólo en centros públicos."
    ],
    correcta: 1,
    justificacion: "El art. 27.4 de la Constitución establece de forma taxativa: 'La enseñanza básica es obligatoria y gratuita'.",
    referencia: "Art. 27.4 CE"
  },
  {
    id: "0100-28",
    tema: "0100",
    nivel: "oro",
    enunciado: "Según el artículo 28, la ley que regule el ejercicio del derecho a la huelga establecerá las garantías precisas para asegurar:",
    opciones: [
      "El mantenimiento de la rentabilidad de las empresas afectadas.",
      "El acuerdo rápido entre patronal y sindicatos.",
      "El mantenimiento de los servicios esenciales de la comunidad.",
      "La mediación obligatoria del Estado."
    ],
    correcta: 2,
    justificacion: "El artículo 28.2 reconoce el derecho a la huelga y especifica que la ley que lo regule establecerá garantías para asegurar el mantenimiento de los servicios esenciales de la comunidad.",
    referencia: "Art. 28.2 CE"
  },
  {
    id: "0100-29",
    tema: "0100",
    nivel: "plata",
    enunciado: "El derecho de petición individual y colectiva reconocido en el artículo 29 de la Constitución, deberá ejercerse:",
    opciones: [
      "De forma verbal o escrita, indistintamente.",
      "Exclusivamente por escrito.",
      "De forma presencial ante la autoridad competente.",
      "Mediante comparecencia pública."
    ],
    correcta: 1,
    justificacion: "El artículo 29.1 señala que los españoles tendrán el derecho de petición individual y colectiva, por escrito, en la forma y con los efectos que determine la ley.",
    referencia: "Art. 29.1 CE"
  },
  {
    id: "0100-30",
    tema: "0100",
    nivel: "oro",
    enunciado: "Conforme al artículo 30, la ley fijará las obligaciones militares de los españoles y regulará, con las debidas garantías:",
    opciones: [
      "El derecho a portar armas.",
      "El servicio militar profesional obligatorio.",
      "La objeción de conciencia.",
      "La movilización general de los ciudadanos."
    ],
    correcta: 2,
    justificacion: "El artículo 30.2 indica que la ley regulará la objeción de conciencia, así como las demás causas de exención del servicio militar obligatorio.",
    referencia: "Art. 30.2 CE"
  },
  {
    id: "0100-31",
    tema: "0100",
    nivel: "bronce",
    enunciado: "El sistema tributario español, según el artículo 31, deberá inspirarse en los principios de igualdad y progresividad, y en ningún caso tendrá alcance:",
    opciones: [
      "Desproporcionado.",
      "Recaudatorio.",
      "Confiscatorio.",
      "Discriminatorio."
    ],
    correcta: 2,
    justificacion: "El art. 31.1 declara que el sistema tributario justo inspirado en igualdad y progresividad no tendrá, en ningún caso, alcance confiscatorio.",
    referencia: "Art. 31.1 CE"
  },
  {
    id: "0100-32",
    tema: "0100",
    nivel: "bronce",
    enunciado: "Respecto al matrimonio, el artículo 32 de la Constitución reconoce el derecho a contraerlo a:",
    opciones: [
      "Los españoles, conforme al Derecho Canónico.",
      "El hombre y la mujer, con plena igualdad jurídica.",
      "Todos los ciudadanos, siempre que sean mayores de edad.",
      "Las familias, para garantizar la protección de la infancia."
    ],
    correcta: 1,
    justificacion: "El art. 32.1 dispone que el hombre y la mujer tienen derecho a contraer matrimonio con plena igualdad jurídica.",
    referencia: "Art. 32.1 CE"
  },
  {
    id: "0100-33",
    tema: "0100",
    nivel: "plata",
    enunciado: "¿Qué delimitará el contenido del derecho a la propiedad privada y a la herencia según la Constitución?",
    opciones: [
      "El interés general del Estado.",
      "Su función social, de acuerdo con las leyes.",
      "Los Presupuestos Generales del Estado.",
      "La potestad tributaria."
    ],
    correcta: 1,
    justificacion: "El artículo 33.2 señala que la función social de estos derechos delimitará su contenido, de acuerdo con las leyes.",
    referencia: "Art. 33.2 CE"
  },
  {
    id: "0100-34",
    tema: "0100",
    nivel: "bronce",
    enunciado: "Según el artículo 36, la estructura interna y el funcionamiento de los Colegios Profesionales deberán ser:",
    opciones: [
      "Democráticos.",
      "Plurales y descentralizados.",
      "Independientes de las Administraciones Públicas.",
      "Aprobados por Ley Orgánica."
    ],
    correcta: 0,
    justificacion: "El artículo 36 establece que la ley regulará las peculiaridades propias del régimen jurídico de los Colegios Profesionales y que su estructura interna y funcionamiento deberán ser democráticos.",
    referencia: "Art. 36 CE"
  },
  {
    id: "0100-35",
    tema: "0100",
    nivel: "plata",
    enunciado: "La ley garantizará el derecho a la negociación colectiva laboral y la fuerza vinculante de:",
    opciones: [
      "Los convenios colectivos.",
      "Los contratos de trabajo.",
      "Los estatutos sindicales.",
      "Las sentencias laborales."
    ],
    correcta: 0,
    justificacion: "El art. 37.1 establece que la ley garantizará el derecho a la negociación colectiva laboral entre los representantes de los trabajadores y empresarios, así como la fuerza vinculante de los convenios.",
    referencia: "Art. 37.1 CE"
  },
  {
    id: "0100-36",
    tema: "0100",
    nivel: "plata",
    enunciado: "El artículo 38 de la Constitución reconoce la libertad de empresa en el marco de:",
    opciones: [
      "La Unión Europea.",
      "Un Estado centralizado.",
      "La economía de mercado.",
      "La solidaridad interterritorial."
    ],
    correcta: 2,
    justificacion: "El art. 38 reconoce la libertad de empresa en el marco de la economía de mercado.",
    referencia: "Art. 38 CE"
  },
  {
    id: "0100-37",
    tema: "0100",
    nivel: "plata",
    enunciado: "¿A qué Capítulo del Título I pertenecen derechos como la protección de la salud o el acceso a una vivienda digna?",
    opciones: [
      "De los derechos fundamentales y de las libertades públicas.",
      "De los derechos y deberes de los ciudadanos.",
      "De los principios rectores de la política social y económica.",
      "De las garantías de las libertades y derechos fundamentales."
    ],
    correcta: 2,
    justificacion: "La salud (art. 43) y la vivienda digna (art. 47) están ubicados en el Capítulo III del Título I, referidos a los principios rectores de la política social y económica (art. 39 a 52).",
    referencia: "Cap. III Título I CE"
  },
  {
    id: "0100-38",
    tema: "0100",
    nivel: "oro",
    enunciado: "Los derechos y libertades reconocidos en el Capítulo II del Título I (arts. 14 a 38) vinculan a:",
    opciones: [
      "Todos los poderes públicos.",
      "Únicamente a los jueces y tribunales.",
      "Al poder ejecutivo exclusivamente.",
      "Solamente a la Administración del Estado."
    ],
    correcta: 0,
    justificacion: "El artículo 53.1 indica de forma clara que los derechos y libertades reconocidos en el Capítulo II vinculan a todos los poderes públicos.",
    referencia: "Art. 53.1 CE"
  },
  {
    id: "0100-39",
    tema: "0100",
    nivel: "oro",
    enunciado: "El Defensor del Pueblo será elegido por las Cortes Generales para un periodo de:",
    opciones: [
      "4 años.",
      "5 años.",
      "6 años.",
      "De forma vitalicia."
    ],
    correcta: 1,
    justificacion: "Según la Ley Orgánica 3/1981, el Defensor del Pueblo será elegido por las Cortes Generales para un periodo de 5 años.",
    referencia: "LO 3/1981 (Art. 54 CE)"
  },
  {
    id: "0100-40",
    tema: "0100",
    nivel: "oro",
    enunciado: "El artículo 55 de la CE permite la suspensión de ciertos derechos cuando se acuerde la declaración del estado de:",
    opciones: [
      "Alarma o excepción.",
      "Alarma o sitio.",
      "Excepción o de sitio.",
      "Sólo en el estado de sitio."
    ],
    correcta: 2,
    justificacion: "El art. 55.1 permite la suspensión de los derechos que relaciona cuando se acuerde la declaración del estado de excepción o de sitio (no permite suspender derechos en el estado de alarma).",
    referencia: "Art. 55.1 CE"
  },
  {
    id: "0100-41",
    tema: "0100",
    nivel: "bronce",
    enunciado: "Según el artículo 56, el Rey asume la más alta representación del Estado español en las relaciones internacionales, especialmente con:",
    opciones: [
      "Las naciones de la Unión Europea.",
      "Las naciones de su comunidad histórica.",
      "Los países vecinos y limítrofes.",
      "Las organizaciones intergubernamentales."
    ],
    correcta: 1,
    justificacion: "El art. 56.1 establece que el Rey asume la más alta representación en las relaciones internacionales, especialmente con las naciones de su comunidad histórica.",
    referencia: "Art. 56.1 CE"
  },
  {
    id: "0100-42",
    tema: "0100",
    nivel: "oro",
    enunciado: "La sucesión en el trono seguirá el orden regular de primogenitura y representación. Según el artículo 57, en el mismo grado será preferido:",
    opciones: [
      "El de más edad, sin importar el sexo.",
      "El varón a la mujer.",
      "La mujer al varón.",
      "El elegido por las Cortes Generales."
    ],
    correcta: 1,
    justificacion: "El artículo 57.1 indica que en el mismo grado se prefiere el varón a la mujer, y en el mismo sexo, la persona de más edad a la de menos.",
    referencia: "Art. 57.1 CE"
  },
  {
    id: "0100-43",
    tema: "0100",
    nivel: "plata",
    enunciado: "La Reina consorte o el consorte de la Reina no podrán asumir funciones constitucionales, salvo lo dispuesto para:",
    opciones: [
      "El mando de las Fuerzas Armadas.",
      "La Regencia.",
      "La disolución de las Cámaras.",
      "La presidencia del Consejo de Ministros."
    ],
    correcta: 1,
    justificacion: "El artículo 58 dispone que no podrán asumir funciones constitucionales salvo lo dispuesto para la Regencia.",
    referencia: "Art. 58 CE"
  },
  {
    id: "0100-44",
    tema: "0100",
    nivel: "plata",
    enunciado: "Para ejercer la Regencia del Rey (art. 59) es requisito indispensable:",
    opciones: [
      "Ser nombrado en el testamento del Rey difunto.",
      "Ser ascendiente directo del Rey.",
      "Ser español y mayor de edad.",
      "Ser aprobado por el Gobierno de la Nación."
    ],
    correcta: 2,
    justificacion: "El artículo 59.4 establece que para ejercer la Regencia es preciso ser español y mayor de edad (¡Ojo! español, no exige ser español de origen).",
    referencia: "Art. 59.4 CE"
  },
  {
    id: "0100-45",
    tema: "0100",
    nivel: "plata",
    enunciado: "En relación a la tutela del Rey menor (art. 60), el cargo de tutor:",
    opciones: [
      "Es compatible con cualquier representación política.",
      "Podrá ser ejercido por las Cortes en pleno.",
      "Puede acumularse con el cargo de Regente en cualquier caso.",
      "Es incompatible con el de todo cargo o representación política."
    ],
    correcta: 3,
    justificacion: "El artículo 60.2 indica explícitamente que el ejercicio de la tutela es incompatible con el de todo cargo o representación política.",
    referencia: "Art. 60.2 CE"
  },
  {
    id: "0100-46",
    tema: "0100",
    nivel: "oro",
    enunciado: "¿A quién corresponde expedir los decretos acordados en el Consejo de Ministros, conforme al art. 62 de la CE?",
    opciones: [
      "Al Presidente del Gobierno.",
      "Al Ministro de la Presidencia.",
      "A las Cortes Generales.",
      "Al Rey."
    ],
    correcta: 3,
    justificacion: "El artículo 62 f) de la Constitución atribuye al Rey la función de expedir los decretos acordados en el Consejo de Ministros (los Reales Decretos).",
    referencia: "Art. 62.f CE"
  },
  {
    id: "0100-47",
    tema: "0100",
    nivel: "oro",
    enunciado: "Los actos del Rey serán refrendados por el Presidente del Gobierno y, en su caso, por los Ministros competentes. De los actos del Rey serán responsables:",
    opciones: [
      "El propio Rey.",
      "Las personas que los refrenden.",
      "Las Cortes Generales.",
      "El Tribunal Constitucional."
    ],
    correcta: 1,
    justificacion: "El artículo 64.2 indica que de los actos del Rey serán responsables las personas que los refrenden (quedando el Rey exento de responsabilidad según el art. 56).",
    referencia: "Art. 64.2 CE"
  },
  {
    id: "0100-48",
    tema: "0100",
    nivel: "bronce",
    enunciado: "Según el artículo 66 de la CE, las Cortes Generales ejercen la potestad legislativa del Estado, aprueban sus Presupuestos y:",
    opciones: [
      "Nombran al Presidente del Gobierno directamente.",
      "Ejercen el mando de las Fuerzas Armadas.",
      "Controlan la acción del Gobierno.",
      "Declaran los estados de alarma y excepción."
    ],
    correcta: 2,
    justificacion: "El art. 66.2 establece que las Cortes Generales ejercen la potestad legislativa del Estado, aprueban sus Presupuestos, controlan la acción del Gobierno y tienen las demás competencias que les atribuya la CE.",
    referencia: "Art. 66.2 CE"
  },
  {
    id: "0100-49",
    tema: "0100",
    nivel: "plata",
    enunciado: "¿Cuál es el mandato de los Diputados del Congreso según la Constitución Española (Art. 68)?",
    opciones: [
      "4 años.",
      "5 años.",
      "Permanente hasta la convocatoria de referéndum.",
      "3 años prorrogables a 5."
    ],
    correcta: 0,
    justificacion: "El artículo 68.4 dispone que el Congreso es elegido por cuatro años. El mandato de los Diputados termina cuatro años después de su elección o el día de la disolución de la Cámara.",
    referencia: "Art. 68.4 CE"
  },
  {
    id: "0100-50",
    tema: "0100",
    nivel: "oro",
    enunciado: "El Senado es la Cámara de representación territorial. En cada provincia peninsular se elegirán, por regla general:",
    opciones: [
      "3 Senadores.",
      "4 Senadores.",
      "Un número proporcional a su población.",
      "2 Senadores."
    ],
    correcta: 1,
    justificacion: "El artículo 69.2 determina que en cada provincia se elegirán 4 Senadores por sufragio universal, libre, igual, directo y secreto por los votantes de cada una de ellas.",
    referencia: "Art. 69.2 CE"
  }
];

data.preguntas.push(...newQuestions);

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
console.log('Se han añadido las 30 preguntas nuevas al archivo.');
