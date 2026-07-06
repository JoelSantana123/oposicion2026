const fs = require('fs');
const path = require('path');

const tema1300 = {
  "tema_id": "1300",
  "tema_nombre": "Ley de Contratos del Sector Público (Ley 9/2017)",
  "preguntas": [
    {
      "id": "1300-01",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "¿Cuál es el umbral de cuantía para un contrato menor de servicios o suministros en la actualidad?",
      "opciones": [
        "Inferior a 15.000 euros (IVA excluido).",
        "Inferior a 18.000 euros (IVA excluido).",
        "Inferior a 15.000 euros (IVA incluido).",
        "Inferior a 50.000 euros (IVA excluido)."
      ],
      "correcta": 0,
      "justificacion": "El artículo 118 de la Ley 9/2017 fija en menos de 15.000 euros (IVA excluido) el umbral para contratos menores de servicios y suministros.",
      "referencia": "Art. 118 Ley 9/2017 LCSP"
    },
    {
      "id": "1300-02",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "¿Cuál es el umbral de cuantía para un contrato menor de obras?",
      "opciones": [
        "Inferior a 15.000 euros.",
        "Inferior a 40.000 euros.",
        "Inferior a 50.000 euros.",
        "Inferior a 100.000 euros."
      ],
      "correcta": 2,
      "justificacion": "El artículo 118 de la LCSP establece que son contratos menores de obras los de cuantía inferior a 40.000 euros (IVA excluido).",
      "referencia": "Art. 118 Ley 9/2017 LCSP"
    },
    {
      "id": "1300-03",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "La Ley 9/2017, de Contratos del Sector Público, transpone principalmente:",
      "opciones": [
        "La Directiva 2014/24/UE y la Directiva 2014/25/UE.",
        "El Reglamento (UE) 1303/2013.",
        "La Directiva 2006/123/CE de servicios.",
        "La Directiva 2004/18/CE."
      ],
      "correcta": 0,
      "justificacion": "La LCSP (Ley 9/2017) tiene como objeto transponer las Directivas europeas 2014/24/UE (sector clásico) y 2014/25/UE (sectores especiales).",
      "referencia": "Preámbulo Ley 9/2017"
    },
    {
      "id": "1300-04",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "Los principios que rigen la contratación del sector público según el artículo 1 de la LCSP son:",
      "opciones": [
        "Legalidad, jerarquía, publicidad y eficacia.",
        "Libertad de acceso, publicidad y transparencia, no discriminación e igualdad de trato, y eficiencia en el gasto público.",
        "Subsidiariedad, proporcionalidad, efecto directo y primacía.",
        "Competencia efectiva, buena fe y confianza legítima."
      ],
      "correcta": 1,
      "justificacion": "El artículo 1.1 de la LCSP enumera como principios: libertad de acceso, publicidad y transparencia, no discriminación e igualdad de trato, y eficiencia en el uso de fondos públicos.",
      "referencia": "Art. 1.1 Ley 9/2017"
    },
    {
      "id": "1300-05",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "¿Quién es el órgano de supervisión de la contratación pública en el ámbito estatal?",
      "opciones": [
        "El Tribunal de Cuentas.",
        "La Junta Consultiva de Contratación Pública del Estado.",
        "El Consejo de Estado.",
        "La Agencia Tributaria."
      ],
      "correcta": 1,
      "justificacion": "La Junta Consultiva de Contratación Pública del Estado es el órgano consultivo y de supervisión en materia de contratación pública a nivel estatal.",
      "referencia": "Art. 328 Ley 9/2017"
    },
    {
      "id": "1300-06",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "¿Cuál de los siguientes NO es un tipo de contrato nominado (típico) de los previstos en la LCSP?",
      "opciones": [
        "Contrato de obras.",
        "Contrato de suministro.",
        "Contrato de arrendamiento financiero.",
        "Contrato de concesión de servicios."
      ],
      "correcta": 2,
      "justificacion": "Los contratos típicos o nominados de la LCSP son: obra, concesión de obra, concesión de servicios, suministro y servicios. El arrendamiento financiero no es un tipo contractual nominado de la LCSP.",
      "referencia": "Art. 25 Ley 9/2017"
    },
    {
      "id": "1300-07",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "El 'valor estimado del contrato' se calcula:",
      "opciones": [
        "Incluyendo el IVA.",
        "Sin incluir el IVA, teniendo en cuenta el importe máximo del contrato incluidas prórrogas y opciones.",
        "Incluyendo solo el primer año de ejecución.",
        "Incluyendo el IVA y el beneficio industrial."
      ],
      "correcta": 1,
      "justificacion": "El artículo 101 LCSP establece que el valor estimado se calcula SIN incluir el IVA, incluyendo cualquier prórroga posible y todas las opciones eventuales.",
      "referencia": "Art. 101 Ley 9/2017"
    },
    {
      "id": "1300-08",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "¿Qué ocurre con un contrato cuando su objeto se fracciona de forma artificial para eludir los umbrales de publicidad?",
      "opciones": [
        "Es válido si cada fracción tiene valor menor al umbral.",
        "Es nulo de pleno derecho.",
        "Es anulable a instancia del licitador excluido.",
        "Solo genera responsabilidad disciplinaria, sin efecto sobre el contrato."
      ],
      "correcta": 1,
      "justificacion": "El fraccionamiento artificial de contratos para eludir umbrales de publicidad o aplicar procedimientos menos exigentes vicia la contratación de nulidad.",
      "referencia": "Art. 99.2 Ley 9/2017"
    },
    {
      "id": "1300-09",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "El procedimiento abierto simplificado (conocido como 'fast track') es aplicable cuando el valor estimado del contrato de servicios o suministros no supera:",
      "opciones": [
        "100.000 euros.",
        "500.000 euros.",
        "1.000.000 euros.",
        "2.000.000 euros."
      ],
      "correcta": 1,
      "justificacion": "El artículo 159 LCSP permite el procedimiento abierto simplificado para contratos cuyo valor estimado no supere los 500.000 euros.",
      "referencia": "Art. 159 Ley 9/2017"
    },
    {
      "id": "1300-10",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "¿En qué procedimiento de adjudicación se admite la negociación de las condiciones del contrato con los licitadores?",
      "opciones": [
        "Procedimiento abierto.",
        "Procedimiento restringido.",
        "Procedimiento negociado con publicidad.",
        "Diálogo competitivo."
      ],
      "correcta": 2,
      "justificacion": "En el procedimiento negociado (arts. 166-171 LCSP) el órgano de contratación puede negociar con los licitadores las condiciones del contrato.",
      "referencia": "Arts. 166-171 Ley 9/2017"
    },
    {
      "id": "1300-11",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "¿Qué organismo resuelve los recursos especiales en materia de contratación en el ámbito estatal?",
      "opciones": [
        "El Tribunal Constitucional.",
        "El Consejo de Estado.",
        "El Tribunal Administrativo Central de Recursos Contractuales (TACRC).",
        "La Audiencia Nacional."
      ],
      "correcta": 2,
      "justificacion": "El TACRC (Tribunal Administrativo Central de Recursos Contractuales) es el órgano estatal especializado para resolver el recurso especial en materia de contratación.",
      "referencia": "Art. 45 Ley 9/2017"
    },
    {
      "id": "1300-12",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "El recurso especial en materia de contratación puede interponerse contra actos del procedimiento de licitación. El plazo para interponerlo es de:",
      "opciones": [
        "5 días hábiles.",
        "10 días hábiles.",
        "15 días hábiles.",
        "1 mes."
      ],
      "correcta": 2,
      "justificacion": "El artículo 50.1 de la LCSP fija en 15 días hábiles el plazo para interponer el recurso especial en materia de contratación.",
      "referencia": "Art. 50.1 Ley 9/2017"
    },
    {
      "id": "1300-13",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "La 'Mesa de Contratación' es el órgano colegiado que asiste al órgano de contratación. ¿Cuándo es OBLIGATORIA su constitución?",
      "opciones": [
        "En todos los procedimientos sin excepción.",
        "Solo en contratos mayores y en procedimientos abiertos, restringidos y negociados con publicidad.",
        "Solo en contratos de obras.",
        "Solo cuando el valor supera 1 millón de euros."
      ],
      "correcta": 1,
      "justificacion": "La Mesa de Contratación es obligatoria en procedimientos abiertos, restringidos y en los negociados con publicidad, y en los de asociación para la innovación.",
      "referencia": "Art. 326 Ley 9/2017"
    },
    {
      "id": "1300-14",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "Las causas de resolución del contrato pueden ser pactadas (por acuerdo) o legales. ¿Cuál de las siguientes es una causa de resolución por incumplimiento del contratista?",
      "opciones": [
        "La suspensión temporal de la ejecución por causa de fuerza mayor.",
        "El fallecimiento o incapacidad sobrevenida del contratista (persona física) si no puede ser sucedido.",
        "La modificación del contrato por voluntad de la Administración.",
        "La baja oferta del licitador."
      ],
      "correcta": 1,
      "justificacion": "El artículo 211.1.d) recoge como causa de resolución el fallecimiento o la incapacidad sobrevenida del contratista individual cuando no sea susceptible de continuación.",
      "referencia": "Art. 211 Ley 9/2017"
    },
    {
      "id": "1300-15",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "¿Qué se entiende por 'oferta anormalmente baja'?",
      "opciones": [
        "Toda oferta que sea inferior al presupuesto base de licitación.",
        "Aquella oferta que, por su precio u otras condiciones, resulte desproporcionada o anormal según los parámetros fijados en el pliego.",
        "Cualquier oferta que no incluya el IVA.",
        "La oferta más baja presentada al procedimiento."
      ],
      "correcta": 1,
      "justificacion": "El artículo 149 define las ofertas anormalmente bajas como aquellas que resulten desproporcionadas o anormales conforme a los criterios que se fijen en el pliego.",
      "referencia": "Art. 149 Ley 9/2017"
    },
    {
      "id": "1300-16",
      "tema": "1300",
      "nivel": "bronce",
      "enunciado": "La garantía definitiva en la contratación pública se fija, con carácter general, en un porcentaje del precio de adjudicación. ¿Cuál es ese porcentaje?",
      "opciones": [
        "El 3%.",
        "El 5%.",
        "El 10%.",
        "El 15%."
      ],
      "correcta": 1,
      "justificacion": "El artículo 107.1 establece que la garantía definitiva será del 5% del precio de adjudicación (IVA excluido).",
      "referencia": "Art. 107.1 Ley 9/2017"
    },
    {
      "id": "1300-17",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "¿Cuándo es preceptivo el informe del Consejo de Estado u órgano consultivo autonómico equivalente para la resolución del contrato?",
      "opciones": [
        "Siempre que haya resolución.",
        "Cuando se funden en incumplimiento imputable al contratista y éste formula oposición.",
        "Solo en contratos de obras.",
        "Solo cuando la cuantía supere 1 millón de euros."
      ],
      "correcta": 1,
      "justificacion": "El artículo 212.3 exige el dictamen del Consejo de Estado o equivalente autonómico cuando el contratista formule oposición a la resolución.",
      "referencia": "Art. 212.3 Ley 9/2017"
    },
    {
      "id": "1300-18",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "En materia de subcontratación, el contratista debe comunicar a la Administración los subcontratistas. ¿Existe algún límite?",
      "opciones": [
        "No existe ningún límite legal.",
        "El contratista puede subcontratar hasta el 60% del importe del contrato.",
        "No puede subcontratar más del 40% del precio del contrato, salvo autorización.",
        "La subcontratación está prohibida en contratos de servicios."
      ],
      "correcta": 1,
      "justificacion": "El artículo 215.3 establece que el contratista podrá subcontratar con terceros, con el límite máximo del 60% del importe de adjudicación.",
      "referencia": "Art. 215.3 Ley 9/2017"
    },
    {
      "id": "1300-19",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "El contrato de obras queda perfeccionado con:",
      "opciones": [
        "La aprobación del proyecto por el órgano de contratación.",
        "La firma del acta de comprobación del replanteo.",
        "La formalización del contrato en documento administrativo.",
        "La constitución de la garantía definitiva."
      ],
      "correcta": 2,
      "justificacion": "Los contratos administrativos se perfeccionan con su formalización (Art. 36 LCSP), es decir, con la firma del documento administrativo de contrato.",
      "referencia": "Art. 36 y 153 Ley 9/2017"
    },
    {
      "id": "1300-20",
      "tema": "1300",
      "nivel": "bronce",
      "enunciado": "¿Qué es el 'Registro de Licitadores y Empresas Clasificadas del Sector Público'?",
      "opciones": [
        "Un registro de sanciones a empresas.",
        "Un registro en el que las empresas inscriben sus datos y capacidades para agilizar su participación en licitaciones.",
        "Un fichero de morosos de la Administración.",
        "Un registro solo para empresas extranjeras."
      ],
      "correcta": 1,
      "justificacion": "El Registro de Licitadores permite a las empresas inscribir su capacidad jurídica, financiera y técnica para acreditarla de forma simplificada en cada licitación.",
      "referencia": "Art. 337 Ley 9/2017"
    },
    {
      "id": "1300-21",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "¿Qué es el 'Documento Europeo Único de Contratación' (DEUC)?",
      "opciones": [
        "El contrato definitivo firmado en formato europeo.",
        "Una declaración responsable del licitador que acredita provisionalmente su aptitud y capacidad, sustituyendo a los documentos acreditativos.",
        "El certificado de clasificación de empresa emitido por la UE.",
        "El formulario de recurso especial a nivel europeo."
      ],
      "correcta": 1,
      "justificacion": "El DEUC es una declaración responsable que sirve como prueba documental provisional de que el operador económico cumple las condiciones requeridas para participar.",
      "referencia": "Art. 140 Ley 9/2017 / Regl. UE 2016/7"
    },
    {
      "id": "1300-22",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "Las prohibiciones de contratar impiden al afectado participar en licitaciones. Una condena penal firme por corrupción genera una prohibición de contratar de:",
      "opciones": [
        "1 año.",
        "3 años.",
        "5 años.",
        "Con carácter indefinido."
      ],
      "correcta": 2,
      "justificacion": "El artículo 71.1.a) establece la prohibición de contratar por 5 años para las personas condenadas mediante sentencia firme por delitos de corrupción, fraude, etc.",
      "referencia": "Art. 71.1.a) Ley 9/2017"
    },
    {
      "id": "1300-23",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "Las cláusulas sociales, medioambientales y de innovación en la contratación pública se pueden incluir como:",
      "opciones": [
        "Solo como criterios de solvencia técnica.",
        "Solo como condiciones especiales de ejecución.",
        "Como criterios de adjudicación, condiciones especiales de ejecución o prescripciones técnicas.",
        "Como garantías adicionales al 5%."
      ],
      "correcta": 2,
      "justificacion": "La LCSP permite incorporar criterios sociales y medioambientales en las prescripciones técnicas, los criterios de adjudicación y las condiciones especiales de ejecución.",
      "referencia": "Arts. 69, 145 y 202 Ley 9/2017"
    },
    {
      "id": "1300-24",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "¿Cuánto tiempo tiene el contratista para ejecutar el objeto del contrato a partir del acta de comprobación del replanteo (en obras)?",
      "opciones": [
        "El plazo es libre y pactado entre las partes sin límite.",
        "El plazo fijado en el pliego de cláusulas administrativas.",
        "Siempre 1 año natural.",
        "El plazo lo fija unilateralmente el órgano de contratación tras la firma."
      ],
      "correcta": 1,
      "justificacion": "El plazo de ejecución es el establecido en los pliegos, siendo este un elemento esencial del contrato.",
      "referencia": "Art. 29 y 237 Ley 9/2017"
    },
    {
      "id": "1300-25",
      "tema": "1300",
      "nivel": "bronce",
      "enunciado": "¿Qué es el 'Pliego de Cláusulas Administrativas Particulares' (PCAP)?",
      "opciones": [
        "El documento que describe el objeto técnico del contrato.",
        "El documento que regula los aspectos jurídico-económicos del contrato: procedimiento, criterios de adjudicación, garantías, etc.",
        "El acta de inicio de las obras.",
        "El contrato definitivo firmado."
      ],
      "correcta": 1,
      "justificacion": "El PCAP contiene las estipulaciones jurídico-administrativas y económicas que regirán el contrato: procedimiento, plazos, garantías, criterios de adjudicación y penalidades.",
      "referencia": "Art. 122 Ley 9/2017"
    },
    {
      "id": "1300-26",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "El 'Presupuesto Base de Licitación' (PBL) es:",
      "opciones": [
        "El precio máximo que puede ofertarse.",
        "El precio mínimo al que puede ofertarse.",
        "El límite máximo de gasto que puede comprometer el órgano de contratación, con IVA desglosado.",
        "El presupuesto aprobado por el Parlamento para contratos."
      ],
      "correcta": 2,
      "justificacion": "El PBL es el límite máximo de gasto que el órgano de contratación puede comprometer, debiendo figurar el IVA como partida independiente.",
      "referencia": "Art. 100 Ley 9/2017"
    },
    {
      "id": "1300-27",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "La modificación del contrato por razones de interés público ('ius variandi') está limitada. El incremento máximo del precio por modificaciones no previstas en el pliego es:",
      "opciones": [
        "Del 10% del precio de adjudicación.",
        "Del 15% del precio de adjudicación.",
        "Del 20% del precio de adjudicación.",
        "Del 50% del precio de adjudicación."
      ],
      "correcta": 2,
      "justificacion": "El artículo 205 establece que las modificaciones no previstas en el pliego no podrán superar el 20% del precio de adjudicación.",
      "referencia": "Art. 205.2.b Ley 9/2017"
    },
    {
      "id": "1300-28",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "¿En qué caso se aplica el procedimiento de 'licitación con negociación'?",
      "opciones": [
        "En todos los contratos de servicios.",
        "Cuando las necesidades del poder adjudicador no puedan satisfacerse sin adaptar soluciones disponibles en el mercado.",
        "Solo en contratos menores de obras.",
        "Exclusivamente en contratos de defensa nacional."
      ],
      "correcta": 1,
      "justificacion": "La licitación con negociación (art. 167 LCSP) procede cuando las necesidades no pueden satisfacerse con soluciones de mercado estándar o en supuestos de trabajos de diseño innovador.",
      "referencia": "Art. 167 Ley 9/2017"
    },
    {
      "id": "1300-29",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "¿Cuándo procede la resolución del contrato por mutuo acuerdo?",
      "opciones": [
        "Nunca, la ley no permite resoluciones pactadas.",
        "Cuando no concurra otra causa de resolución y no sea posible continuar el contrato por razones de interés público.",
        "Siempre que ambas partes lo acuerden, sin restricciones.",
        "Solo en contratos de duración superior a 4 años."
      ],
      "correcta": 1,
      "justificacion": "El artículo 211.1.h) permite la resolución por mutuo acuerdo cuando no concurra otra causa de resolución imputable a ninguna de las partes y el contrato no pueda continuarse.",
      "referencia": "Art. 211.1.h) Ley 9/2017"
    },
    {
      "id": "1300-30",
      "tema": "1300",
      "nivel": "bronce",
      "enunciado": "¿Cuál es el plazo máximo de duración inicial de los contratos de servicios, con carácter general?",
      "opciones": [
        "1 año prorrogable a 4.",
        "3 años prorrogable hasta 5 con prórrogas.",
        "5 años incluidas las prórrogas.",
        "No existe límite legal de duración."
      ],
      "correcta": 2,
      "justificacion": "El artículo 29.4 establece que los contratos de servicios no podrán tener un plazo de vigencia superior a 5 años, incluyendo prórrogas.",
      "referencia": "Art. 29.4 Ley 9/2017"
    },
    {
      "id": "1300-31",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "La Plataforma de Contratación del Sector Público (PLACE) es:",
      "opciones": [
        "Un registro físico de contratos en papel.",
        "El portal electrónico donde se publican los anuncios y la información sobre contratos del sector público.",
        "Una entidad bancaria de garantías.",
        "El sistema de gestión interno del TACRC."
      ],
      "correcta": 1,
      "justificacion": "La Plataforma de Contratación del Sector Público (contrataciondelestado.es) es el punto de acceso electrónico donde se publican licitaciones, adjudicaciones y demás información contractual.",
      "referencia": "Art. 347 Ley 9/2017"
    },
    {
      "id": "1300-32",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "La cesión del contrato a un tercero requiere, entre otros requisitos:",
      "opciones": [
        "Únicamente la comunicación al órgano de contratación.",
        "La autorización previa del órgano de contratación y que el cedente tenga ejecutado al menos el 20% del importe.",
        "La autorización del Consejo de Estado.",
        "El consentimiento escrito de los subcontratistas."
      ],
      "correcta": 1,
      "justificacion": "El artículo 214.2 exige para la cesión, entre otros: autorización previa del órgano de contratación y que el cedente haya ejecutado al menos el 20% del contrato.",
      "referencia": "Art. 214.2 Ley 9/2017"
    },
    {
      "id": "1300-33",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "En los contratos de concesión de obras y de concesión de servicios, el riesgo operacional:",
      "opciones": [
        "Lo asume íntegramente la Administración.",
        "Lo comparte al 50% la Administración y el concesionario.",
        "Lo asume el concesionario de manera real y efectiva.",
        "Lo asume el Fondo de Garantía de Concesiones."
      ],
      "correcta": 2,
      "justificacion": "La LCSP exige que en las concesiones el concesionario asuma el riesgo operacional, incluyendo el riesgo de demanda o el de suministro, de forma real y efectiva.",
      "referencia": "Arts. 14 y 15 Ley 9/2017"
    },
    {
      "id": "1300-34",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "¿Cuál es la vigencia máxima de una concesión de obras según la LCSP?",
      "opciones": [
        "20 años.",
        "30 años.",
        "40 años.",
        "50 años."
      ],
      "correcta": 2,
      "justificacion": "El artículo 29.6.a) establece que las concesiones de obras no podrán tener un plazo superior a 40 años.",
      "referencia": "Art. 29.6.a) Ley 9/2017"
    },
    {
      "id": "1300-35",
      "tema": "1300",
      "nivel": "bronce",
      "enunciado": "¿Qué instrumento de racionalización de la contratación permite a múltiples organismos comprar a precios ya negociados sin nueva licitación?",
      "opciones": [
        "El contrato de suministro ordinario.",
        "El sistema dinámico de adquisición.",
        "El acuerdo marco.",
        "La compra a catálogo."
      ],
      "correcta": 2,
      "justificacion": "El acuerdo marco (art. 219 LCSP) permite a uno o varios poderes adjudicadores establecer las condiciones que regirán los contratos que vayan a adjudicarse durante un período determinado.",
      "referencia": "Art. 219 Ley 9/2017"
    },
    {
      "id": "1300-36",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "La revisión de precios en los contratos administrativos:",
      "opciones": [
        "Es automática y anual para todos los contratos.",
        "Está prohibida desde 2013 para todos los contratos.",
        "Procede cuando el contrato tiene prevista su aplicación en el pliego y se han ejecutado al menos 2 años y el 20% de su importe.",
        "Solo se aplica en contratos de obras de más de 5 años."
      ],
      "correcta": 2,
      "justificacion": "El artículo 103 LCSP permite la revisión de precios si está prevista en el pliego y siempre que hayan transcurrido 2 años de ejecución y se haya ejecutado al menos el 20% del contrato.",
      "referencia": "Art. 103 Ley 9/2017"
    },
    {
      "id": "1300-37",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "¿Cuándo se considera que un contrato queda 'perfeccionado'?",
      "opciones": [
        "Cuando se aprueba el gasto.",
        "Cuando se selecciona al adjudicatario.",
        "Cuando se formaliza mediante firma del documento contractual.",
        "Cuando el contratista presenta la garantía definitiva."
      ],
      "correcta": 2,
      "justificacion": "El artículo 36 de la LCSP establece que los contratos se perfeccionan mediante su formalización.",
      "referencia": "Art. 36 Ley 9/2017"
    },
    {
      "id": "1300-38",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "¿Qué es la 'compra pública de innovación'?",
      "opciones": [
        "La compra de material informático para la Administración.",
        "Un procedimiento que permite a la Administración adquirir soluciones innovadoras aún no disponibles en el mercado.",
        "La contratación exclusiva con startups.",
        "La compra de patentes por parte del Estado."
      ],
      "correcta": 1,
      "justificacion": "La compra pública de innovación sirve para que la Administración impulse el desarrollo de nuevos productos, servicios o procesos que no existen aún en el mercado.",
      "referencia": "Arts. 177-182 (Asociación para la innovación) Ley 9/2017"
    },
    {
      "id": "1300-39",
      "tema": "1300",
      "nivel": "bronce",
      "enunciado": "En el procedimiento abierto, ¿cuánto tiempo mínimo tienen los licitadores para presentar sus ofertas en un contrato de servicios cuyo valor estimado supere los umbrales europeos?",
      "opciones": [
        "10 días hábiles.",
        "15 días naturales.",
        "30 días naturales desde la fecha de envío del anuncio a la OJUE.",
        "45 días naturales."
      ],
      "correcta": 2,
      "justificacion": "El artículo 156.1 establece un plazo mínimo de 30 días naturales a contar desde la fecha de envío del anuncio de licitación al DOUE.",
      "referencia": "Art. 156.1 Ley 9/2017"
    },
    {
      "id": "1300-40",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "El 'responsable del contrato' es la figura designada por el órgano de contratación para supervisar la ejecución. En contratos de obras, ¿cómo se denomina el técnico que dirige las obras?",
      "opciones": [
        "Gestor del contrato.",
        "Director facultativo.",
        "Supervisor de obra.",
        "Interventor delegado."
      ],
      "correcta": 1,
      "justificacion": "En los contratos de obras, la supervisión e inspección de la ejecución la realiza el director facultativo (director de obra), figura técnica designada por el órgano contratante.",
      "referencia": "Art. 237 Ley 9/2017"
    },
    {
      "id": "1300-41",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "La resolución por incumplimiento del contratista tiene como consecuencia, entre otras:",
      "opciones": [
        "La devolución automática de la garantía definitiva.",
        "La incautación de la garantía definitiva y la exigencia del resarcimiento por los daños y perjuicios causados.",
        "La apertura de un expediente disciplinario al director facultativo.",
        "La adjudicación automática al siguiente licitador."
      ],
      "correcta": 1,
      "justificacion": "El artículo 213 establece que cuando la resolución sea imputable al contratista se incautará la garantía definitiva y se le exigirán los daños y perjuicios.",
      "referencia": "Art. 213 Ley 9/2017"
    },
    {
      "id": "1300-42",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "El plazo de garantía en los contratos de obras, a partir de la recepción, es al menos:",
      "opciones": [
        "6 meses.",
        "1 año.",
        "2 años.",
        "5 años."
      ],
      "correcta": 1,
      "justificacion": "El artículo 243 establece un plazo de garantía mínimo de 1 año para las obras, salvo que el pliego establezca uno mayor.",
      "referencia": "Art. 243 Ley 9/2017"
    },
    {
      "id": "1300-43",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "¿Qué tipo de potestad ostenta la Administración para resolver unilateralmente el contrato cuando el contratista incumple, sin necesidad de acudir a los tribunales?",
      "opciones": [
        "Potestad sancionadora.",
        "Potestad expropiatoria.",
        "Prerrogativa de resolución unilateral del contrato.",
        "Potestad disciplinaria."
      ],
      "correcta": 2,
      "justificacion": "La Administración goza de la prerrogativa de interpretar, modificar y resolver unilateralmente los contratos (ius variandi, ius solvendi), propia de los contratos administrativos.",
      "referencia": "Art. 190 Ley 9/2017"
    },
    {
      "id": "1300-44",
      "tema": "1300",
      "nivel": "bronce",
      "enunciado": "¿Está permitido el pago fraccionado en contratos menores?",
      "opciones": [
        "No, debe pagarse en un único pago.",
        "Sí, conforme a lo pactado entre las partes.",
        "Solo si el valor supera 10.000 euros.",
        "Solo con autorización del Tribunal de Cuentas."
      ],
      "correcta": 1,
      "justificacion": "En los contratos menores el pago puede fraccionarse conforme a lo pactado en el expediente, cumpliendo con los plazos de pago de la LCSP.",
      "referencia": "Art. 198 Ley 9/2017"
    },
    {
      "id": "1300-45",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "¿Cuál es el plazo máximo de pago de la Administración al contratista tras la presentación de la factura o certificación de obra?",
      "opciones": [
        "15 días.",
        "30 días.",
        "60 días.",
        "90 días."
      ],
      "correcta": 1,
      "justificacion": "El artículo 198.4 fija en 30 días el plazo máximo de pago tras la presentación de la factura o certificación de obras.",
      "referencia": "Art. 198.4 Ley 9/2017"
    },
    {
      "id": "1300-46",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "¿Qué ocurre si la Administración incumple el plazo de 30 días para pagar al contratista?",
      "opciones": [
        "El contratista puede suspender la ejecución automáticamente.",
        "Devengan intereses de demora al tipo legal del dinero más 8 puntos porcentuales.",
        "El contrato queda resuelto de pleno derecho.",
        "El contratista pierde el derecho al cobro."
      ],
      "correcta": 1,
      "justificacion": "El artículo 198.8 establece que transcurrido el plazo de pago, el contratista tendrá derecho a cobrar los intereses de demora previstos en la Ley 3/2004 de medidas contra la morosidad.",
      "referencia": "Art. 198.8 Ley 9/2017 / Ley 3/2004"
    },
    {
      "id": "1300-47",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "Las condiciones especiales de ejecución de carácter social o medioambiental pueden imponerse como:",
      "opciones": [
        "Meras recomendaciones sin efectos contractuales.",
        "Condiciones esenciales cuyo incumplimiento es causa de resolución.",
        "Criterios de desempate únicamente.",
        "Solo en contratos con valor superior a 1 millón de euros."
      ],
      "correcta": 1,
      "justificacion": "El artículo 202.3 permite que los pliegos establezcan condiciones especiales de ejecución cuyo incumplimiento conlleva la resolución del contrato.",
      "referencia": "Art. 202.3 Ley 9/2017"
    },
    {
      "id": "1300-48",
      "tema": "1300",
      "nivel": "plata",
      "enunciado": "¿Qué es el 'acta de comprobación del replanteo' en un contrato de obras?",
      "opciones": [
        "El documento que acredita que el contratista ha constituido la garantía definitiva.",
        "El documento que comprueba in situ que la realidad geométrica y posibilidades físicas del terreno se ajustan al proyecto, levantándose acta del resultado.",
        "La certificación final de obra.",
        "El informe previo de la Intervención."
      ],
      "correcta": 1,
      "justificacion": "El replanteo (arts. 237-238 LCSP) consiste en la comprobación sobre el terreno de que la realidad física se corresponde con el proyecto, condición previa al inicio de las obras.",
      "referencia": "Art. 237 Ley 9/2017"
    },
    {
      "id": "1300-49",
      "tema": "1300",
      "nivel": "bronce",
      "enunciado": "¿Cuántos tipos de garantías pueden exigirse en la contratación pública?",
      "opciones": [
        "Solo la garantía definitiva.",
        "Garantía provisional y garantía definitiva.",
        "Garantía precontractual, definitiva y complementaria.",
        "Provisional, definitiva y complementaria."
      ],
      "correcta": 3,
      "justificacion": "La LCSP contempla tres tipos: garantía provisional (potestativa, art. 106), garantía definitiva (art. 107) y garantía complementaria (potestativa, hasta el 5% adicional).",
      "referencia": "Arts. 106-108 Ley 9/2017"
    },
    {
      "id": "1300-50",
      "tema": "1300",
      "nivel": "oro",
      "enunciado": "La 'Estrategia Nacional de Contratación Pública' es elaborada y aprobada por:",
      "opciones": [
        "El Consejo de Ministros a propuesta del Ministerio de Hacienda.",
        "La Oficina Independiente de Regulación y Supervisión de la Contratación (OIReScon).",
        "La Junta Consultiva de Contratación Pública del Estado.",
        "El Tribunal de Cuentas."
      ],
      "correcta": 1,
      "justificacion": "El artículo 334 encomienda a la OIReScon (Oficina Independiente de Regulación y Supervisión de la Contratación) la elaboración de la Estrategia Nacional de Contratación Pública.",
      "referencia": "Art. 334 Ley 9/2017"
    }
  ]
};

fs.writeFileSync(path.join(__dirname, 'src/data/tema1300.json'), JSON.stringify(tema1300, null, 2), 'utf8');
console.log('tema1300.json creado con 50 preguntas.');
