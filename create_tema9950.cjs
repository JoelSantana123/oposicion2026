const fs = require('fs');
const path = require('path');

const tema9950 = {
  "tema_id": "9950",
  "tema_nombre": "Discapacidad y Dependencia (RDL 1/2013 y Ley 39/2006)",
  "preguntas": [
    {
      "id": "9950-01",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "La norma estatal que aprueba el Texto Refundido de la Ley General de derechos de las personas con discapacidad y de su inclusión social es:",
      "opciones": [
        "Ley 51/2003, de 2 de diciembre (LIONDAEU).",
        "Real Decreto Legislativo 1/2013, de 29 de noviembre.",
        "Ley 13/1982, de 7 de abril (LISMI).",
        "Ley Orgánica 2/2018, de 5 de diciembre."
      ],
      "correcta": 1,
      "justificacion": "El Real Decreto Legislativo 1/2013, de 29 de noviembre, refundió en un solo texto normativo la anterior LISMI, la LIONDAEU y la ley sobre infracciones y sanciones en materia de igualdad de oportunidades y no discriminación de personas con discapacidad.",
      "referencia": "RDL 1/2013"
    },
    {
      "id": "9950-02",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "A los efectos de la Ley General de derechos de las personas con discapacidad (RDL 1/2013), ¿qué consideración tienen las personas con discapacidad?",
      "opciones": [
        "Aquellas que presentan deficiencias físicas, mentales, intelectuales o sensoriales, previsiblemente permanentes que, al interactuar con diversas barreras, puedan impedir su participación plena y efectiva en la sociedad, en igualdad de condiciones con las demás.",
        "Exclusivamente las personas jubiladas por incapacidad laboral permanente absoluta.",
        "Cualquier persona que esté en situación de desempleo mayor de 50 años.",
        "Aquellas que necesiten ayuda de tercera persona para vestirse y comer."
      ],
      "correcta": 0,
      "justificacion": "El artículo 4 del RDL 1/2013 recoge la definición del modelo social de la Convención de la ONU sobre los Derechos de las Personas con Discapacidad de 2006 (interacción entre deficiencias permanentes y barreras del entorno).",
      "referencia": "Art. 4.1 RDL 1/2013"
    },
    {
      "id": "9950-03",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "¿Qué grado de discapacidad mínimo se requiere como regla general para que una persona sea reconocida como titular de los derechos previstos en el RDL 1/2013?",
      "opciones": [
        "Un grado de discapacidad igual o superior al 10%.",
        "Un grado de discapacidad igual o superior al 33%.",
        "Un grado de discapacidad del 50%.",
        "Un grado de discapacidad del 65% en todo caso."
      ],
      "correcta": 1,
      "justificacion": "El artículo 4.2 del RDL 1/2013 establece que tendrán la consideración de personas con discapacidad aquellas a quienes se les haya reconocido un grado de discapacidad igual o superior al 33 por ciento.",
      "referencia": "Art. 4.2 RDL 1/2013"
    },
    {
      "id": "9950-04",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "A los efectos del RDL 1/2013, ¿qué personas se considerarán, en todo caso, que presentan una discapacidad en grado igual o superior al 33 por ciento aunque no tengan certificado?",
      "opciones": [
        "Los pensionistas de la Seguridad Social que tengan reconocida una pensión de incapacidad permanente en el grado de total, absoluta o gran invalidez, y los pensionistas de clases pasivas con pensión de jubilación o retiro por incapacidad permanente para el servicio.",
        "Las mujeres embarazadas a partir del sexto mes de gestación.",
        "Los trabajadores que lleven más de seis meses de baja médica por accidente de tráfico.",
        "Las personas que hayan cumplido los 70 años de edad."
      ],
      "correcta": 0,
      "justificacion": "El artículo 4.2 asimila expresamente a un grado igual o superior al 33% a los pensionistas de incapacidad permanente total, absoluta o gran invalidez de la Seguridad Social y equivalentes de Clases Pasivas.",
      "referencia": "Art. 4.2 RDL 1/2013"
    },
    {
      "id": "9950-05",
      "tema": "9950",
      "nivel": "bronce",
      "enunciado": "La 'accesibilidad universal' se define en el RDL 1/2013 como:",
      "opciones": [
        "Que todos los autobuses sean gratis.",
        "La condición que deben cumplir los entornos, procesos, bienes, productos y servicios, así como los objetos o instrumentos, herramientas y dispositivos, para ser comprensibles, utilizables y practicables por todas las personas en condiciones de seguridad y comodidad y de la forma más autónoma y natural posible.",
        "La obligación de tener rampas de hormigón en todas las casas particulares.",
        "El acceso gratuito a internet de alta velocidad en edificios públicos."
      ],
      "correcta": 1,
      "justificacion": "La accesibilidad universal (art. 2.k RDL 1/2013) presupone la estrategia de 'diseño universal o diseño para todas las personas' para eliminar cualquier barrera física, sensorial o cognitiva.",
      "referencia": "Art. 2.k) RDL 1/2013"
    },
    {
      "id": "9950-06",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "¿Qué son los 'ajustes razonables' según la normativa sobre discapacidad?",
      "opciones": [
        "Descuentos en el precio de los alquileres sociales.",
        "Las modificaciones y adaptaciones necesarias y adecuadas del ambiente físico, social y actitudinal a las necesidades específicas de las personas con discapacidad que no impongan una carga desproporcionada o indebida, cuando se requieran en un caso particular de forma eficaz y práctica.",
        "La obligación de contratar el doble de plantilla en las empresas.",
        "El pago de una pensión mensual por parte del Ayuntamiento."
      ],
      "correcta": 1,
      "justificacion": "El artículo 2.m) define los ajustes razonables como adaptaciones particularizadas que evitan la discriminación sin suponer una carga desproporcionada para quien debe realizarlas.",
      "referencia": "Art. 2.m) RDL 1/2013"
    },
    {
      "id": "9950-07",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "El 'diseño universal o diseño para todas las personas' implica que:",
      "opciones": [
        "Los productos y entornos sean diseñados de modo que puedan ser utilizados por todas las personas, en la mayor medida posible, sin necesidad de adaptación ni diseño especializado.",
        "Toda la ropa se fabrique en una única talla grande.",
        "Los edificios públicos se pinten del mismo color.",
        "Solo se vendan vehículos adaptados para sillas de ruedas en los concesionarios."
      ],
      "correcta": 0,
      "justificacion": "El artículo 2.l) define el diseño universal como la concepción originaria de productos y entornos para que sirvan a la diversidad humana sin necesidad de adaptaciones posteriores.",
      "referencia": "Art. 2.l) RDL 1/2013"
    },
    {
      "id": "9950-08",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "¿Qué es la 'cuota de reserva' de empleo para personas con discapacidad en empresas públicas y privadas según el RDL 1/2013?",
      "opciones": [
        "Las empresas de 50 o más trabajadores están obligadas a que de entre el total de su plantilla al menos el 2 por ciento sean trabajadores con discapacidad.",
        "Las empresas de más de 10 trabajadores deben tener un 5 por ciento de discapacitados.",
        "Solo las empresas del Ibex 35 tienen obligación de reservar puestos.",
        "Una recomendación voluntaria de contratar al 1 por ciento en fábricas."
      ],
      "correcta": 0,
      "justificacion": "El artículo 42.1 del RDL 1/2013 fija la obligación legal de reserva del 2% de puestos de trabajo para personas con discapacidad en empresas públicas y privadas que empleen a un número de 50 o más trabajadores.",
      "referencia": "Art. 42.1 RDL 1/2013"
    },
    {
      "id": "9950-09",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "En el ámbito del Empleo Público (TREBEP y RDL 1/2013), ¿cuál es el porcentaje mínimo de reserva en las Ofertas de Empleo Público para personas con discapacidad?",
      "opciones": [
        "Un cupo no inferior al 5 por ciento de las vacantes.",
        "Un cupo no inferior al 7 por ciento de las vacantes para ser cubiertas entre personas con discapacidad, reservando al menos un 2 por ciento para personas con discapacidad intelectual.",
        "El 10 por ciento de las plazas directivas exclusivamente.",
        "Un cupo del 2 por ciento solo en ayuntamientos."
      ],
      "correcta": 1,
      "justificacion": "El artículo 59 del TREBEP establece una cuota de reserva en el empleo público no inferior al 7% de las vacantes (destinando un mínimo del 2% para discapacidad intelectual y el 5% restante para otros tipos).",
      "referencia": "Art. 59 TREBEP / RDL 1/2013"
    },
    {
      "id": "9950-10",
      "tema": "9950",
      "nivel": "bronce",
      "enunciado": "Si una empresa privada de más de 50 trabajadores no puede cumplir excepcionalmente con la cuota de contratación del 2% de personas con discapacidad, ¿qué puede hacer según la ley?",
      "opciones": [
        "Nada, se le cierra el negocio inmediatamente.",
        "Acogerse a las 'medidas alternativas' autorizadas por la autoridad laboral, como la celebración de contratos mercantiles con Centros Especiales de Empleo o realizar donaciones/patrocinios a entidades sin ánimo de lucro del ámbito de la discapacidad.",
        "Pagar un impuesto anual de 100 euros al ayuntamiento.",
        "Pedir una exención indefinida sin necesidad de justificar nada."
      ],
      "correcta": 1,
      "justificacion": "La legislación (RD 364/2005 y RDL 1/2013) permite la declaración de excepcionalidad y el cumplimiento mediante medidas alternativas (contratar con CEE o donaciones a ONG de discapacidad).",
      "referencia": "Art. 42.1 RDL 1/2013 / RD 364/2005"
    },
    {
      "id": "9950-11",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "¿Qué es un 'Centro Especial de Empleo' (CEE)?",
      "opciones": [
        "Una oficina de empleo del SEPE para mayores de 45 años.",
        "Aquel cuyo objetivo principal es el trabajo productivo y la integración laboral de personas con discapacidad, en el que su plantilla debe contar con un mínimo del 70 por ciento de personas trabajadoras con discapacidad.",
        "Un colegio especial para educación primaria.",
        "Una empresa ordinaria que no paga Seguridad Social."
      ],
      "correcta": 1,
      "justificacion": "El artículo 43 del RDL 1/2013 define los Centros Especiales de Empleo (de iniciativa social o empresarial), exigiendo que al menos el 70% de la plantilla sean personas con discapacidad en trabajo protegido y productivo.",
      "referencia": "Art. 43 RDL 1/2013"
    },
    {
      "id": "9950-12",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "¿En qué consiste el 'empleo con apoyo' según la legislación de discapacidad?",
      "opciones": [
        "Una subvención económica mensual que se da al jefe de la empresa.",
        "Una modalidad de inclusión laboral que consiste en un conjunto de acciones de orientación y acompañamiento individualizado en el propio puesto de trabajo, prestadas por preparadores laborales especializados, a personas con discapacidad en empresas ordinarias.",
        "Que los familiares del trabajador vayan con él a la oficina a hacer el trabajo.",
        "El teletrabajo obligatorio desde el domicilio del empleado."
      ],
      "correcta": 1,
      "justificacion": "El empleo con apoyo (art. 41 RDL 1/2013) facilita la inserción en el mercado ordinario mediante la figura del preparador laboral que entrena y acompaña al trabajador in situ hasta lograr su autonomía.",
      "referencia": "Art. 41 RDL 1/2013"
    },
    {
      "id": "9950-13",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "La Ley 39/2006, de 14 de diciembre, es conocida como:",
      "opciones": [
        "Ley de Seguridad Social y Pensiones no Contributivas.",
        "Ley de Promoción de la Autonomía Personal y Atención a las personas en situación de dependencia (Ley de Dependencia).",
        "Ley de Sanidad e Higiene Asistencial.",
        "Ley General Tributaria Aliviada."
      ],
      "correcta": 1,
      "justificacion": "La Ley 39/2006, de 14 de diciembre, configura el Sistema para la Autonomía y Atención a la Dependencia (SAAD) y regula los derechos de las personas en situación de dependencia.",
      "referencia": "Ley 39/2006 (SAAD)"
    },
    {
      "id": "9950-14",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "A los efectos de la Ley 39/2006, se entiende por 'Dependencia':",
      "opciones": [
        "Estar en situación de paro laboral sin cobrar prestación alguna.",
        "El estado de carácter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la pérdida de autonomía física, mental, intelectual o sensorial, precisan de la atención de otra u otras personas o ayudas importantes para realizar las actividades básicas de la vida diaria.",
        "Vivir en el domicilio de los padres siendo mayor de 30 años.",
        "La necesidad de tomar medicamentos recetados a diario."
      ],
      "correcta": 1,
      "justificacion": "El artículo 2.2 de la Ley 39/2006 define la dependencia basándose en la permanencia del estado y la necesidad de ayuda para las actividades básicas de la vida diaria (ABVD).",
      "referencia": "Art. 2.2 Ley 39/2006"
    },
    {
      "id": "9950-15",
      "tema": "9950",
      "nivel": "bronce",
      "enunciado": "¿Qué son las 'Actividades Básicas de la Vida Diaria' (ABVD) en la Ley de Dependencia?",
      "opciones": [
        "Saber conducir un vehículo y navegar por internet.",
        "Las tareas más elementales de la persona, que le permiten desenvolverse con un mínimo de autonomía e independencia, tales como el cuidado personal, las actividades básicas de movilidad, reconocer personas y objetos, orientarse, entender y ejecutar órdenes o tareas sencillas.",
        "Ir a trabajar, hacer deporte y viajar en tren.",
        "Pagar impuestos y acudir a votar en las elecciones."
      ],
      "correcta": 1,
      "justificacion": "El artículo 2.3 de la Ley 39/2006 enumera las ABVD: comer, asearse, vestirse, movilidad dentro del hogar, control de esfínteres, comprensión y orientación elemental.",
      "referencia": "Art. 2.3 Ley 39/2006"
    },
    {
      "id": "9950-16",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "¿Cómo se clasifican los grados de dependencia en la Ley 39/2006?",
      "opciones": [
        "Dependencia Leve (Grado I) y Dependencia Grave (Grado II).",
        "Grado I: Dependencia moderada; Grado II: Dependencia severa; y Grado III: Gran dependencia.",
        "Dependencia parcial (10%), media (50%) y total (100%).",
        "No hay grados, se reconoce o no se reconoce la dependencia sin más."
      ],
      "correcta": 1,
      "justificacion": "El artículo 26 de la Ley 39/2006 clasifica la situación de dependencia en tres grados: Grado I (moderada - ayuda al menos una vez al día), Grado II (severa - ayuda dos o tres veces al día) y Grado III (gran dependencia - ayuda continua y generalizada o pérdida total de autonomía).",
      "referencia": "Art. 26 Ley 39/2006"
    },
    {
      "id": "9950-17",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "El 'Grado III: Gran dependencia' se caracteriza porque la persona:",
      "opciones": [
        "Necesita ayuda para las actividades básicas de la vida diaria al menos una vez al día.",
        "Necesita ayuda para realizar las actividades básicas de la vida diaria dos o tres veces al día, pero no requiere el apoyo permanente de un cuidador.",
        "Necesita ayuda para las actividades básicas de la vida diaria varias veces al día y, por su pérdida total de autonomía física, mental, intelectual o sensorial, necesita el apoyo indispensable y continuo de otra persona o tiene necesidades de apoyo generalizado para su autonomía personal.",
        "Puede vivir absolutamente sola sin ningún tipo de asistencia física."
      ],
      "correcta": 2,
      "justificacion": "El Grado III implica la necesidad del apoyo indispensable y continuo de otra persona (o apoyo generalizado) para poder sobrevivir y desenvolverse en el día a día.",
      "referencia": "Art. 26.1.c) Ley 39/2006"
    },
    {
      "id": "9950-18",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "¿Qué es el PIA en el marco del Sistema para la Autonomía y Atención a la Dependencia (SAAD)?",
      "opciones": [
        "El Plan Integrado de Aduanas.",
        "El Programa Individual de Atención, en el que los servicios sociales determinan, tras consultar al beneficiario, las modalidades de intervención y servicios o prestaciones económicas más adecuadas a su grado de dependencia.",
        "El Padrón Intermunicipal de Ancianos.",
        "La Provisión Institucional de Alimentos."
      ],
      "correcta": 1,
      "justificacion": "El Programa Individual de Atención (PIA) regulado en el art. 29 de la Ley 39/2006 es el instrumento que asigna las prestaciones y servicios concretos del catálogo del SAAD a cada persona dependiente reconocida.",
      "referencia": "Art. 29 Ley 39/2006"
    },
    {
      "id": "9950-19",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "Según el catálogo del SAAD (art. 15 Ley 39/2006), ¿qué prioridad existe entre la concesión de servicios públicos y la concesión de prestaciones económicas directas al dependiente?",
      "opciones": [
        "Las prestaciones económicas en dinero en efectivo tienen prioridad siempre sobre los servicios comunitarios.",
        "Las prestaciones económicas tienen carácter excepcional; la prioridad es la atención a través de los servicios públicos o concertados de la red del Sistema (teleasistencia, ayuda a domicilio, centros de día, residencias).",
        "El usuario está obligado a ir a una residencia privada en todo caso.",
        "No existe orden de preferencia, se echa a suertes."
      ],
      "correcta": 1,
      "justificacion": "La Ley 39/2006 consagra la prioridad de los servicios asistenciales y profesionales sobre las prestaciones económicas, las cuales tienen carácter excepcional cuando no sea posible el acceso a un servicio público/concertado.",
      "referencia": "Art. 14 y 15 Ley 39/2006"
    },
    {
      "id": "9950-20",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "La 'prestación económica para cuidados en el entorno familiar y apoyo a cuidadores no profesionales' (PECEF):",
      "opciones": [
        "Se concede automáticamente a cualquier ciudadano mayor de 65 años.",
        "Tiene carácter excepcional, y solo se reconoce cuando el dependiente está siendo atendido por su cónyuge o parientes (hasta 3º grado) en el propio domicilio, y se cumplen condiciones de convivencia, idoneidad y afiliación a la Seguridad Social del cuidador.",
        "Es una subvención para comprar un coche nuevo a los hijos del dependiente.",
        "Está prohibida y derogada en toda España desde 2012."
      ],
      "correcta": 1,
      "justificacion": "El artículo 18 de la Ley 39/2006 regula la PECEF como prestación excepcional para el cuidado familiar domiciliario, exigiendo convivencia, idoneidad de la vivienda y alta en el convenio especial de cuidadores de la Seguridad Social.",
      "referencia": "Art. 18 Ley 39/2006"
    },
    {
      "id": "9950-21",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "¿Qué es la 'prestación económica vinculada al servicio' (PEVS)?",
      "opciones": [
        "Una ayuda para pagar la factura de la luz en invierno.",
        "Una ayuda económica periódica que se otorga al dependiente únicamente cuando no sea posible el acceso a un servicio público o concertado, destinada a contribuir al pago de la contratación de un servicio privado acreditado (ej. residencia o centro de día privado).",
        "Una pensión vitalicia exenta de IRPF para comprar alimentación.",
        "El salario que paga la Administración al médico de cabecera."
      ],
      "correcta": 1,
      "justificacion": "La PEVS (art. 17 Ley 39/2006) financia el coste de un servicio en el mercado privado acreditado cuando la red pública de servicios sociales no dispone de plaza vacante para el beneficiario en ese momento.",
      "referencia": "Art. 17 Ley 39/2006"
    },
    {
      "id": "9950-22",
      "tema": "9950",
      "nivel": "bronce",
      "enunciado": "La 'prestación económica de asistencia personal' en la Ley de Dependencia tiene como finalidad:",
      "opciones": [
        "Contratar un chófer y un guardaespaldas para el alcalde.",
        "Contribuir a la cobertura de los gastos derivados de la contratación de un asistente personal, que facilite a la persona dependiente el acceso a la educación y al trabajo, así como una vida más autónoma en el ejercicio de las ABVD.",
        "Comprar medicamentos en la farmacia sin pagar copago.",
        "Financiar la contratación de detectives privados."
      ],
      "correcta": 1,
      "justificacion": "El artículo 19 de la Ley 39/2006 y el RDL 1/2013 impulsan la figura del asistente personal para posibilitar una vida independiente y la inclusión comunitaria de la persona con dependencia.",
      "referencia": "Art. 19 Ley 39/2006 / RDL 1/2013"
    },
    {
      "id": "9950-23",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "La Ley 8/2021, de 2 de junio, supuso una reforma histórica en la legislación civil y procesal sobre discapacidad, eliminando en España:",
      "opciones": [
        "Las pensiones de invalidez laboral.",
        "La incapacitación judicial, la declaración de prodigalidad y la tutela sobre las personas con discapacidad intelectual o psicosocial, sustituyéndolas por un sistema de apoyos para el ejercicio de su capacidad jurídica (curatela de apoyo, guarda de hecho...).",
        "Los certificados de grado de discapacidad del 33%.",
        "La obligación del Estado de prestar servicios de dependencia."
      ],
      "correcta": 1,
      "justificacion": "La Ley 8/2021 adaptó el Derecho español al art. 12 de la Convención ONU de 2006, aboliendo la muerte civil de la incapacitación judicial y sustituyendo el modelo de sustitución en la toma de decisiones por un modelo de respeto a la voluntad, deseos y preferencias con apoyos.",
      "referencia": "Ley 8/2021 / Código Civil"
    },
    {
      "id": "9950-24",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "¿Qué es la 'curatela' en la nueva regulación del Código Civil tras la reforma por Ley 8/2021?",
      "opciones": [
        "Una condena de prisión domiciliaria para personas mayores.",
        "La principal medida formal de apoyo continuado para personas con discapacidad, de naturaleza asistencial y no representativa (salvo casos muy excepcionales y debidamente justificados en resolución judicial donde se autorice representación).",
        "La obligación de vivir en un psiquiátrico de por vida.",
        "Un contrato laboral para cuidar de animales."
      ],
      "correcta": 1,
      "justificacion": "La curatela se configura en el art. 250 y ss. del Código Civil como el apoyo formal por excelencia, asistiendo a la persona en sus actos jurídicos sin arrebatarle su voz ni su representación de regla general.",
      "referencia": "Art. 250 Código Civil (ref. Ley 8/2021)"
    },
    {
      "id": "9950-25",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "En la Administración del Gobierno de Canarias, ¿qué centro directivo u organismo es competente para el reconocimiento del grado de discapacidad y del grado de dependencia?",
      "opciones": [
        "La Consejería de Turismo y Empleo.",
        "La Dirección General de Dependencia y Discapacidad (o consejería competente en materia de políticas sociales y servicios sociales).",
        "El Servicio Canario de la Salud exclusivamente a través del médico de cabecera.",
        "Las comisarías de la Policía Nacional y Guardia Civil."
      ],
      "correcta": 1,
      "justificacion": "En Canarias, la valoración y reconocimiento técnico-administrativo de la discapacidad (EVO) y de la dependencia recae en los servicios competentes de políticas sociales de la Comunidad Autónoma.",
      "referencia": "Estructura Orgánica Gobierno Canarias"
    },
    {
      "id": "9950-26",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "¿Cómo se financia el Sistema para la Autonomía y Atención a la Dependencia (SAAD)?",
      "opciones": [
        "Exclusivamente con donaciones voluntarias en iglesias.",
        "Mediante la aportación de la Administración General del Estado (nivel mínimo garantizado y nivel acordado) y de las Comunidades Autónomas, junto con la participación del propio usuario en el coste del servicio según su capacidad económica (copago).",
        "Lo pagan íntegramente las compañías de seguros privadas.",
        "Se financia solo con el fondo europeo de rescate bancario."
      ],
      "correcta": 1,
      "justificacion": "El artículo 32 de la Ley 39/2006 establece la cofinanciación entre Estado y CCAA, incorporando la participación económica del beneficiario en el coste de los servicios en función de su renta y patrimonio.",
      "referencia": "Art. 32 y 33 Ley 39/2006"
    },
    {
      "id": "9950-27",
      "tema": "9950",
      "nivel": "bronce",
      "enunciado": "¿Qué es la 'tarjeta de estacionamiento para personas con discapacidad'?",
      "opciones": [
        "Un permiso para conducir a 200 km/h por autopista.",
        "Un documento personal e intransferible, válido en todo el territorio de España y de la UE, que otorga derechos especiales de aparcamiento y parada a personas con discapacidad que presenten movilidad reducida grave.",
        "Un abono de aparcamiento gratuito en aeropuertos privados únicamente.",
        "Un distintivo de cobro de peajes autovial."
      ],
      "correcta": 1,
      "justificacion": "El RD 1056/2014 y el RDL 1/2013 regulan la tarjeta europea de estacionamiento para personas con movilidad reducida, facilitando plazas reservadas y exenciones horarias.",
      "referencia": "RD 1056/2014 / RDL 1/2013"
    },
    {
      "id": "9950-28",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "¿En qué consiste el 'lenguaje fácil' o 'lectura fácil' como medida de accesibilidad cognitiva?",
      "opciones": [
        "Escribir los textos en un idioma extranjero con traducción.",
        "El método de adaptación y redacción de textos que permite una lectura y comprensión más sencilla del contenido para personas con discapacidad intelectual o con dificultades de comprensión lectora.",
        "Reducir el tamaño de la letra de los documentos para ahorrar papel.",
        "Prohibir la publicación de libros que no tengan dibujos infantiles."
      ],
      "correcta": 1,
      "justificacion": "La Ley 6/2022 reformó el RDL 1/2013 para consagrar y regular la accesibilidad cognitiva y la lectura fácil, asegurando que las leyes, resoluciones y señales públicas sean comprensibles por todas las personas.",
      "referencia": "Ley 6/2022 / RDL 1/2013"
    },
    {
      "id": "9950-29",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "En materia de vivienda, según el RDL 1/2013 y la Ley de Propiedad Horizontal, ¿qué obligación tienen las comunidades de propietarios en un edificio residencial si vive o trabaja en él una persona con discapacidad o mayor de 70 años?",
      "opciones": [
        "Ninguna, no se puede tocar el portal sin acuerdo unánime de todos.",
        "Están obligadas a realizar las obras y actuaciones de accesibilidad (rampas, plataformas, ascensores) cuando lo solicite el discapacitado o mayor de 70 años, siempre que el coste anual descontadas subvenciones no exceda de doce mensualidades ordinarias de gastos comunes (o aunque exceda si el solicitante asume el exceso).",
        "Deben comprarle una vivienda en la planta baja al discapacitado.",
        "Deben eximirle del pago de la cuota de comunidad para siempre."
      ],
      "correcta": 1,
      "justificacion": "El artículo 10 de la Ley de Propiedad Horizontal (modificada en coherencia con el RDL 1/2013) impone la obligatoriedad de los ajustes razonables en las zonas comunes para garantizar la accesibilidad de residentes dependientes o con discapacidad.",
      "referencia": "Art. 10 LPH / RDL 1/2013"
    },
    {
      "id": "9950-30",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "¿Qué son los 'perros de asistencia' o perros guía en la legislación canaria (Ley 3/1993 y Ley 1/2014 de Canarias)?",
      "opciones": [
        "Mascotas que solo pueden pasear en parques para perros.",
        "Animales adiestrados en centros reconocidos para el auxilio de personas con discapacidad visual, auditiva, física, autismo o diabetes/epilepsia, que gozan del derecho de acceso, deambulación y permanencia en todos los lugares, alojamientos, transportes y establecimientos públicos o de uso público sin que se les pueda cobrar suplemento alguno.",
        "Perros policía adiestrados en detección de drogas.",
        "Animales salvajes prohibidos en centros de salud."
      ],
      "correcta": 1,
      "justificacion": "La legislación canaria y estatal garantiza el acceso libre y universal al entorno y transportes a los perros de asistencia junto a las personas con discapacidad a las que prestan auxilio, prohibiendo cualquier discriminación o cobro por el animal.",
      "referencia": "Ley 1/2014 Canarias / RDL 1/2013"
    },
    {
      "id": "9950-31",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "¿Quién es el órgano de participación, asesoramiento y consulta en materia de discapacidad a nivel estatal, donde participan los ministerios y el CERMI (Comité Español de Representantes de Personas con Discapacidad)?",
      "opciones": [
        "El Senado de la Nación.",
        "El Consejo Nacional de la Discapacidad.",
        "La Comisión Nacional del Mercado de Valores.",
        "El Defensor del Pueblo en exclusiva."
      ],
      "correcta": 1,
      "justificacion": "El artículo 73 del RDL 1/2013 establece el Consejo Nacional de la Discapacidad como órgano interministerial y paritario con la sociedad civil (CERMI) para la definición de políticas de inclusión.",
      "referencia": "Art. 73 RDL 1/2013"
    },
    {
      "id": "9950-32",
      "tema": "9950",
      "nivel": "bronce",
      "enunciado": "¿Qué es la 'teleasistencia domiciliaria' dentro del catálogo de servicios de dependencia?",
      "opciones": [
        "Un canal de televisión por cable con películas de medicina.",
        "Un servicio que facilita asistencia ininterrumpida a los usuarios mediante el uso de tecnologías de la comunicación y apoyo psicosocial ante situaciones de emergencia, inseguridad o soledad en su propio hogar.",
        "La consulta médica por videollamada obligatoria para no ir al hospital.",
        "Un robot doméstico que cocina y limpia la casa."
      ],
      "correcta": 1,
      "justificacion": "El servicio de teleasistencia (art. 22 Ley 39/2006) permite a las personas dependientes mantener la permanencia en su domicilio con seguridad las 24 horas del día mediante terminales de conexión remota.",
      "referencia": "Art. 22 Ley 39/2006"
    },
    {
      "id": "9950-33",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "¿Qué protección frente al despido otorga la legislación laboral (ET y RDL 1/2013) a los trabajadores con discapacidad?",
      "opciones": [
        "Pueden ser despedidos sin indemnización si rinden menos del 100%.",
        "Se prohíbe la discriminación por discapacidad en el despido, siendo nulo de pleno derecho el despido motivado por la discapacidad del trabajador o por no haber realizado la empresa los ajustes razonables necesarios en el puesto.",
        "No pueden ser despedidos por faltas muy graves de robo o agresiones en ningún caso.",
        "Tienen un contrato de por vida que no se puede extinguir por quiebra de la empresa."
      ],
      "correcta": 1,
      "justificacion": "La jurisprudencia del TJUE y el art. 55 del ET (reforzado por la Ley 15/2022 de igualdad de trato) sancionan con nulidad radical el despido discriminatorio por razón de discapacidad o enfermedad crónica.",
      "referencia": "Art. 55 ET / Ley 15/2022 / RDL 1/2013"
    },
    {
      "id": "9950-34",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "¿Es compatible percibir simultáneamente varias prestaciones económicas del Sistema de Dependencia por una misma persona dependiente?",
      "opciones": [
        "Sí, se pueden cobrar todas las ayudas económicas a la vez sin tope.",
        "Como regla general no, las prestaciones y servicios del catálogo del SAAD son incompatibles entre sí para una misma persona beneficiaria, salvo los servicios de prevención, teleasistencia y promoción de la autonomía, que pueden compatibilizarse con otros.",
        "Sí, si se vive en una isla de menos de 100.000 habitantes.",
        "Solo es compatible para el Grado I de dependencia."
      ],
      "correcta": 1,
      "justificacion": "El régimen general de incompatibilidades del SAAD (art. 25 y normativa de desarrollo) impide acumular ayudas económicas de similar finalidad o residencias con atención domiciliaria, salvo la teleasistencia que es universalmente compatible.",
      "referencia": "Art. 25 Ley 39/2006"
    },
    {
      "id": "9950-35",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "¿Qué establece el artículo 49 de la Constitución Española recientemente reformado en 2024?",
      "opciones": [
        "Que las personas con discapacidad no tienen derecho al voto en referéndums.",
        "Sustituyó el término 'disminuidos' por 'personas con discapacidad', reconociendo que los poderes públicos impulsarán las políticas que garanticen su plena autonomía personal y la inclusión social, prestando especial atención a las necesidades específicas de las mujeres y menores con discapacidad.",
        "Que se elimina la Seguridad Social en España.",
        "Que las comunidades autónomas no tienen competencias en asuntos sociales."
      ],
      "correcta": 1,
      "justificacion": "La reforma del art. 49 CE en febrero de 2024 eliminó terminología obsoleta y peyorativa ('disminuidos'), consagrando la dignidad, derechos humanos y enfoque de género e infancia en la discapacidad.",
      "referencia": "Art. 49 CE (Reforma 2024)"
    },
    {
      "id": "9950-36",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "En materia de educación, según la Ley del Derecho a la Educación y el RDL 1/2013, ¿cuál es el principio rector para el alumnado con necesidades educativas especiales derivadas de discapacidad?",
      "opciones": [
        "El aislamiento escolar en centros cerrados alejados de las ciudades.",
        "El principio de inclusión escolar y educación inclusiva en centros ordinarios con los apoyos y adaptaciones curriculares necesarios, reservando la escolarización en centros de educación especial solo para casos excepcionales que requieran apoyos muy intensivos.",
        "La exención de ir a clase y la sustitución obligatoria por televisión.",
        "Que los padres deban pagar un suplemento del 50% en la matrícula escolar pública."
      ],
      "correcta": 1,
      "justificacion": "El artículo 18 y ss. del RDL 1/2013 y la LOMLOE garantizan el derecho a una educación inclusiva, en igualdad de condiciones en el sistema educativo general, mediante adaptaciones curriculares y apoyos técnicos/humanos.",
      "referencia": "Art. 18 RDL 1/2013 / LOMLOE"
    },
    {
      "id": "9950-37",
      "tema": "9950",
      "nivel": "bronce",
      "enunciado": "La discriminación en la contratación de seguros (salud, vida, etc.) por razón de discapacidad:",
      "opciones": [
        "Es perfectamente legal y las aseguradoras pueden cobrar el triple sin justificación.",
        "Está prohibida por ley. No se podrá discriminar ni denegar la contratación de seguros o servicios sanitarios/bancarios por razón de discapacidad, salvo que existan causas epidemiológicas o estadísticas probadas y rigurosas.",
        "Solo está permitida para conductores menores de 25 años.",
        "No está regulada en ninguna ley española."
      ],
      "correcta": 1,
      "justificacion": "La Disposición adicional quinta de la Ley de Contrato de Seguro y el RDL 1/2013 prohíben la denegación de cobertura o encarecimiento abusivo de pólizas por motivo de discapacidad sin base científica rigurosa.",
      "referencia": "Ley de Contrato de Seguro / RDL 1/2013"
    },
    {
      "id": "9950-38",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "¿Qué es la 'lengua de signos española' (y la lengua de signos catalana) reconocida por la Ley 27/2007?",
      "opciones": [
        "Un dialecto militar secreto de transmisiones por radio.",
        "La lengua natural de carácter visual, gestual y espacial establecida con una gramática propia, reconocida legalmente en España para las personas sordas, con discapacidad auditiva y sordociegas que libremente decidan utilizarla.",
        "Un código de señales con banderas para barcos en puertos canarios.",
        "Una recomendación médica sin reconocimiento jurídico oficial."
      ],
      "correcta": 1,
      "justificacion": "La Ley 27/2007 reconoció oficialmente la lengua de signos española (y catalana) como lenguas naturales y reguló los medios de apoyo a la comunicación oral (subtitulado, bucles magnéticos) para eliminar barreras en el acceso a la información.",
      "referencia": "Ley 27/2007"
    },
    {
      "id": "9950-39",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "Un incumplimiento muy grave de la normativa de accesibilidad y no discriminación de personas con discapacidad (ej. vejaciones, acoso discriminatorio, incumplimiento reiterado de normas de accesibilidad en transportes públicos) se sanciona en el RDL 1/2013 con multas económicas que pueden llegar a:",
      "opciones": [
        "300 euros como máximo.",
        "10.000 euros.",
        "Hasta 1.000.000 de euros en los casos de mayor gravedad, reincidencia y trascendencia social.",
        "La pena capital del infractor."
      ],
      "correcta": 2,
      "justificacion": "El régimen sancionador del Título III del RDL 1/2013 (art. 81 y ss.) prevé multas coercitivas contundentes para infracciones muy graves, oscilando entre los 90.001 y los 1.000.000 de euros, además de cierres temporales o pérdida de ayudas públicas.",
      "referencia": "Art. 83 RDL 1/2013"
    },
    {
      "id": "9950-40",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "La Convención Internacional de las Naciones Unidas sobre los Derechos de las Personas con Discapacidad de 2006, ratificada por España en 2008:",
      "opciones": [
        "No tiene validez en España porque no fue aprobada por los ayuntamientos.",
        "Es un tratado internacional de derechos humanos plenamente vigente y vinculante en el ordenamiento jurídico español, que prevalece sobre las leyes internas y ha obligado a reformar la CE y multitud de leyes civiles, laborales y sociales.",
        "Es una declaración amistosa sin fuerza jurídica vinculante.",
        "Solo se aplica a países de América Latina."
      ],
      "correcta": 1,
      "justificacion": "Según el art. 96 CE y los tratados internacionales, la Convención ONU de 2006 forma parte del derecho interno de España con rango supralegal, inspirando el modelo social de derechos humanos y no discriminación en todo el sistema jurídico.",
      "referencia": "Convención ONU 2006 / Art. 96 CE"
    },
    {
      "id": "9950-41",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "¿Qué garantía de accesibilidad en las páginas web y aplicaciones móviles del sector público establece la legislación (RD 1112/2018)?",
      "opciones": [
        "Solo las webs del Rey de España deben ser accesibles.",
        "Toda la información, trámites, portales de internet y apps móviles de las Administraciones Públicas y entidades financiadas con fondos públicos deben cumplir los estándares de accesibilidad universal para que puedan ser utilizadas por personas con discapacidad visual, motriz o cognitiva.",
        "Está prohibido que los ciegos accedan a las páginas web de hacienda por seguridad.",
        "Las webs públicas solo deben funcionar en horario de mañana."
      ],
      "correcta": 1,
      "justificacion": "El RD 1112/2018 transpuso la Directiva UE de accesibilidad web, imponiendo el cumplimiento del nivel AA de las pautas WCAG en todas las webs y aplicaciones del sector público.",
      "referencia": "RD 1112/2018 / RDL 1/2013"
    },
    {
      "id": "9950-42",
      "tema": "9950",
      "nivel": "bronce",
      "enunciado": "En los procesos selectivos de acceso a la función pública canaria, para garantizar la igualdad de oportunidades de los aspirantes con discapacidad que lo soliciten, el Tribunal calificador deberá:",
      "opciones": [
        "Regalarles la máxima puntuación en el examen teórico sin presentarse.",
        "Adoptar las adaptaciones posibles de tiempo y medios para la realización de las pruebas (ej. examen en braille, tiempo adicional, intérprete de lengua de signos, acceso en planta baja).",
        "Obligarles a examinarse un domingo por la noche en solitario.",
        "Eximirles de todas las pruebas médicas para siempre."
      ],
      "correcta": 1,
      "justificacion": "El artículo 59 del TREBEP y las normas de desarrollo exigen adaptar tiempo y medios materiales a los opositores con discapacidad que lo soliciten y acrediten, garantizando que demuestren sus conocimientos sin barreras instrumentales.",
      "referencia": "Art. 59 TREBEP / RDL 1/2013"
    },
    {
      "id": "9950-43",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "¿En qué consiste el derecho a la 'asistencia jurídica gratuita' para las personas con discapacidad?",
      "opciones": [
        "Que los abogados no les pueden cobrar en consultas informales en cafeterías.",
        "La Ley de Asistencia Jurídica Gratuita (Ley 1/1996) reconoce el derecho al beneficio de justicia gratuita sin necesidad de acreditar insuficiencia de recursos a las personas con discapacidad en aquellos procedimientos judiciales que guarden relación directa con su salud, discapacidad o dependencia.",
        "Que pueden ser jueces y fiscales sin aprobar la oposición.",
        "Que los juicios donde participen no necesitan abogado ni procurador."
      ],
      "correcta": 1,
      "justificacion": "La Ley 1/1996 exime del requisito de límites de renta/patrimonio para obtener abogado de oficio y justicia gratuita a las personas con discapacidad intelectual o enfermedad mental y a víctimas de accidentes en defensa de sus derechos de salud/discapacidad.",
      "referencia": "Ley 1/1996 Asistencia Jurídica Gratuita"
    },
    {
      "id": "9950-44",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "¿Qué es la 'esterilización forzosa' o no consentida de personas con discapacidad intelectual tras la Ley Orgánica 2/2020?",
      "opciones": [
        "Un método médico obligatorio y recomendado por el Ministerio de Sanidad.",
        "Una práctica tipificada en el Código Penal que ha sido totalmente prohibida y erradicada en España, derogándose la posibilidad de que un juez autorizara la esterilización de personas con discapacidad sin su consentimiento informado, en cumplimiento del Convenio de Estambul y la Convención ONU.",
        "Una intervención estética que cubre la Seguridad Social para todos.",
        "La obligación de vacunarse contra la gripe en residencias públicas."
      ],
      "correcta": 1,
      "justificacion": "La LO 2/2020 derogó el párrafo segundo del art. 156 del Código Penal que permitía la esterilización judicial de personas con discapacidad judicialmente incapacitadas, garantizando sus derechos sexuales y reproductivos en igualdad.",
      "referencia": "LO 2/2020 / Código Penal"
    },
    {
      "id": "9950-45",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "En el cálculo de la capacidad económica del beneficiario para determinar su participación (copago) en el coste de los servicios de dependencia del SAAD (art. 33 Ley 39/2006):",
      "opciones": [
        "Se le requisa el 100% de toda su cuenta bancaria y propiedades.",
        "Se tendrá en cuenta su renta y patrimonio, pero se le garantizará siempre una cantidad mínima económica para gastos personales (dinero de bolsillo o 'mínimo exento' intransferible) que no puede ser destinada a pagar la residencia o servicio.",
        "Los dependientes no pagan nunca ni un solo céntimo en ningún caso.",
        "Solo pagan los hijos y nietos del dependiente de sus nóminas privadas."
      ],
      "correcta": 1,
      "justificacion": "El criterio legal de copago en residencias y centros del SAAD prohíbe dejar al usuario sin liquidez, garantizándole por ley un porcentaje del IPREM mensual como 'mínimo para gastos personales' intocable.",
      "referencia": "Art. 33 Ley 39/2006"
    },
    {
      "id": "9950-46",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "¿Qué es la 'guarda de hecho' tras la Ley 8/2021 de reforma civil para el apoyo a personas con discapacidad?",
      "opciones": [
        "Un contrato de seguridad privada armado para proteger casetas.",
        "La situación en la que un familiar o allegado presta apoyo y asistencia en la vida cotidiana de una persona con discapacidad que lo necesita, de manera informal y sin que exista nombramiento judicial, adquiriendo tras la ley un reconocimiento jurídico legal para realizar actos cotidianos y administrativos en su beneficio.",
        "La detención policial preventiva de enfermos mentales.",
        "El acogimiento de menores extranjeros no acompañados en cabildos."
      ],
      "correcta": 1,
      "justificacion": "La reforma del Código Civil (Ley 8/2021) potencia la guarda de hecho como institución jurídica prioritaria, evitando judicializar la vida de personas con discapacidad cuando sus familiares ya les prestan el apoyo adecuado de forma natural.",
      "referencia": "Art. 263 Código Civil / Ley 8/2021"
    },
    {
      "id": "9950-47",
      "tema": "9950",
      "nivel": "bronce",
      "enunciado": "La 'jubilación anticipada' de trabajadores con discapacidad en la Seguridad Social:",
      "opciones": [
        "Está prohibida, deben trabajar hasta los 70 años obligatoriamente.",
        "Permite reducir la edad ordinaria de jubilación (mediante coeficientes reductores o adelanto a los 56 o 52 años) para aquellos trabajadores que acrediten un grado de discapacidad igual o superior al 45% (con patologías tasadas de esperanza de vida reducida) o al 65%, sin merma en el cálculo de su pensión.",
        "Solo se aplica a toreros y mineros canarios.",
        "Implica perder el 80% de la pensión cotizada durante toda la vida."
      ],
      "correcta": 1,
      "justificacion": "El Real Decreto 370/2023 y la Ley General de la Seguridad Social regulan la jubilación anticipada con discapacidad del 45% o 65%, compensando el mayor esfuerzo laboral y la menor esperanza de vida media de ciertas patologías.",
      "referencia": "RD 370/2023 / LGSS"
    },
    {
      "id": "9950-48",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "¿En qué se distingue el concepto de 'deficiencia' del de 'discapacidad'?",
      "opciones": [
        "Son sinónimos en derecho administrativo mercantil.",
        "La deficiencia es la alteración o pérdida temporal o permanente de una estructura o función fisiológica, psicológica o anatómica; la discapacidad es el resultado de la interacción entre esa deficiencia y las barreras sociales y del entorno que limitan la participación de la persona.",
        "La deficiencia es mental y la discapacidad es solo en silla de ruedas.",
        "La discapacidad se cura con medicamentos y la deficiencia es contagiosa."
      ],
      "correcta": 1,
      "justificacion": "La Clasificación Internacional del Funcionamiento de la OMS y el RDL 1/2013 diferencian el déficit orgánico/biológico (deficiencia) de la limitación social en la participación provocada por un entorno no accesible (discapacidad).",
      "referencia": "RDL 1/2013 / CIF-OMS"
    },
    {
      "id": "9950-49",
      "tema": "9950",
      "nivel": "plata",
      "enunciado": "¿Qué función cumple el Imserso en el marco de las políticas sociales estatales y de dependencia?",
      "opciones": [
        "Organizar carreras de coches Fórmula 1 para jubilados.",
        "El Instituto de Mayores y Servicios Sociales (Imserso), entidad gestora de la Seguridad Social, coordina a nivel estatal el SAAD, la gestión de pensiones no contributivas de invalidez y programas de turismo social y termalismo para mayores y dependientes.",
        "Cobrar el IGIC en los hoteles turísticos canarios.",
        "Inspeccionar las nóminas de los policías locales de toda España."
      ],
      "correcta": 1,
      "justificacion": "El Imserso es la Entidad Gestora de la Seguridad Social especializada en políticas de envejecimiento activo, atención a la dependencia y gestión de prestaciones sociales no contributivas a nivel nacional.",
      "referencia": "LGSS / Ley 39/2006"
    },
    {
      "id": "9950-50",
      "tema": "9950",
      "nivel": "oro",
      "enunciado": "¿Constituye el derecho a la no discriminación por motivo de discapacidad un límite constitucional para la actuación de los poderes públicos canarios?",
      "opciones": [
        "No, el Parlamento canario puede aprobar leyes que discriminen si es por ahorrar presupuesto.",
        "Sí, es un principio rector y derecho fundamental garantizado por la CE, el Estatuto de Autonomía y el RDL 1/2013, siendo nulas de pleno derecho todas las disposiciones, actos y contratos administrativos que vulneren la igualdad y accesibilidad de las personas con discapacidad.",
        "Solo en los ayuntamientos de las islas capitalinas.",
        "Una mera recomendación moral que los jueces no aplican nunca en sus sentencias."
      ],
      "correcta": 1,
      "justificacion": "El marco constitucional (arts. 9.2, 10, 14 y 49 CE), estatutario y legal establece que la igualdad e inclusión de las personas con discapacidad es un mandato imperativo y vinculante para toda autoridad y Administración canaria y española.",
      "referencia": "Art. 14 y 49 CE / RDL 1/2013"
    }
  ]
};

fs.writeFileSync(path.join(__dirname, 'src/data/tema9950.json'), JSON.stringify(tema9950, null, 2), 'utf8');
console.log('tema9950.json creado con 50 preguntas.');
