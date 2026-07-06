const fs = require('fs');
const path = require('path');

const tema9900 = {
  "tema_id": "9900",
  "tema_nombre": "Igualdad de Género (LO 3/2007 y Ley Canaria 1/2010)",
  "preguntas": [
    {
      "id": "9900-01",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "La norma básica estatal en materia de igualdad efectiva de mujeres y hombres es:",
      "opciones": [
        "Ley Orgánica 1/2004, de 28 de diciembre.",
        "Ley Orgánica 3/2007, de 22 de marzo.",
        "Ley Orgánica 4/2000, de 11 de enero.",
        "Real Decreto Legislativo 5/2015, de 30 de octubre."
      ],
      "correcta": 1,
      "justificacion": "La Ley Orgánica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, es el marco normativo básico a nivel nacional.",
      "referencia": "LO 3/2007"
    },
    {
      "id": "9900-02",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "La ley autonómica canaria de igualdad entre mujeres y hombres es:",
      "opciones": [
        "Ley 1/2010, de 26 de febrero.",
        "Ley 2/2003, de 30 de enero.",
        "Decreto Legislativo 1/2011.",
        "Ley 16/2019, de 2 de mayo."
      ],
      "correcta": 0,
      "justificacion": "La Ley 1/2010, de 26 de febrero, canaria de igualdad entre mujeres y hombres, regula las políticas de igualdad en el ámbito de la Comunidad Autónoma de Canarias.",
      "referencia": "Ley 1/2010 de Canarias"
    },
    {
      "id": "9900-03",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "Según el artículo 6 de la LO 3/2007, se considera 'discriminación directa por razón de sexo':",
      "opciones": [
        "La situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular respecto de las del otro.",
        "La situación en que se encuentra una persona que sea, haya sido o pudiera ser tratada, en atención a su sexo, de manera menos favorable que otra en situación comparable.",
        "Cualquier agresión verbal en el ámbito de la pareja.",
        "La exigencia de títulos universitarios para acceder a un puesto de trabajo."
      ],
      "correcta": 1,
      "justificacion": "El artículo 6.1 de la LO 3/2007 define la discriminación directa como el trato menos favorable por razón de sexo en una situación comparable.",
      "referencia": "Art. 6.1 LO 3/2007"
    },
    {
      "id": "9900-04",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "¿Qué es la 'discriminación indirecta por razón de sexo' según la LO 3/2007?",
      "opciones": [
        "El despido de una trabajadora por estar embarazada.",
        "La situación en que una disposición, criterio o práctica aparentemente neutros pone a personas de un sexo en desventaja particular respecto de las del otro, salvo que dicha disposición, criterio o práctica puedan justificarse objetivamente en atención a una finalidad legítima y que los medios para alcanzar dicha finalidad sean necesarios y adecuados.",
        "El acoso sexual en el ámbito laboral.",
        "Diferenciar el salario por una misma función explícitamente en el contrato."
      ],
      "correcta": 1,
      "justificacion": "El artículo 6.2 de la LO 3/2007 define la discriminación indirecta como aquella derivada de normas o criterios aparentemente neutros que generan una desventaja particular para un sexo sin justificación objetiva y legítima.",
      "referencia": "Art. 6.2 LO 3/2007"
    },
    {
      "id": "9900-05",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "Cualquier comportamiento, verbal o físico, de naturaleza sexual que tenga el propósito o produzca el efecto de atentar contra la dignidad de una persona, en particular cuando se crea un entorno intimidatorio, degradante u ofensivo, se define como:",
      "opciones": [
        "Acoso por razón de sexo.",
        "Acoso sexual.",
        "Violencia de género de baja intensidad.",
        "Mobbing laboral ordinario."
      ],
      "correcta": 1,
      "justificacion": "El artículo 7.1 de la LO 3/2007 define expresamente el 'acoso sexual' basándose en la naturaleza sexual del comportamiento que atenta contra la dignidad.",
      "referencia": "Art. 7.1 LO 3/2007"
    },
    {
      "id": "9900-06",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "Por otro lado, el 'acoso por razón de sexo' (art. 7.2 LO 3/2007) consiste en:",
      "opciones": [
        "Exigir favores sexuales a cambio de un ascenso.",
        "Cualquier comportamiento realizado en función del sexo de una persona, con el propósito o el efecto de atentar contra su dignidad y de crear un entorno intimidatorio, degradante u ofensivo.",
        "La agresión física fuera del lugar de trabajo.",
        "El impago reiterado de pensiones alimenticias."
      ],
      "correcta": 1,
      "justificacion": "El acoso por razón de sexo no requiere conductas de contenido sexual, sino hostigamiento o trato indigno motivado por el sexo de la víctima (ej. hostigar a una mujer por su condición de madre o por ejercer trabajos masculinizados).",
      "referencia": "Art. 7.2 LO 3/2007"
    },
    {
      "id": "9900-07",
      "tema": "9900",
      "nivel": "bronce",
      "enunciado": "¿Qué consideración jurídica tienen el acoso sexual y el acoso por razón de sexo en la Ley Orgánica de Igualdad?",
      "opciones": [
        "Infracciones civiles leves.",
        "Se consideran, en todo caso, discriminatorios.",
        "Faltas administrativas no sancionables.",
        "Actos ajenos al derecho laboral."
      ],
      "correcta": 1,
      "justificacion": "El artículo 7.3 de la LO 3/2007 establece de forma tajante que el acoso sexual y el acoso por razón de sexo tendrán la consideración de actos discriminatorios en todo caso.",
      "referencia": "Art. 7.3 LO 3/2007"
    },
    {
      "id": "9900-08",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "¿Qué es la 'transversalidad del principio de igualdad de trato y no discriminación' o 'mainstreaming de género'?",
      "opciones": [
        "Que debe haber exactamente el mismo número de hombres y mujeres en todas las empresas del país.",
        "Que el principio de igualdad integrará y se proyectará en la adopción, ejecución y aplicación de las normas, de las políticas públicas y de las acciones de todas las Administraciones Públicas.",
        "Que se deben eliminar todos los ministerios de igualdad y repartir sus funciones.",
        "La creación de juzgados especiales exclusivos para mujeres en cada municipio."
      ],
      "correcta": 1,
      "justificacion": "El artículo 15 de la LO 3/2007 consagra la transversalidad, obligando a integrar la perspectiva de género en el diseño, ejecución y evaluación de todas las políticas públicas y actuaciones administrativas.",
      "referencia": "Art. 15 LO 3/2007"
    },
    {
      "id": "9900-09",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "¿Qué son las 'acciones positivas' en el marco de la LO 3/2007?",
      "opciones": [
        "Campañas publicitarias en televisión.",
        "Medidas específicas y temporales en favor de las mujeres para corregir situaciones patentes de desigualdad de hecho respecto de los hombres, con el fin de hacer efectiva la igualdad constitucional.",
        "Subvenciones permanentes e ilimitadas a sindicatos.",
        "El despido obligatorio de hombres para contratar mujeres."
      ],
      "correcta": 1,
      "justificacion": "El artículo 11 de la LO 3/2007 legitima la adopción de medidas de acción positiva, que son temporales y específicas, destinadas a compensar las desventajas históricas de las mujeres y lograr la igualdad real.",
      "referencia": "Art. 11 LO 3/2007"
    },
    {
      "id": "9900-10",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "Para la LO 3/2007 y la normativa canaria, se entiende por 'composición equilibrada' en los órganos colegiados, comités de expertos o consejos de administración:",
      "opciones": [
        "Que el 100% de los miembros sean mujeres hasta igualar la serie histórica.",
        "Que las personas de cada sexo no superen el 60 por ciento ni sean menos del 40 por ciento.",
        "Que haya un 50% exacto siempre, sin margen alguno.",
        "Que haya al menos una mujer en cada órgano."
      ],
      "correcta": 1,
      "justificacion": "La disposición adicional primera de la LO 3/2007 y el art. 4 de la Ley Canaria 1/2010 definen la presencia o composición equilibrada como aquella donde cada sexo está representado entre un mínimo del 40% y un máximo del 60%.",
      "referencia": "DA 1ª LO 3/2007 / Art. 4 Ley 1/2010"
    },
    {
      "id": "9900-11",
      "tema": "9900",
      "nivel": "bronce",
      "enunciado": "En los procedimientos judiciales donde se alegue discriminación por razón de sexo, salvo en los procesos penales, ¿cómo opera la carga de la prueba según el art. 13 de la LO 3/2007?",
      "opciones": [
        "El demandante debe demostrar indubitadamente el 100% de la culpabilidad de la empresa.",
        "Corresponde a la persona demandada probar la ausencia de discriminación en las medidas adoptadas y su proporcionalidad, una vez que el demandante haya aportado indicios fundados de discriminación (inversión de la carga de la prueba).",
        "El juez debe investigar de oficio sin participación de las partes.",
        "La carga de la prueba recae siempre en el Ministerio Fiscal."
      ],
      "correcta": 1,
      "justificacion": "El artículo 13 de la LO 3/2007 regula la inversión de la carga de la prueba: aportados indicios de discriminación, corresponde a la parte demandada justificar que su actuación obedeció a causas objetivas y razonables ajenas al sexo.",
      "referencia": "Art. 13 LO 3/2007"
    },
    {
      "id": "9900-12",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "¿Qué documento es obligatorio elaborar con carácter previo en la tramitación de proyectos de ley y reglamentos para evaluar su impacto en la igualdad entre mujeres y hombres?",
      "opciones": [
        "Un informe de viabilidad financiera.",
        "El informe de impacto de género.",
        "El certificado de no discriminación del Ministerio de Trabajo.",
        "La memoria ambiental."
      ],
      "correcta": 1,
      "justificacion": "El artículo 19 de la LO 3/2007 y el artículo 8 de la Ley Canaria 1/2010 exigen que todo proyecto de norma o plan general vaya acompañado preceptivamente de un Informe de Impacto de Género.",
      "referencia": "Art. 19 LO 3/2007 / Art. 8 Ley 1/2010"
    },
    {
      "id": "9900-13",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "Un 'Plan de Igualdad' de una empresa es:",
      "opciones": [
        "Un folleto informativo sobre buenas costumbres.",
        "Un conjunto ordenado de medidas, adoptadas después de realizar un diagnóstico de situación, tendentes a alcanzar en la empresa la igualdad de trato y de oportunidades entre mujeres y hombres y a eliminar la discriminación por razón de sexo.",
        "El registro salarial anual obligatorio para hacienda.",
        "Una declaración jurada del empresario de no contratar ilegalmente."
      ],
      "correcta": 1,
      "justificacion": "El artículo 46 de la LO 3/2007 define los planes de igualdad en las empresas como el conjunto ordenado de medidas evaluables tras un diagnóstico exhaustivo para corregir desigualdades de género en el trabajo.",
      "referencia": "Art. 46 LO 3/2007"
    },
    {
      "id": "9900-14",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "Tras las reformas legales en España (RD-ley 6/2019), ¿para qué empresas es obligatorio elaborar y aplicar un Plan de Igualdad?",
      "opciones": [
        "Solo para empresas de más de 250 trabajadores.",
        "Para todas las empresas de 50 o más trabajadores.",
        "Solo para empresas públicas del Estado.",
        "Para cualquier empresa, incluso de 1 solo trabajador."
      ],
      "correcta": 1,
      "justificacion": "Desde 2022 (tras el calendario progresivo de la reforma del art. 45 LO 3/2007 por el RD-ley 6/2019), es obligatorio el Plan de Igualdad para todas las empresas de 50 o más trabajadores en plantilla.",
      "referencia": "Art. 45 LO 3/2007 (ref. RD-ley 6/2019)"
    },
    {
      "id": "9900-15",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "¿Qué obligación tienen TODAS las empresas en materia de prevención del acoso sexual y del acoso por razón de sexo?",
      "opciones": [
        "Ninguna si tienen menos de 50 empleados.",
        "Promover condiciones de trabajo que eviten el acoso y arbitrar procedimientos específicos para su prevención y para dar cauce a las denuncias o reclamaciones, incluyendo la elaboración de un protocolo anti-acoso.",
        "Contratar un guardia de seguridad privado.",
        "Instalar cámaras en todos los despachos."
      ],
      "correcta": 1,
      "justificacion": "El artículo 48 de la LO 3/2007 obliga a TODAS las empresas (sin importar su tamaño) a prevenir el acoso sexual y por razón de sexo, debiendo contar obligatoriamente con un protocolo de actuación y prevención frente al acoso.",
      "referencia": "Art. 48 LO 3/2007"
    },
    {
      "id": "9900-16",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "¿Qué es el 'distintivo de igualdad en la empresa' (art. 50 LO 3/2007)?",
      "opciones": [
        "Un premio en metálico de 10.000 euros.",
        "Un galardón o marca de excelencia que el Ministerio concede a empresas que destaquen por la aplicación de políticas de igualdad de trato y de oportunidades con sus plantillas.",
        "Una multa por no cumplir la paridad.",
        "Un logotipo obligatorio que se debe llevar en el uniforme."
      ],
      "correcta": 1,
      "justificacion": "El artículo 50 de la LO 3/2007 crea el distintivo de igualdad, otorgado por el Ministerio a empresas con políticas destacadas de igualdad, utilizable en el tráfico comercial y valorable en contratos públicos.",
      "referencia": "Art. 50 LO 3/2007"
    },
    {
      "id": "9900-17",
      "tema": "9900",
      "nivel": "bronce",
      "enunciado": "En el ámbito de la función pública, los permisos por nacimiento para la madre biológica y para el otro progenitor son en la actualidad:",
      "opciones": [
        "16 semanas para la madre y 2 semanas para el padre.",
        "16 semanas intransferibles y remuneradas al 100% para ambos progenitores, en condiciones de plena igualdad.",
        "20 semanas para el padre y 10 para la madre.",
        "No existen permisos pagados en la función pública."
      ],
      "correcta": 1,
      "justificacion": "La reforma del TREBEP y del Estatuto de los Trabajadores igualó el permiso por nacimiento y cuidado del menor en 16 semanas para ambos progenitores, intransferibles y remuneradas al 100%.",
      "referencia": "Art. 49 TREBEP / LO 3/2007"
    },
    {
      "id": "9900-18",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "¿Qué es el 'lenguaje no sexista e inclusivo' en el ámbito administrativo?",
      "opciones": [
        "Prohibir el uso del idioma castellano en los escritos oficiales.",
        "La utilización por parte de la Administración de una redacción y terminología que no oculte, subordine ni infravalore a las mujeres, evitando estereotipos de género en documentos, convocatorias y publicidad oficial.",
        "Escribir todas las palabras terminadas con el símbolo arroba (@) o equis (x) obligatoriamente en leyes.",
        "El uso exclusivo del género femenino en todos los actos."
      ],
      "correcta": 1,
      "justificacion": "El artículo 14.11 de la LO 3/2007 y la Ley Canaria 1/2010 ordenan la implantación de un lenguaje no sexista en todo el ámbito administrativo, promoviendo la visibilidad y el trato igualitario sin incurrir en discriminación lingüística.",
      "referencia": "Art. 14.11 LO 3/2007"
    },
    {
      "id": "9900-19",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "En la Comunidad Autónoma de Canarias, ¿qué organismo público es el encargado de impulsar, coordinar y evaluar las políticas de igualdad entre mujeres y hombres?",
      "opciones": [
        "El Diputado del Común.",
        "El Instituto Canario de Igualdad (ICI).",
        "El Servicio Canario de Empleo.",
        "El Instituto Canario de Administración Pública (ICAP)."
      ],
      "correcta": 1,
      "justificacion": "El Instituto Canario de Igualdad (ICI), creado por Ley 1/1992 (antes Instituto Canario de la Mujer), es el organismo autónomo encargado de promover la igualdad efectiva en Canarias.",
      "referencia": "Ley 1/2010 Canarias / Ley 1/1992"
    },
    {
      "id": "9900-20",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "La 'perspectiva de género en el presupuesto' o presupuestos con enfoque de género exigidos en Canarias (art. 10 Ley 1/2010) implican que:",
      "opciones": [
        "Se debe aprobar un presupuesto separado para hombres y otro para mujeres.",
        "Los Presupuestos Generales de la Comunidad Autónoma deben analizarse e integrarse teniendo en cuenta las diferentes necesidades y el impacto diferenciado en mujeres y hombres de las políticas de gasto e ingreso.",
        "El 50% exacto de cada partida debe gastarse en asociaciones de mujeres.",
        "Las mujeres pagan menos IGIC en todas sus compras."
      ],
      "correcta": 1,
      "justificacion": "El artículo 10 de la Ley Canaria 1/2010 obliga a integrar la perspectiva de género en los presupuestos (presupuestos sensibles al género), elaborándose un informe de impacto de género de la Ley de Presupuestos.",
      "referencia": "Art. 10 Ley 1/2010 Canarias"
    },
    {
      "id": "9900-21",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "¿Qué órgano de coordinación interdepartamental existe en la Administración del Gobierno de Canarias para velar por la aplicación de la Ley 1/2010?",
      "opciones": [
        "La Comisión de Impacto Ambiental.",
        "La Comisión Interdepartamental para la Igualdad entre Mujeres y Hombres.",
        "El Tribunal de Defensa de la Competencia.",
        "El Observatorio de Precios de Canarias."
      ],
      "correcta": 1,
      "justificacion": "El artículo 14 de la Ley Canaria 1/2010 crea la Comisión Interdepartamental para la Igualdad entre Mujeres y Hombres como órgano de coordinación y seguimiento de las políticas de igualdad en las consejerías.",
      "referencia": "Art. 14 Ley 1/2010 Canarias"
    },
    {
      "id": "9900-22",
      "tema": "9900",
      "nivel": "bronce",
      "enunciado": "Según el artículo 4 de la Ley Canaria 1/2010, ¿qué es la 'discriminación múltiple'?",
      "opciones": [
        "Cuando una persona comete el mismo delito tres veces.",
        "La situación en la que una mujer es discriminada por razón de sexo y, de manera simultánea o interseccional, por otras causas sociales como discapacidad, raza, etnia, edad, religión u orientación sexual.",
        "Una multa administrativa que se multiplica por dos.",
        "El acoso sexual ejercido por varios jefes a la vez."
      ],
      "correcta": 1,
      "justificacion": "El artículo 4 de la Ley Canaria 1/2010 y las directrices europeas definen la discriminación múltiple o interseccional como la confluencia de la discriminación por sexo con otros factores de vulnerabilidad o exclusión social.",
      "referencia": "Art. 4 Ley 1/2010 Canarias"
    },
    {
      "id": "9900-23",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "¿En qué consiste la obligación de 'desagregar los datos por sexo' fijada en el art. 20 de la LO 3/2007 y art. 9 de la Ley Canaria 1/2010?",
      "opciones": [
        "En separar físicamente a hombres y mujeres en los archivos en papel.",
        "En que todos los registros, estadísticas, encuestas o estudios que realicen las Administraciones Públicas deberán incluir sistemáticamente la variable sexo para permitir el análisis de situación de mujeres y hombres.",
        "En prohibir que se publiquen estadísticas de población.",
        "En eliminar la variable género de los formularios de empadronamiento."
      ],
      "correcta": 1,
      "justificacion": "Para poder evaluar la realidad y diseñar acciones de igualdad, las leyes exigen sistemáticamente incluir y presentar la variable sexo (datos desagregados) en la producción estadística oficial.",
      "referencia": "Art. 20 LO 3/2007 / Art. 9 Ley 1/2010"
    },
    {
      "id": "9900-24",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "¿Qué papel juega el principio de igualdad en la contratación pública (Ley de Contratos del Sector Público y LO 3/2007)?",
      "opciones": [
        "Ninguno, solo importa el precio en los contratos.",
        "Los órganos de contratación pueden establecer condiciones especiales de ejecución de carácter social, y la prohibición de contratar a empresas sancionadas por discriminación grave o muy grave o por no tener el Plan de Igualdad obligatorio.",
        "Las mujeres tienen derecho al 100% de los contratos menores por ley.",
        "Se prohíbe contratar con empresas extranjeras."
      ],
      "correcta": 1,
      "justificacion": "El artículo 33 de la LO 3/2007 y el art. 71 de la LCSP impiden contratar a empresas sancionadas por infracciones graves en materia de igualdad o por incumplir la obligación de contar con un Plan de Igualdad.",
      "referencia": "Art. 33 LO 3/2007 / Art. 71 LCSP"
    },
    {
      "id": "9900-25",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "La 'paridad en las candidaturas electorales' (art. 44 bis de la LOREG introducido por la LO 3/2007) exige que en las listas de candidatos:",
      "opciones": [
        "El cabeza de lista sea siempre una mujer.",
        "En el conjunto de la lista, y en cada tramo de 5 puestos, las candidaturas tengan una composición equilibrada (mínimo 40% y máximo 60% de cada sexo).",
        "Haya hombres y mujeres separados en listas diferentes.",
        "Haya un 33% de mujeres como recomendación voluntaria."
      ],
      "correcta": 1,
      "justificacion": "La reforma de la LOREG por la LO 3/2007 impuso la composición equilibrada de sexos en las listas electorales, tanto en el global como en cada tramo de 5 candidatos (al menos 2 de cada sexo en cada tramo).",
      "referencia": "Art. 44 bis LOREG / LO 3/2007"
    },
    {
      "id": "9900-26",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "¿Qué función tiene el 'Observatorio de la Igualdad entre Mujeres y Hombres en Canarias'?",
      "opciones": [
        "Sancionar penalmente a las empresas machistas.",
        "Actuar como órgano de consulta, análisis, investigación y difusión de información sobre la situación de las mujeres y hombres en la comunidad autónoma para la toma de decisiones.",
        "Organizar viajes de ocio para asociaciones de mujeres.",
        "Recaudar multas de inspección de trabajo."
      ],
      "correcta": 1,
      "justificacion": "La Ley Canaria 1/2010 contempla el Observatorio de la Igualdad como instrumento de estudio, diagnóstico y recopilación estadística para asesorar en las políticas de igualdad.",
      "referencia": "Art. 18 Ley 1/2010 Canarias"
    },
    {
      "id": "9900-27",
      "tema": "9900",
      "nivel": "bronce",
      "enunciado": "El 'Consejo Canario de Igualdad entre Mujeres y Hombres' es:",
      "opciones": [
        "El tribunal de justicia exclusivo para violencia de género.",
        "El órgano de participación social, consultivo y de asesoramiento en las políticas de igualdad de la Comunidad Autónoma de Canarias.",
        "La comisión de Hacienda del Parlamento.",
        "Una asociación juvenil del archipiélago."
      ],
      "correcta": 1,
      "justificacion": "El artículo 17 de la Ley Canaria 1/2010 configura el Consejo Canario de Igualdad como el máximo órgano consultivo y de participación de las asociaciones de mujeres y agentes sociales en el Gobierno canario.",
      "referencia": "Art. 17 Ley 1/2010 Canarias"
    },
    {
      "id": "9900-28",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "¿Qué es la 'brecha salarial de género'?",
      "opciones": [
        "La distancia en kilómetros entre el trabajo del hombre y la mujer.",
        "La diferencia existente entre el salario medio percibido por los hombres y el percibido por las mujeres por un trabajo de igual valor o en el conjunto de la economía.",
        "El impuesto que pagan las empresas sin plan de igualdad.",
        "La diferencia en días de vacaciones entre directivos y obreros."
      ],
      "correcta": 1,
      "justificacion": "La brecha salarial es el indicador que mide la disparidad de ingresos laborales medios entre hombres y mujeres. El art. 28 del ET exige igual retribución por trabajo de igual valor para combatirla.",
      "referencia": "Art. 28 ET / LO 3/2007"
    },
    {
      "id": "9900-29",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "¿En qué consiste la obligación de llevar un 'Registro Retributivo' en todas las empresas (RD 902/2020 y art. 28 ET)?",
      "opciones": [
        "En publicar los nombres y sueldos de los empleados en internet.",
        "En que el empresario debe llevar un registro con los valores medios de los salarios, complementos y percepciones extrasalariales de toda su plantilla, desagregados por sexo y por grupos profesionales o trabajos de igual valor.",
        "En pagar a todos los trabajadores el salario mínimo exacto.",
        "En enviar una copia de las cuentas personales de los empleados al banco."
      ],
      "correcta": 1,
      "justificacion": "El artículo 28 del Estatuto de los Trabajadores y el RD 902/2020 obligan a todas las empresas a tener un registro retributivo para garantizar la transparencia salarial y detectar brechas de género.",
      "referencia": "Art. 28 ET / RD 902/2020"
    },
    {
      "id": "9900-30",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "Si en una empresa de más de 50 trabajadores el promedio de las retribuciones de los hombres supera al de las mujeres en un 25% o más para trabajos de igual valor, la empresa está obligada a:",
      "opciones": [
        "Despedir inmediatamente al 25% de los hombres.",
        "Incluir una justificación en el Registro Retributivo de que dicha diferencia responde a motivos no relacionados con el sexo de las personas trabajadoras.",
        "Cerrar la fábrica por orden judicial.",
        "Subir los precios de sus productos."
      ],
      "correcta": 1,
      "justificacion": "El artículo 28.3 del Estatuto de los Trabajadores establece la presunción de anomalía retributiva si la diferencia media es del 25% o superior, exigiendo una justificación objetiva y ajena al sexo.",
      "referencia": "Art. 28.3 ET"
    },
    {
      "id": "9900-31",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "¿Qué promueve el principio de 'corresponsabilidad y conciliación de la vida personal, familiar y laboral'?",
      "opciones": [
        "Que las mujeres trabajen a media jornada para cuidar de los niños.",
        "La asunción equitativa y compartida de las responsabilidades familiares y de cuidados entre hombres y mujeres, junto con medidas que permitan armonizar el tiempo de trabajo y la vida privada.",
        "Que los niños vayan a la escuela los domingos.",
        "La prohibición de las horas extras en toda España."
      ],
      "correcta": 1,
      "justificacion": "El artículo 44 de la LO 3/2007 y el Título II de la Ley Canaria 1/2010 fomentan la conciliación desde la corresponsabilidad compartida, evitando que el peso del cuidado recaiga exclusivamente en las mujeres.",
      "referencia": "Art. 44 LO 3/2007 / Ley 1/2010"
    },
    {
      "id": "9900-32",
      "tema": "9900",
      "nivel": "bronce",
      "enunciado": "El 'techo de cristal' es un sociologismo utilizado en igualdad que hace referencia a:",
      "opciones": [
        "Las oficinas con ventanas en los rascacielos de las empresas.",
        "La barrera invisible, derivada de prejuicios y roles tradicionales, que impide o dificulta a las mujeres cualificadas alcanzar los puestos directivos y de máxima decisión en las organizaciones.",
        "La protección excesiva del gobierno hacia las familias numerosas.",
        "El salario máximo legal imponible."
      ],
      "correcta": 1,
      "justificacion": "El techo de cristal describe los obstáculos invisibles de carácter cultural y estructural que frenan el ascenso laboral y directivo de las mujeres en la sociedad.",
      "referencia": "Sociología de género / LO 3/2007"
    },
    {
      "id": "9900-33",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "En la Ley Canaria 1/2010, ¿qué se establece sobre la publicidad de las Administraciones Públicas canarias?",
      "opciones": [
        "Que no pueden contratar anuncios en radio.",
        "Que en toda su comunicación y publicidad institucional se prohíbe el uso de contenidos sexistas, vejatorios o que justifiquen la violencia, debiendo transmitir una imagen igualitaria, plural y activa de hombres y mujeres.",
        "Que toda la publicidad debe ser en blanco y negro.",
        "Que deben publicitar solo marcas locales canarias."
      ],
      "correcta": 1,
      "justificacion": "El artículo 22 de la Ley Canaria 1/2010 prohíbe terminantemente la publicidad institucional sexista, obligando a promover valores de igualdad, respeto y superación de roles tradicionales.",
      "referencia": "Art. 22 Ley 1/2010 Canarias"
    },
    {
      "id": "9900-34",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "La 'coeducación' promovida por el sistema educativo y la Ley Canaria de Igualdad busca:",
      "opciones": [
        "Separar a niños y niñas en colegios distintos según su sexo.",
        "Un modelo educativo que se basa en la igualdad de valores entre sexos, eliminando estereotipos, roles sexistas y jerarquías de género para el desarrollo integral de la persona.",
        "Dar el doble de clases de gimnasia a los niños.",
        "Excluir la enseñanza de las ciencias en primaria."
      ],
      "correcta": 1,
      "justificacion": "El artículo 24 y ss. de la Ley Canaria 1/2010 y las leyes de educación impulsan la coeducación como pedagogía de la igualdad para prevenir el machismo y formar ciudadanías libres de prejuicios.",
      "referencia": "Art. 24 Ley 1/2010 Canarias"
    },
    {
      "id": "9900-35",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "¿Cuál es la vigencia de un Plan de Igualdad en una empresa una vez aprobado?",
      "opciones": [
        "Tiene carácter indefinido hasta la disolución de la empresa.",
        "La que determinen las partes negociadoras en el convenio o acuerdo, pero en ningún caso podrá ser superior a 4 años.",
        "Exactamente 1 año, debiendo renovarse cada enero.",
        "10 años improrrogables."
      ],
      "correcta": 1,
      "justificacion": "El RD 901/2020 (que desarrolla el art. 46 LO 3/2007) establece que el periodo de vigencia del Plan de Igualdad será el fijado por la comisión negociadora, sin que pueda exceder en ningún caso de 4 años.",
      "referencia": "Art. 9 RD 901/2020 / Art. 46 LO 3/2007"
    },
    {
      "id": "9900-36",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "La Ley Orgánica 3/2007 reconoce la nulidad del despido de las trabajadoras en determinadas circunstancias. ¿Cuál de las siguientes causa la nulidad objetiva del despido salvo que se declare procedente por motivos no relacionados?",
      "opciones": [
        "El despido durante el periodo de prueba por llegar tarde una vez.",
        "El despido de las trabajadoras durante el periodo de embarazo, desde la fecha de inicio del embarazo hasta el comienzo del permiso por nacimiento, o durante el disfrute de los permisos de nacimiento, adopción o cuidado de lactante.",
        "El despido tras cumplir 65 años de edad.",
        "El despido por cierre total de una multinacional en Europa."
      ],
      "correcta": 1,
      "justificacion": "El artículo 55 del ET (reforzado por la LO 3/2007 para la tutela antidiscriminatoria) declara nulo de pleno derecho el despido de trabajadoras embarazadas o en disfrute de permisos de nacimiento/cuidados.",
      "referencia": "Art. 55 ET / LO 3/2007"
    },
    {
      "id": "9900-37",
      "tema": "9900",
      "nivel": "bronce",
      "enunciado": "¿Qué es la 'evaluación de impacto de género en el planeamiento urbanístico'?",
      "opciones": [
        "Prohibir construir edificios de más de cuatro pisos.",
        "La obligación de incorporar en los planes de ordenación urbana y territorial criterios que atiendan a las necesidades de la vida cotidiana, seguridad, accesibilidad, iluminación y movilidad de mujeres y hombres.",
        "Pintar los bancos de los parques de color morado.",
        "Reservar la mitad de las viviendas públicas solo para madres solteras."
      ],
      "correcta": 1,
      "justificacion": "La Ley Canaria 1/2010 y la normativa urbanística moderna exigen que el diseño urbanístico integre la perspectiva de género (ciudad inclusiva, segura, bien iluminada, accesible para carritos y cuidados).",
      "referencia": "Art. 31 Ley 1/2010 Canarias"
    },
    {
      "id": "9900-38",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "¿Qué es una 'comisión negociadora' del Plan de Igualdad en la empresa?",
      "opciones": [
        "Un comité formado exclusivamente por abogados del Estado.",
        "El órgano paritario integrado por representantes de la empresa y representantes legales de los trabajadores (sindicatos) encargado de negociar, elaborar y evaluar el Plan de Igualdad y el diagnóstico de situación.",
        "Una auditoría bancaria externa que fija los sueldos.",
        "El consejo de administración cuando vota en secreto."
      ],
      "correcta": 1,
      "justificacion": "El RD 901/2020 regula la constitución obligatoria de una comisión negociadora paritaria (empresa - sindicatos/representantes) que lidera todo el proceso del Plan de Igualdad.",
      "referencia": "RD 901/2020 / Art. 46 LO 3/2007"
    },
    {
      "id": "9900-39",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "El incumplimiento por parte de una empresa de las obligaciones en materia de planes y medidas de igualdad tipificado en la Ley de Infracciones y Sanciones del Orden Social (LISOS) puede constituir:",
      "opciones": [
        "Una simple advertencia sin multa económica.",
        "Una infracción grave (o muy grave en caso de no elaborarlo habiendo sido requerido por la Inspección o tratarse de discriminación directa/indirecta), con multas económicas considerables.",
        "Un delito de traición penal contra la Constitución.",
        "La expropiación del inmueble de la empresa."
      ],
      "correcta": 1,
      "justificacion": "La LISOS clasifica como infracción grave no cumplir las obligaciones del registro retributivo o plan de igualdad, y como muy grave no elaborar el plan de igualdad cuando lo ordena la autoridad laboral o discriminar por sexo.",
      "referencia": "LISOS (RDL 5/2000)"
    },
    {
      "id": "9900-40",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "El Título III de la Ley Orgánica 3/2007 está dedicado a:",
      "opciones": [
        "La regulación del Ejército de Tierra.",
        "La Igualdad y los Medios de Comunicación, imponiendo el respeto a la igualdad en las televisiones y radios (en especial las de titularidad pública) y en la publicidad.",
        "Los impuestos de aduanas entre España y Francia.",
        "El régimen penal del homicidio imprudente."
      ],
      "correcta": 1,
      "justificacion": "El Título III de la LO 3/2007 (arts. 36-41) regula la igualdad en los medios de comunicación social y la publicidad, prohibiendo contenidos que fomenten la violencia o estereotipos machistas.",
      "referencia": "Arts. 36-41 LO 3/2007"
    },
    {
      "id": "9900-41",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "¿En qué consiste el 'sufragio pasivo' en condiciones de igualdad según la LO 3/2007?",
      "opciones": [
        "El derecho de las mujeres a votar en secreto en las urnas.",
        "El derecho de mujeres y hombres a poder ser elegidos como candidatos y ocupar cargos públicos representativos en condiciones de paridad y equilibrio en las listas electorales.",
        "La obligación de los mayores de 80 años de no ir a votar.",
        "La exención del pago de tasas judiciales para votar."
      ],
      "correcta": 1,
      "justificacion": "El sufragio pasivo es el derecho a ser elegido/a en comicios; la ley introdujo listas equilibradas (40-60%) para hacer real y efectivo el sufragio pasivo de las mujeres en las instituciones representativas.",
      "referencia": "LO 3/2007 / CE"
    },
    {
      "id": "9900-42",
      "tema": "9900",
      "nivel": "bronce",
      "enunciado": "¿Tiene la maternidad o el embarazo algún efecto negativo en la valoración de los méritos en los concursos del personal funcionario (TREBEP y LO 3/2007)?",
      "opciones": [
        "Sí, se restan puntos por cada mes de baja maternal.",
        "No, los permisos y periodos de excedencia por cuidado de hijos y maternidad se computarán a todos los efectos como tiempo de servicio y no pueden causar perjuicio en la promoción ni en la valoración de méritos.",
        "Solo perjudica si el permiso exceede de dos semanas.",
        "El funcionario pierde su puesto definitivo automáticamente."
      ],
      "correcta": 1,
      "justificacion": "El TREBEP y la LO 3/2007 garantizan que los permisos de maternidad, paternidad y excedencias de cuidados computan como servicio activo a todos los efectos, sin discriminar ni frenar la carrera administrativa.",
      "referencia": "Art. 57 TREBEP / LO 3/2007"
    },
    {
      "id": "9900-43",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "La 'acción positiva en el acceso al empleo público' permite, según la legislación de igualdad, que ante una igualdad de méritos y puntuación entre candidatos de distinto sexo:",
      "opciones": [
        "Se lance una moneda al aire para decidir.",
        "Las convocatorias puedan establecer criterios de preferencia para el sexo infrarepresentado en ese cuerpo o escala, siempre que concurran condiciones de igualdad de idoneidad y méritos.",
        "Se descalifique automáticamente al candidato de mayor edad.",
        "Se anule la plaza de la oposición."
      ],
      "correcta": 1,
      "justificacion": "La jurisprudencia y las leyes permiten reglas de desempate en favor del sexo infrarepresentado (menos del 40%) como medida de acción positiva en el empleo público, siempre que haya empate real de méritos y capacidades.",
      "referencia": "LO 3/2007 / TREBEP"
    },
    {
      "id": "9900-44",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "¿Cuál es la principal diferencia entre la Ley Orgánica 1/2004 y la Ley Orgánica 3/2007?",
      "opciones": [
        "No hay diferencia, abordan exactamente los mismos delitos penales.",
        "La LO 1/2004 es específica de medidas de protección integral contra la Violencia de Género (ámbito penal y asistencial en parejas/exparejas); la LO 3/2007 es la ley general y transversal de Igualdad Efectiva entre Mujeres y Hombres (ámbito laboral, civil, administrativo y social).",
        "La LO 1/2004 es europea y la LO 3/2007 es municipal.",
        "La LO 3/2007 derogó por completo la LO 1/2004."
      ],
      "correcta": 1,
      "justificacion": "La LO 1/2004 se centra en la erradicación y castigo de la violencia de género en el ámbito de las relaciones sentimentales; la LO 3/2007 aborda la igualdad de trato y oportunidades en toda la estructura económica, pública y social del Estado.",
      "referencia": "LO 1/2004 / LO 3/2007"
    },
    {
      "id": "9900-45",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "La Ley Canaria 1/2010 obliga a los poderes públicos canarios a fomentar la presencia equilibrada de mujeres y hombres en los comités evaluadores y tribunales de selección de personal. ¿A qué se refiere?",
      "opciones": [
        "A que los exámenes sean escritos con bolígrafo azul y negro a partes iguales.",
        "A que la composición de los tribunales de oposiciones y concursos de la Administración autonómica debe ser equilibrada entre mujeres y hombres (40%-60%).",
        "A que los aspirantes hombres paguen el doble de tasas de examen.",
        "A que las pruebas físicas sean abolidas para siempre."
      ],
      "correcta": 1,
      "justificacion": "El artículo 60 del TREBEP y la Ley Canaria 1/2010 ordenan la composición paritaria o equilibrada en los órganos y tribunales de selección de personal funcionario y laboral en las Administraciones.",
      "referencia": "Art. 60 TREBEP / Ley 1/2010"
    },
    {
      "id": "9900-46",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "¿Qué es el 'acoso discriminatorio' o discriminación por asociación en el ámbito de la igualdad de trato?",
      "opciones": [
        "Cuando una persona es discriminada por defender los derechos de igualdad o por relacionarse con personas de un sexo determinado o vulneradas.",
        "El acoso que sufren los árbitros de fútbol los domingos.",
        "La negativa de un banco a dar una tarjeta de crédito a un menor.",
        "Una pelea entre vecinos en una junta judicial."
      ],
      "correcta": 0,
      "justificacion": "La discriminación por asociación y la represalia (art. 9 LO 3/2007) prohíben discriminar o acosar a quien, sin ser la víctima directa, apoya o se asocia con quien denuncia o sufre discriminación por sexo.",
      "referencia": "Art. 9 LO 3/2007"
    },
    {
      "id": "9900-47",
      "tema": "9900",
      "nivel": "bronce",
      "enunciado": "La creación de 'Unidades de Igualdad' en los ministerios y consejerías (art. 77 LO 3/2007 y normativa canaria) tiene como objetivo:",
      "opciones": [
        "Organizar cenas de navidad y eventos benéficos.",
        "Asesorar, coordinar e impulsar la ejecución de las medidas previstas en la ley de igualdad, realizar los informes de impacto de género y velar por el respeto al principio de igualdad en cada departamento gubernamental.",
        "Imponer multas de tráfico a infractores machistas.",
        "Sustituir al cuerpo general de la policía local."
      ],
      "correcta": 1,
      "justificacion": "Las Unidades de Igualdad son las estructuras administrativas internas en cada Departamento gubernamental responsables de la aplicación técnica y seguimiento de la transversalidad de género.",
      "referencia": "Art. 77 LO 3/2007 / Ley 1/2010"
    },
    {
      "id": "9900-48",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "¿Puede el convenio colectivo de un sector o empresa establecer diferencias retributivas o condiciones más peores para categorías profesionalmente feminizadas respecto a las masculinizadas para trabajos de igual valor?",
      "opciones": [
        "Sí, lo que firme un sindicato en convenio es sagrado e intocable.",
        "No, los convenios colectivos que contengan cláusulas discriminatorias directas o indirectas por razón de sexo son nulos de pleno derecho en dichas cláusulas.",
        "Sí, si la empresa demuestra que pierde dinero.",
        "Solo si lo autoriza el alcalde del municipio."
      ],
      "correcta": 1,
      "justificacion": "El artículo 90 del ET y el art. 24 de la LO 3/2007 declaran la nulidad constitucional y legal de cualquier cláusula convencional o contractual que genere discriminación salarial o laboral directa o indirecta por razón de sexo.",
      "referencia": "Art. 90 ET / LO 3/2007"
    },
    {
      "id": "9900-49",
      "tema": "9900",
      "nivel": "plata",
      "enunciado": "¿Qué es la 'auditoría retributiva' dentro del Plan de Igualdad de una empresa?",
      "opciones": [
        "Un recuento de las mesas y sillas de la oficina.",
        "Una evaluación y comprobación exhaustiva del sistema retributivo y de promoción de la empresa para verificar que no existen desigualdades de género en los salarios por trabajos de igual valor, estableciendo un plan de actuación para corregir brechas.",
        "La declaración anual de impuestos ante la Agencia Tributaria canaria.",
        "El pago en efectivo del aguinaldo navideño."
      ],
      "correcta": 1,
      "justificacion": "El RD 901/2020 y RD 902/2020 exigen que toda empresa con obligación de Plan de Igualdad incluya una auditoría retributiva con valoración de puestos de trabajo y plan corrector de brechas.",
      "referencia": "RD 902/2020 / ET"
    },
    {
      "id": "9900-50",
      "tema": "9900",
      "nivel": "oro",
      "enunciado": "El derecho a la igualdad de trato entre mujeres y hombres en España es un derecho:",
      "opciones": [
        "Mero principio orientador sin eficacia en los tribunales.",
        "Fundamental, consagrado en el artículo 14 de la Constitución Española, vinculante para todos los poderes públicos y particulares, cuya violación permite recurso de amparo constitucional.",
        "Derecho exclusivo aplicable en grandes capitales europeas.",
        "Una recomendación voluntaria que las empresas aplican si quieren."
      ],
      "correcta": 1,
      "justificacion": "El artículo 14 de la Constitución Española proclama la igualdad y no discriminación por razón de sexo como derecho fundamental de máxima protección (amparo judicial y constitucional).",
      "referencia": "Art. 14 CE / LO 3/2007"
    }
  ]
};

fs.writeFileSync(path.join(__dirname, 'src/data/tema9900.json'), JSON.stringify(tema9900, null, 2), 'utf8');
console.log('tema9900.json creado con 50 preguntas.');
