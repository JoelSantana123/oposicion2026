const fs = require('fs');
const path = require('path');

const tema2600 = {
  "tema_id": "2600",
  "tema_nombre": "Jurisdicción Contencioso-Administrativa (Ley 29/1998)",
  "preguntas": [
    {
      "id": "2600-01",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "La Ley reguladora de la Jurisdicción Contencioso-Administrativa es:",
      "opciones": [
        "Ley 30/1992, de 26 de noviembre.",
        "Ley 29/1998, de 13 de julio.",
        "Ley 39/2015, de 1 de octubre.",
        "Ley Orgánica 6/1985, de 1 de julio."
      ],
      "correcta": 1,
      "justificacion": "La Ley 29/1998, de 13 de julio, es la norma reguladora de la Jurisdicción Contencioso-Administrativa (LJCA).",
      "referencia": "Ley 29/1998 LJCA"
    },
    {
      "id": "2600-02",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "El orden jurisdiccional contencioso-administrativo conoce de las pretensiones derivadas de:",
      "opciones": [
        "Solo los actos administrativos de carácter sancionador.",
        "La actuación de las Administraciones Públicas sujeta al Derecho Administrativo, las disposiciones reglamentarias y los decretos legislativos.",
        "Solo los contratos civiles de la Administración.",
        "Cualquier conflicto entre particulares en que intervenga una Administración."
      ],
      "correcta": 1,
      "justificacion": "El artículo 1 de la LJCA atribuye al orden contencioso-administrativo el conocimiento de las pretensiones relativas a la actuación de las AAPP sujeta al Derecho Administrativo, disposiciones reglamentarias y decretos legislativos.",
      "referencia": "Art. 1 Ley 29/1998"
    },
    {
      "id": "2600-03",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "¿Cuál es el plazo general para interponer el recurso contencioso-administrativo contra actos expresos?",
      "opciones": [
        "15 días hábiles.",
        "1 mes.",
        "2 meses desde la notificación del acto.",
        "6 meses."
      ],
      "correcta": 2,
      "justificacion": "El artículo 46.1 de la LJCA fija en 2 meses el plazo para interponer el recurso contencioso-administrativo contra actos expresos, contados desde la notificación.",
      "referencia": "Art. 46.1 Ley 29/1998"
    },
    {
      "id": "2600-04",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "Contra la desestimación presunta por silencio administrativo, el recurso contencioso puede interponerse:",
      "opciones": [
        "Solo en el plazo de 2 meses desde que se produjo el silencio.",
        "En cualquier momento, sin sujeción a plazo.",
        "En el plazo de 6 meses desde que se produjo el silencio.",
        "Solo después de haber presentado queja ante la Administración."
      ],
      "correcta": 1,
      "justificacion": "El artículo 46.1 párrafo 2 establece que cuando el acto es presunto (silencio negativo), el recurso puede interponerse en cualquier momento a partir del día siguiente a aquel en que se produzca el acto presunto.",
      "referencia": "Art. 46.1 Ley 29/1998"
    },
    {
      "id": "2600-05",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "¿Qué órganos integran el orden jurisdiccional contencioso-administrativo?",
      "opciones": [
        "Solo el Tribunal Supremo y la Audiencia Nacional.",
        "Juzgados de lo contencioso-administrativo, Juzgados Centrales de lo contencioso-administrativo, Salas de lo contencioso-administrativo de los TSJ, Sala de lo contencioso-administrativo de la Audiencia Nacional y Sala de lo contencioso-administrativo del Tribunal Supremo.",
        "Solo los Juzgados de lo contencioso-administrativo y el Tribunal Supremo.",
        "Los Tribunales Superiores de Justicia únicamente."
      ],
      "correcta": 1,
      "justificacion": "El artículo 7 de la LJCA enumera los órganos del orden jurisdiccional contencioso: Juzgados de lo C-A (unipersonales), Juzgados Centrales, Salas TSJ, Sala AN y Sala TS.",
      "referencia": "Art. 7 Ley 29/1998"
    },
    {
      "id": "2600-06",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "¿Cuál es el órgano competente para conocer, en única instancia, de los recursos contencioso-administrativos contra actos y disposiciones del Consejo de Ministros?",
      "opciones": [
        "La Audiencia Nacional.",
        "El Tribunal Superior de Justicia de Madrid.",
        "La Sala de lo contencioso-administrativo del Tribunal Supremo.",
        "Los Juzgados Centrales de lo contencioso-administrativo."
      ],
      "correcta": 2,
      "justificacion": "El artículo 12.1.a) atribuye a la Sala de lo contencioso-administrativo del Tribunal Supremo el conocimiento en única instancia de los recursos contra actos del Consejo de Ministros.",
      "referencia": "Art. 12.1.a) Ley 29/1998"
    },
    {
      "id": "2600-07",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "Los Tribunales Superiores de Justicia de las CCAA conocen en única instancia de los recursos contra:",
      "opciones": [
        "Actos del Gobierno de la Nación.",
        "Actos y disposiciones del Consejo de Gobierno de la CCAA y de sus Consejerías.",
        "Solo los actos de los Cabildos Insulares.",
        "Solo disposiciones reglamentarias de los Ayuntamientos."
      ],
      "correcta": 1,
      "justificacion": "El artículo 10.1.a) de la LJCA atribuye a los TSJ el conocimiento en única instancia de los recursos contra actos y disposiciones del Consejo de Gobierno y Consejerías de la CCAA.",
      "referencia": "Art. 10.1.a) Ley 29/1998"
    },
    {
      "id": "2600-08",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "El recurso de casación contencioso-administrativo ante el Tribunal Supremo procede contra:",
      "opciones": [
        "Cualquier sentencia de los Juzgados de lo contencioso-administrativo.",
        "Las sentencias de los Juzgados Centrales y las sentencias de los TSJ, cuando el TS aprecia interés casacional objetivo.",
        "Solo las sentencias que impongan una condena superior a 600.000 euros.",
        "Únicamente las sentencias de la Audiencia Nacional."
      ],
      "correcta": 1,
      "justificacion": "El artículo 86 y ss. de la LJCA (reforma 2015) prevé el recurso de casación ante el TS cuando la sala de admisión aprecia 'interés casacional objetivo para la formación de jurisprudencia'.",
      "referencia": "Arts. 86-93 Ley 29/1998"
    },
    {
      "id": "2600-09",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "¿Qué partes intervienen necesariamente en el proceso contencioso-administrativo?",
      "opciones": [
        "Solo el demandante y el órgano judicial.",
        "El demandante (recurrente), la Administración demandada y, en su caso, los codemandados.",
        "El demandante, el Ministerio Fiscal y la Administración.",
        "El demandante y el Defensor del Pueblo."
      ],
      "correcta": 1,
      "justificacion": "Las partes en el proceso contencioso son el demandante o recurrente (persona física/jurídica), la Administración demandada y, en su caso, los codemandados (terceros con interés legítimo).",
      "referencia": "Arts. 19-22 Ley 29/1998"
    },
    {
      "id": "2600-10",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "La medida cautelar de suspensión de la ejecución del acto impugnado en el proceso contencioso se puede solicitar:",
      "opciones": [
        "Solo al inicio del proceso.",
        "En cualquier momento del proceso, incluso antes de la interposición del recurso en casos de urgencia.",
        "Solo en la fase de conclusiones.",
        "Únicamente si hay daños irreparables y se presta caución."
      ],
      "correcta": 1,
      "justificacion": "El artículo 129 de la LJCA permite solicitar medidas cautelares en cualquier momento del proceso, e incluso antes de la interposición en casos de urgencia (medidas cautelarísimas).",
      "referencia": "Arts. 129-136 Ley 29/1998"
    },
    {
      "id": "2600-11",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "El juicio sobre la adopción de medidas cautelares se basa en la ponderación de:",
      "opciones": [
        "Solo la apariencia de buen derecho ('fumus boni iuris').",
        "Solo el periculum in mora (peligro de daño irreparable por demora).",
        "La apariencia de buen derecho y el periculum in mora, así como la perturbación grave de los intereses generales.",
        "Exclusivamente la solvencia económica del recurrente."
      ],
      "correcta": 2,
      "justificacion": "El artículo 130 de la LJCA exige ponderar la apariencia de buen derecho, el peligro de daño irreparable por la demora y la posible perturbación grave al interés general.",
      "referencia": "Art. 130 Ley 29/1998"
    },
    {
      "id": "2600-12",
      "tema": "2600",
      "nivel": "bronce",
      "enunciado": "¿Qué es el procedimiento abreviado en la jurisdicción contencioso-administrativa?",
      "opciones": [
        "Un procedimiento para grandes empresas.",
        "Un procedimiento simplificado aplicable a asuntos de cuantía inferior a 30.000 euros o en materias tasadas, que se resuelve en una sola vista oral.",
        "El procedimiento ordinario cuando hay conformidad de ambas partes.",
        "Un procedimiento exclusivo para materias de personal."
      ],
      "correcta": 1,
      "justificacion": "El artículo 78 de la LJCA regula el procedimiento abreviado para asuntos de cuantía inferior a 30.000 euros o determinadas materias, con celebración de vista oral única.",
      "referencia": "Art. 78 Ley 29/1998"
    },
    {
      "id": "2600-13",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "¿Puede impugnarse un reglamento directamente por la vía contencioso-administrativa?",
      "opciones": [
        "No, los reglamentos solo pueden impugnarse indirectamente.",
        "Sí, el recurso directo contra reglamentos es posible, sin necesidad de impugnar antes actos de aplicación.",
        "Solo si el reglamento ha causado perjuicio concreto al recurrente.",
        "Solo los reglamentos del Consejo de Ministros."
      ],
      "correcta": 1,
      "justificacion": "El artículo 25 de la LJCA permite el recurso directo contra disposiciones generales (reglamentos) por ser contrarias al ordenamiento jurídico.",
      "referencia": "Art. 25 Ley 29/1998"
    },
    {
      "id": "2600-14",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "¿Qué plazo tiene la Administración para remitir el expediente administrativo al tribunal tras ser emplazada?",
      "opciones": [
        "15 días hábiles.",
        "20 días hábiles.",
        "1 mes.",
        "2 meses."
      ],
      "correcta": 1,
      "justificacion": "El artículo 48 de la LJCA establece que la Administración emplazada debe remitir el expediente al órgano jurisdiccional en el plazo de 20 días hábiles.",
      "referencia": "Art. 48 Ley 29/1998"
    },
    {
      "id": "2600-15",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "El escrito de demanda en el proceso contencioso-administrativo ordinario debe presentarse en el plazo de:",
      "opciones": [
        "15 días hábiles.",
        "20 días hábiles.",
        "1 mes desde que se reciba la notificación del expediente.",
        "2 meses."
      ],
      "correcta": 1,
      "justificacion": "El artículo 52 de la LJCA establece un plazo de 20 días hábiles para formular la demanda, tras haber recibido el expediente administrativo.",
      "referencia": "Art. 52 Ley 29/1998"
    },
    {
      "id": "2600-16",
      "tema": "2600",
      "nivel": "bronce",
      "enunciado": "Una vez firme una sentencia contencioso-administrativa que anula un acto, ¿a quién corresponde ejecutarla?",
      "opciones": [
        "Al Tribunal que la dictó, con intervención de la Administración.",
        "A la propia Administración que dictó el acto anulado.",
        "A un juzgado de ejecución civil.",
        "Al Ministerio de Justicia."
      ],
      "correcta": 1,
      "justificacion": "El artículo 103 de la LJCA establece que corresponde a la Administración llevar a puro y debido efecto las sentencias firmes y practicar lo que exija su cumplimiento.",
      "referencia": "Art. 103 Ley 29/1998"
    },
    {
      "id": "2600-17",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "¿Cuándo puede el tribunal acordar la ejecución forzosa de una sentencia a instancia de parte?",
      "opciones": [
        "En cualquier momento, inmediatamente tras la sentencia.",
        "Transcurridos 2 meses desde la comunicación de la sentencia a la Administración sin que esta la haya cumplido.",
        "Solo si la Administración reconoce expresamente que no la cumplirá.",
        "Solo si hay daños verificados económicamente."
      ],
      "correcta": 1,
      "justificacion": "El artículo 104 de la LJCA establece que si transcurridos 2 meses desde la comunicación de la sentencia la Administración no la ha cumplido, los interesados pueden instar al tribunal la ejecución forzosa.",
      "referencia": "Art. 104 Ley 29/1998"
    },
    {
      "id": "2600-18",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "¿Puede una Administración Pública ser parte demandante en el proceso contencioso-administrativo?",
      "opciones": [
        "No, las AAPP solo pueden ser demandadas.",
        "Sí, cuando impugne actos o disposiciones de otra Administración Pública.",
        "Solo el Estado puede demandar a las CCAA.",
        "Solo si hay un conflicto de competencias."
      ],
      "correcta": 1,
      "justificacion": "El artículo 20 de la LJCA reconoce legitimación activa a las Administraciones Públicas para impugnar los actos y disposiciones de otras Administraciones.",
      "referencia": "Art. 20 Ley 29/1998"
    },
    {
      "id": "2600-19",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "El procedimiento especial para la protección de los derechos fundamentales (art. 114 LJCA) se caracteriza por:",
      "opciones": [
        "No tener plazo de interposición.",
        "Tramitarse con carácter urgente y preferente, con plazos reducidos.",
        "No requerir asistencia de abogado.",
        "Ser competencia exclusiva del Tribunal Constitucional."
      ],
      "correcta": 1,
      "justificacion": "El artículo 114 y ss. de la LJCA prevén un procedimiento especial de protección de derechos fundamentales que se tramita con carácter urgente y preferente, con plazos más breves.",
      "referencia": "Arts. 114-122 Ley 29/1998"
    },
    {
      "id": "2600-20",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "¿En qué plazo debe interponerse el recurso contencioso especial de protección de derechos fundamentales?",
      "opciones": [
        "15 días hábiles.",
        "1 mes.",
        "2 meses.",
        "10 días hábiles."
      ],
      "correcta": 3,
      "justificacion": "El artículo 115.1 de la LJCA establece un plazo de 10 días hábiles para interponer el recurso contencioso-administrativo en el procedimiento especial de protección de derechos fundamentales.",
      "referencia": "Art. 115.1 Ley 29/1998"
    },
    {
      "id": "2600-21",
      "tema": "2600",
      "nivel": "bronce",
      "enunciado": "El principio de 'reformatio in peius' en el proceso contencioso significa que:",
      "opciones": [
        "La Administración siempre puede agravar la resolución al resolver el recurso.",
        "El tribunal no puede empeorar la situación del recurrente en el mismo recurso más allá de lo pedido.",
        "Solo se aplica en recursos de casación.",
        "No existe este principio en la LJCA."
      ],
      "correcta": 1,
      "justificacion": "El principio de prohibición de reformatio in peius impide al tribunal o la Administración empeorar la situación del recurrente más allá de lo que se había impugnado.",
      "referencia": "Principio general del proceso / Art. 33 LJCA"
    },
    {
      "id": "2600-22",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "La 'cuestión de ilegalidad' ante los TSJ o el TS (arts. 123-126 LJCA) puede plantearse cuando:",
      "opciones": [
        "Cualquier ciudadano duda de la legalidad de un reglamento.",
        "Un Juzgado de lo contencioso dicta sentencia firme aplicando un reglamento y aprecia que podría ser ilegal, pero su enjuiciamiento excede su competencia.",
        "La Administración cuestiona la constitucionalidad de una ley.",
        "Un partido político impugna un decreto."
      ],
      "correcta": 1,
      "justificacion": "Los artículos 123-126 de la LJCA prevén la cuestión de ilegalidad que un órgano jurisdiccional plantea ante el tribunal competente cuando, tras dictar sentencia firme, aprecia que el reglamento aplicado puede ser ilegal.",
      "referencia": "Arts. 123-126 Ley 29/1998"
    },
    {
      "id": "2600-23",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "¿Qué efecto tiene la sentencia que estima un recurso contencioso contra un reglamento?",
      "opciones": [
        "Solo produce efectos entre las partes del proceso.",
        "Declara nulo el reglamento con efectos erga omnes (para todos), publicándose en el boletín oficial correspondiente.",
        "Suspende el reglamento hasta que el Gobierno lo modifique.",
        "Solo surte efectos para el recurrente."
      ],
      "correcta": 1,
      "justificacion": "El artículo 72.2 de la LJCA establece que la sentencia que anula un reglamento produce efectos generales (erga omnes) desde que se publica en el boletín oficial correspondiente.",
      "referencia": "Art. 72.2 Ley 29/1998"
    },
    {
      "id": "2600-24",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "¿Está el Ministerio Fiscal obligado a intervenir en todos los procesos contencioso-administrativos?",
      "opciones": [
        "Sí, siempre.",
        "No, solo en los procedimientos especiales de protección de derechos fundamentales y en los recursos contra resoluciones sancionadoras.",
        "Solo en asuntos de más de 1 millón de euros.",
        "Solo cuando lo solicite la Administración demandada."
      ],
      "correcta": 1,
      "justificacion": "El artículo 8.2 de la LJCA establece la intervención preceptiva del Ministerio Fiscal en el procedimiento especial de protección de derechos fundamentales y en la tramitación de cuestiones de ilegalidad.",
      "referencia": "Art. 8.2 Ley 29/1998"
    },
    {
      "id": "2600-25",
      "tema": "2600",
      "nivel": "bronce",
      "enunciado": "¿Qué se entiende por 'inactividad' de la Administración como objeto del recurso contencioso?",
      "opciones": [
        "El retraso en dictar actos de trámite.",
        "La omisión de actos o prestaciones a que esté obligada la Administración por una norma, habiendo sido requerida para que los realice.",
        "La pasividad del funcionario responsable.",
        "Solo el silencio negativo de resoluciones."
      ],
      "correcta": 1,
      "justificacion": "El artículo 29 de la LJCA permite impugnar la inactividad de la Administración: cuando esté obligada por norma a realizar un acto o prestación y no lo haga tras ser requerida.",
      "referencia": "Art. 29 Ley 29/1998"
    },
    {
      "id": "2600-26",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "¿Cuál es el plazo para presentar el requerimiento a la Administración antes de interponer el recurso por inactividad (art. 29 LJCA)?",
      "opciones": [
        "No hay plazo, puede presentarse en cualquier momento.",
        "Se requiere previamente por escrito, y si transcurren 3 meses sin respuesta, puede interponerse el recurso.",
        "1 mes desde la inactividad.",
        "6 meses."
      ],
      "correcta": 1,
      "justificacion": "El artículo 29 de la LJCA exige que antes de interponer el recurso por inactividad, el interesado requiera a la Administración; si transcurren 3 meses sin respuesta, puede acudir a la vía judicial.",
      "referencia": "Art. 29 Ley 29/1998"
    },
    {
      "id": "2600-27",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "¿Cuándo procede el recurso contencioso contra la vía de hecho de la Administración (art. 30 LJCA)?",
      "opciones": [
        "Cuando la Administración dicta un acto sin competencia.",
        "Cuando la Administración realiza materialmente una actuación sin amparo en un acto administrativo previo válido.",
        "Cuando el funcionario comete una infracción penal.",
        "Solo en actuaciones de la Guardia Civil."
      ],
      "correcta": 1,
      "justificacion": "El artículo 30 de la LJCA permite recurrir la 'vía de hecho': actuación material de la Administración sin título jurídico habilitante (acto administrativo previo) o con flagrante infracción del ordenamiento.",
      "referencia": "Art. 30 Ley 29/1998"
    },
    {
      "id": "2600-28",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "¿Tiene el TSJ de Canarias competencia para conocer de los recursos de apelación contra sentencias de los Juzgados de lo contencioso-administrativo de Canarias?",
      "opciones": [
        "No, esa competencia es del Tribunal Supremo.",
        "Sí, la Sala de lo contencioso-administrativo del TSJ de Canarias conoce en apelación de las sentencias de los Juzgados de lo C-A.",
        "Solo de los asuntos que superen 600.000 euros.",
        "Solo de los asuntos de personal."
      ],
      "correcta": 1,
      "justificacion": "El artículo 10.2 de la LJCA atribuye a los TSJ el conocimiento de los recursos de apelación contra las resoluciones de los Juzgados de lo contencioso-administrativo de su ámbito territorial.",
      "referencia": "Art. 10.2 Ley 29/1998"
    },
    {
      "id": "2600-29",
      "tema": "2600",
      "nivel": "bronce",
      "enunciado": "El principio de 'congruencia' en el proceso contencioso-administrativo exige que:",
      "opciones": [
        "El tribunal resuelva en el mismo plazo en todos los casos.",
        "La sentencia se pronuncie dentro de los límites de las pretensiones formuladas por las partes, sin otorgar más ni menos de lo pedido.",
        "El demandante y la Administración acuerden la solución.",
        "La sentencia sea revisada por el Tribunal Supremo antes de ser firme."
      ],
      "correcta": 1,
      "justificacion": "El principio de congruencia (art. 33 LJCA) impide que el tribunal conceda más de lo pedido (incongruencia extra petita) o algo distinto (incongruencia extra petita) o menos (incongruencia infra petita).",
      "referencia": "Art. 33 Ley 29/1998"
    },
    {
      "id": "2600-30",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "¿Qué recurso puede interponerse ante el Tribunal Supremo cuando una Sala de lo contencioso-administrativo de un TSJ o de la AN dicta sentencia en única instancia y no quepa apelación?",
      "opciones": [
        "Recurso de alzada contencioso.",
        "Recurso de casación.",
        "Recurso de revisión.",
        "Recurso de súplica."
      ],
      "correcta": 1,
      "justificacion": "El recurso de casación (art. 86 LJCA) es el medio de impugnación de las sentencias dictadas en única instancia por las Salas de los TSJ o de la AN ante el Tribunal Supremo.",
      "referencia": "Art. 86 Ley 29/1998"
    },
    {
      "id": "2600-31",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "¿Cuándo cabe el recurso de revisión contencioso-administrativo?",
      "opciones": [
        "Contra cualquier sentencia firme.",
        "Contra sentencias firmes cuando concurran causas tasadas: documentos recobrados, documentos falsos, soborno de testigos o peritos, o sentencia penal que declare hechos falsos.",
        "Cuando el recurrente alega nuevos argumentos jurídicos.",
        "Solo si han transcurrido más de 5 años desde la sentencia."
      ],
      "correcta": 1,
      "justificacion": "El artículo 102 de la LJCA permite el recurso de revisión contra sentencias firmes únicamente en los supuestos del artículo 510 LEC: documentos recobrados, falsedad de documentos, soborno o condena penal por hechos que influyeron en la sentencia.",
      "referencia": "Art. 102 Ley 29/1998"
    },
    {
      "id": "2600-32",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "El procedimiento contencioso-administrativo ordinario se inicia con:",
      "opciones": [
        "La demanda directamente.",
        "El escrito de interposición del recurso.",
        "La solicitud de medidas cautelares.",
        "La citación del demandado."
      ],
      "correcta": 1,
      "justificacion": "El artículo 45 de la LJCA establece que el procedimiento se inicia por escrito de interposición del recurso (no contiene la demanda; esta se presenta posteriormente).",
      "referencia": "Art. 45 Ley 29/1998"
    },
    {
      "id": "2600-33",
      "tema": "2600",
      "nivel": "bronce",
      "enunciado": "¿Cuál es el plazo del que dispone la Administración para contestar a la demanda?",
      "opciones": [
        "15 días hábiles.",
        "20 días hábiles.",
        "1 mes.",
        "2 meses."
      ],
      "correcta": 1,
      "justificacion": "El artículo 54 de la LJCA establece que los demandados tienen 20 días hábiles para contestar a la demanda.",
      "referencia": "Art. 54 Ley 29/1998"
    },
    {
      "id": "2600-34",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "¿Qué Juzgados conocen de los recursos contencioso-administrativos contra actos de los Ayuntamientos y de la Administración periférica del Estado?",
      "opciones": [
        "Los Juzgados Centrales de lo contencioso-administrativo.",
        "Los Juzgados de lo contencioso-administrativo de cada provincia.",
        "Las Salas de lo contencioso-administrativo de los TSJ.",
        "La Audiencia Nacional."
      ],
      "correcta": 1,
      "justificacion": "El artículo 8 de la LJCA atribuye a los Juzgados de lo contencioso-administrativo (unipersonales) el conocimiento de los recursos contra actos de las entidades locales y de los órganos periféricos del Estado.",
      "referencia": "Art. 8 Ley 29/1998"
    },
    {
      "id": "2600-35",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "¿Cuándo no es necesario agotar la vía administrativa previa antes de acudir a la jurisdicción contencioso-administrativa?",
      "opciones": [
        "Siempre es necesario agotar la vía administrativa.",
        "Cuando se impugna directamente una disposición general (reglamento).",
        "Cuando el recurrente es una persona jurídica.",
        "Cuando la Administración es extranjera."
      ],
      "correcta": 1,
      "justificacion": "El artículo 25.1 permite el recurso directo contra disposiciones generales sin agotar vía administrativa previa. También en el caso de inactividad (art. 29) y vía de hecho (art. 30) tras el requerimiento previo.",
      "referencia": "Art. 25.1 Ley 29/1998"
    },
    {
      "id": "2600-36",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "La extensión de efectos de una sentencia firme a otros interesados que se encuentren en idéntica situación jurídica puede solicitarse al:",
      "opciones": [
        "Tribunal Supremo, siempre.",
        "Tribunal que dictó la sentencia, mediante un incidente de extensión de efectos.",
        "Tribunal Constitucional.",
        "Consejo de Estado."
      ],
      "correcta": 1,
      "justificacion": "El artículo 110 de la LJCA permite que quienes se hallen en idéntica situación jurídica pidan al tribunal que dictó la sentencia la extensión de sus efectos mediante el incidente regulado en dicho artículo.",
      "referencia": "Art. 110 Ley 29/1998"
    },
    {
      "id": "2600-37",
      "tema": "2600",
      "nivel": "bronce",
      "enunciado": "¿Qué significa que la LJCA consagra el principio 'solve et repete' o que lo prohíbe?",
      "opciones": [
        "La LJCA consagra el principio de 'solve et repete': hay que pagar antes de recurrir.",
        "La LJCA prohíbe el principio de 'solve et repete': no es necesario pagar la deuda tributaria o sanción para poder recurrir judicialmente.",
        "El principio no está mencionado en la LJCA.",
        "Solo aplica en materia tributaria local."
      ],
      "correcta": 1,
      "justificacion": "La LJCA y la Constitución (art. 24 CE) proscriben el principio de 'solve et repete' (pagar antes de recurrir), garantizando el acceso a la tutela judicial efectiva sin necesidad de pago previo.",
      "referencia": "Art. 24 CE / LJCA"
    },
    {
      "id": "2600-38",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "La Sala de lo contencioso-administrativo de la Audiencia Nacional conoce, entre otros, de:",
      "opciones": [
        "Los recursos contra actos de los Ayuntamientos.",
        "Los recursos contra actos de los Ministros y Secretarios de Estado, y las autorizaciones de entrada en domicilio solicitadas en todo el territorio nacional.",
        "Solo los recursos de funcionarios de la AGE.",
        "Los recursos contra actos del Tribunal de Cuentas."
      ],
      "correcta": 1,
      "justificacion": "El artículo 11 de la LJCA atribuye a la Sala de la AN el conocimiento de recursos contra actos de los Ministros y Secretarios de Estado, impugnación de disposiciones generales de Ministerios y las autorizaciones de entrada en domicilio de ámbito supraterritorial.",
      "referencia": "Art. 11 Ley 29/1998"
    },
    {
      "id": "2600-39",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "¿Qué sucede si la Administración incumple una sentencia contencioso que ordena el pago de cantidad líquida?",
      "opciones": [
        "El tribunal archiva el asunto.",
        "Puede acordarse la ejecución forzosa y el devengo de intereses legales, pudiendo incluso embargarse bienes patrimoniales de la Administración.",
        "El ciudadano solo puede reclamar de nuevo.",
        "La sentencia queda sin efecto tras 5 años."
      ],
      "correcta": 1,
      "justificacion": "El artículo 106 permite la ejecución forzosa de sentencias de condena dineraria, con devengo de intereses legales y, en último término, embargo de bienes patrimoniales (no del dominio público) de la Administración.",
      "referencia": "Arts. 104-106 Ley 29/1998"
    },
    {
      "id": "2600-40",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "¿Qué es la 'acumulación de recursos' en la LJCA?",
      "opciones": [
        "La presentación de varios recursos por un mismo recurrente.",
        "La posibilidad de tramitar conjuntamente varios recursos que tengan conexión, por razones de economía procesal.",
        "Un procedimiento exclusivo para demandas colectivas.",
        "La unificación de todos los recursos de una misma Comunidad Autónoma."
      ],
      "correcta": 1,
      "justificacion": "El artículo 34 de la LJCA permite la acumulación de acciones y de recursos cuando entre ellos exista una conexión directa, por razones de economía procesal.",
      "referencia": "Art. 34 Ley 29/1998"
    },
    {
      "id": "2600-41",
      "tema": "2600",
      "nivel": "bronce",
      "enunciado": "¿Quién puede personarse como codemandado en el proceso contencioso-administrativo?",
      "opciones": [
        "Cualquier ciudadano que lo solicite.",
        "Las personas que ostenten derechos o intereses legítimos que pudieran quedar afectados por la estimación del recurso.",
        "Solo la Administración titular del acto impugnado.",
        "Solo los que fueran parte en el procedimiento administrativo previo."
      ],
      "correcta": 1,
      "justificacion": "El artículo 21.1.b) de la LJCA permite que puedan comparecer como demandados o codemandados quienes tengan interés legítimo en el mantenimiento del acto o disposición impugnados.",
      "referencia": "Art. 21.1.b) Ley 29/1998"
    },
    {
      "id": "2600-42",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "El plazo para interponer recurso de apelación ante el TSJ contra sentencias de los Juzgados de lo contencioso-administrativo es de:",
      "opciones": [
        "10 días hábiles.",
        "15 días hábiles.",
        "1 mes.",
        "2 meses."
      ],
      "correcta": 1,
      "justificacion": "El artículo 85.1 de la LJCA establece un plazo de 15 días hábiles para interponer el recurso de apelación contra las sentencias de los Juzgados de lo contencioso-administrativo.",
      "referencia": "Art. 85.1 Ley 29/1998"
    },
    {
      "id": "2600-43",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "¿Puede impugnarse el no-ejercicio de la potestad reglamentaria (inactividad reglamentaria) por la LJCA?",
      "opciones": [
        "Sí, directamente mediante el recurso por inactividad del art. 29.",
        "No, la inactividad reglamentaria no es impugnable por la vía contencioso-administrativa.",
        "Solo si hay daño acreditado.",
        "Solo el Defensor del Pueblo puede hacerlo."
      ],
      "correcta": 1,
      "justificacion": "El artículo 29 de la LJCA solo cubre la inactividad material (no dictar actos o prestaciones concretas), no la inactividad normativa (no dictar reglamentos), que no puede impugnarse directamente por esta vía.",
      "referencia": "Art. 29 Ley 29/1998"
    },
    {
      "id": "2600-44",
      "tema": "2600",
      "nivel": "bronce",
      "enunciado": "¿Puede el demandante desistir del recurso contencioso-administrativo una vez interpuesto?",
      "opciones": [
        "No, una vez iniciado el proceso no puede desistirse.",
        "Sí, en cualquier momento antes de que se dicte sentencia.",
        "Solo con autorización del tribunal.",
        "Solo en el procedimiento abreviado."
      ],
      "correcta": 1,
      "justificacion": "El artículo 74 de la LJCA permite al recurrente desistir del recurso en cualquier momento antes de dictarse sentencia.",
      "referencia": "Art. 74 Ley 29/1998"
    },
    {
      "id": "2600-45",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "La Administración, al recibir el emplazamiento del tribunal para remitir el expediente, debe también notificarlo a:",
      "opciones": [
        "Solo a su Secretario General.",
        "A cuantos aparezcan como interesados en dicho expediente, para que puedan personarse como demandados.",
        "Solo al Ministerio Fiscal.",
        "Solo al Consejo de Estado."
      ],
      "correcta": 1,
      "justificacion": "El artículo 49 de la LJCA obliga a la Administración a notificar el emplazamiento a todos los interesados en el expediente, para que puedan comparecer en el proceso si lo desean.",
      "referencia": "Art. 49 Ley 29/1998"
    },
    {
      "id": "2600-46",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "¿Qué sucede si el órgano judicial aprecia de oficio la falta de competencia territorial?",
      "opciones": [
        "Archiva el procedimiento.",
        "Dicta auto de inadmisión.",
        "Declina su competencia y remite el asunto al órgano que considere competente.",
        "Requiere a las partes para que aleguen sobre competencia."
      ],
      "correcta": 2,
      "justificacion": "El artículo 7.2 de la LJCA permite al órgano jurisdiccional apreciar de oficio su falta de competencia territorial e inhibirse en favor del tribunal competente.",
      "referencia": "Art. 7.2 Ley 29/1998"
    },
    {
      "id": "2600-47",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "¿Con qué recurso pueden impugnarse los autos del Tribunal Supremo en materia contencioso-administrativa?",
      "opciones": [
        "Recurso de apelación.",
        "Recurso de súplica ante la propia Sala.",
        "Recurso de casación.",
        "No cabe recurso alguno."
      ],
      "correcta": 1,
      "justificacion": "Contra los autos del Tribunal Supremo en el ámbito contencioso-administrativo solo cabe el recurso de súplica ante la propia Sala, no cabiendo recurso de casación al ser el TS el órgano supremo.",
      "referencia": "Art. 79 Ley 29/1998"
    },
    {
      "id": "2600-48",
      "tema": "2600",
      "nivel": "bronce",
      "enunciado": "¿Puede el tribunal contencioso ordenar la retroacción de actuaciones cuando anula un acto?",
      "opciones": [
        "No, solo puede anular el acto.",
        "Sí, cuando el vicio observado consiste en un defecto de forma que ha producido indefensión o en la falta de estudios o informes preceptivos.",
        "Solo si así lo pide expresamente la Administración.",
        "Solo en actos tributarios."
      ],
      "correcta": 1,
      "justificacion": "El artículo 71.2 de la LJCA permite la retroacción de actuaciones cuando la sentencia aprecia la existencia de un defecto de forma causante de indefensión o la omisión de trámites preceptivos.",
      "referencia": "Art. 71.2 Ley 29/1998"
    },
    {
      "id": "2600-49",
      "tema": "2600",
      "nivel": "plata",
      "enunciado": "¿Tiene el Ministerio de Justicia competencia para acordar la inejecución de sentencias contencioso-administrativas por razones de interés público?",
      "opciones": [
        "Sí, puede acordarla libremente.",
        "Sí, pero solo el Consejo de Ministros, previa justa indemnización al recurrente.",
        "No, las sentencias son siempre de obligado cumplimiento sin excepción.",
        "Solo en materia de defensa nacional."
      ],
      "correcta": 1,
      "justificacion": "El artículo 105.2 de la LJCA permite excepcionalmente que, por causas de imposibilidad material o legal, el Consejo de Ministros (o equivalente autonómico) acuerde la inejecución previo abono de una indemnización.",
      "referencia": "Art. 105.2 Ley 29/1998"
    },
    {
      "id": "2600-50",
      "tema": "2600",
      "nivel": "oro",
      "enunciado": "¿Puede interponerse directamente un recurso contencioso-administrativo sin haber interpuesto previamente recurso de alzada cuando este es preceptivo?",
      "opciones": [
        "Sí, siempre que se alegue urgencia.",
        "No, si el recurso de alzada es preceptivo, su omisión hace inadmisible el contencioso.",
        "Sí, la vía administrativa previa es siempre potestativa.",
        "Solo si el acto es nulo de pleno derecho."
      ],
      "correcta": 1,
      "justificacion": "La vía administrativa previa (recurso de alzada cuando es preceptivo) debe agotarse antes de acudir al contencioso. Su omisión determina la inadmisibilidad del recurso jurisdiccional (art. 69.c LJCA).",
      "referencia": "Art. 69.c) Ley 29/1998"
    }
  ]
};

fs.writeFileSync(path.join(__dirname, 'src/data/tema2600.json'), JSON.stringify(tema2600, null, 2), 'utf8');
console.log('tema2600.json creado con 50 preguntas.');
