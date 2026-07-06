const fs = require('fs');
const path = require('path');

const tema2300 = {
  "tema_id": "2300",
  "tema_nombre": "Protección de Datos (RGPD y LOPDGDD)",
  "preguntas": [
    {
      "id": "2300-01",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "El Reglamento General de Protección de Datos (RGPD) es el Reglamento (UE):",
      "opciones": [
        "2016/679 del Parlamento Europeo y del Consejo.",
        "2018/1725 del Parlamento Europeo y del Consejo.",
        "2014/24/UE.",
        "2016/680 del Parlamento Europeo y del Consejo."
      ],
      "correcta": 0,
      "justificacion": "El RGPD es el Reglamento (UE) 2016/679, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales.",
      "referencia": "RGPD (UE) 2016/679"
    },
    {
      "id": "2300-02",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "La Ley Orgánica española que adapta el RGPD al ordenamiento jurídico nacional es:",
      "opciones": [
        "LO 15/1999, de 13 de diciembre.",
        "LO 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).",
        "Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información.",
        "LO 1/1982."
      ],
      "correcta": 1,
      "justificacion": "La LO 3/2018, de 5 de diciembre (LOPDGDD) adapta el ordenamiento jurídico español al RGPD y garantiza los derechos digitales.",
      "referencia": "LO 3/2018 LOPDGDD"
    },
    {
      "id": "2300-03",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "¿Qué se entiende por 'dato personal'?",
      "opciones": [
        "Solo el nombre y apellidos de una persona.",
        "Toda información sobre una persona física identificada o identificable.",
        "Los datos de salud y biométricos exclusivamente.",
        "Cualquier información almacenada en formato digital."
      ],
      "correcta": 1,
      "justificacion": "El artículo 4.1 del RGPD define 'datos personales' como toda información sobre una persona física identificada o identificable (el interesado).",
      "referencia": "Art. 4.1 RGPD"
    },
    {
      "id": "2300-04",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "¿Cuál de los siguientes es un 'dato de categoría especial' (dato sensible) según el RGPD?",
      "opciones": [
        "El nombre y apellidos.",
        "La dirección postal.",
        "El origen étnico o racial.",
        "El número de teléfono."
      ],
      "correcta": 2,
      "justificacion": "El artículo 9 del RGPD enumera como categorías especiales: origen étnico o racial, opiniones políticas, convicciones religiosas, datos genéticos, biométricos, de salud u orientación sexual.",
      "referencia": "Art. 9 RGPD"
    },
    {
      "id": "2300-05",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "Los principios relativos al tratamiento de datos personales incluidos en el artículo 5 del RGPD son:",
      "opciones": [
        "Licitud, lealtad y transparencia; limitación de la finalidad; minimización de datos; exactitud; limitación del plazo de conservación; integridad y confidencialidad.",
        "Publicidad, proporcionalidad y seguridad.",
        "Consentimiento, finalidad y necesidad.",
        "Privacidad por defecto y privacidad desde el diseño."
      ],
      "correcta": 0,
      "justificacion": "El artículo 5 del RGPD enumera los 7 principios: licitud/lealtad/transparencia, limitación de finalidad, minimización de datos, exactitud, limitación de conservación, integridad/confidencialidad y responsabilidad proactiva.",
      "referencia": "Art. 5 RGPD"
    },
    {
      "id": "2300-06",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "El principio de 'minimización de datos' implica que los datos tratados deben ser:",
      "opciones": [
        "Cifrados en todo momento.",
        "Adecuados, pertinentes y limitados a lo necesario en relación con los fines para los que son tratados.",
        "Destruidos en 6 meses.",
        "Almacenados en servidores dentro del territorio de la UE."
      ],
      "correcta": 1,
      "justificacion": "El principio de minimización (art. 5.1.c RGPD) exige que los datos sean adecuados, pertinentes y limitados a lo estrictamente necesario para la finalidad perseguida.",
      "referencia": "Art. 5.1.c RGPD"
    },
    {
      "id": "2300-07",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "¿Cuáles son las bases de licitud del tratamiento de datos según el RGPD?",
      "opciones": [
        "Solo el consentimiento del interesado.",
        "Consentimiento, contrato, obligación legal, interés vital, interés público o autoridad pública, e interés legítimo.",
        "Consentimiento y obligación legal únicamente.",
        "Interés público y consentimiento."
      ],
      "correcta": 1,
      "justificacion": "El artículo 6 del RGPD enumera 6 bases de licitud: consentimiento, ejecución de contrato, cumplimiento de obligación legal, protección de intereses vitales, interés público/ejercicio de poderes públicos e intereses legítimos.",
      "referencia": "Art. 6 RGPD"
    },
    {
      "id": "2300-08",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "¿Qué condiciones debe cumplir el consentimiento del interesado para ser válido según el RGPD?",
      "opciones": [
        "Basta con no oponerse al tratamiento.",
        "Debe ser libre, específico, informado e inequívoco.",
        "Puede ser tácito si no hay oposición expresa.",
        "Puede otorgarse de forma verbal sin ninguna formalidad."
      ],
      "correcta": 1,
      "justificacion": "El artículo 4.11 del RGPD define el consentimiento como libre, específico, informado e inequívoco, no admitiéndose el consentimiento tácito o por omisión.",
      "referencia": "Art. 4.11 y 7 RGPD"
    },
    {
      "id": "2300-09",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "El derecho a obtener una copia de los datos personales que está tratando el responsable es el derecho de:",
      "opciones": [
        "Rectificación.",
        "Supresión ('derecho al olvido').",
        "Acceso.",
        "Portabilidad."
      ],
      "correcta": 2,
      "justificacion": "El artículo 15 del RGPD reconoce el derecho de acceso del interesado, que le permite obtener confirmación de si se tratan sus datos y, en su caso, acceder a ellos.",
      "referencia": "Art. 15 RGPD"
    },
    {
      "id": "2300-10",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "El 'derecho al olvido' en el RGPD se recoge como:",
      "opciones": [
        "Derecho de acceso.",
        "Derecho de rectificación.",
        "Derecho de supresión.",
        "Derecho de oposición."
      ],
      "correcta": 2,
      "justificacion": "El artículo 17 del RGPD regula el derecho de supresión, popularmente conocido como 'derecho al olvido', que permite solicitar la eliminación de los datos personales.",
      "referencia": "Art. 17 RGPD"
    },
    {
      "id": "2300-11",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "El derecho a recibir los datos en un formato estructurado, de uso común y lectura mecánica y a transmitirlos a otro responsable es el derecho de:",
      "opciones": [
        "Acceso.",
        "Rectificación.",
        "Portabilidad.",
        "Limitación del tratamiento."
      ],
      "correcta": 2,
      "justificacion": "El artículo 20 del RGPD regula el derecho a la portabilidad de los datos, aplicable cuando el tratamiento se basa en consentimiento o contrato y se efectúa por medios automatizados.",
      "referencia": "Art. 20 RGPD"
    },
    {
      "id": "2300-12",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "¿Cuál es el plazo general para responder a una solicitud de ejercicio de derechos (acceso, rectificación, etc.) por el responsable del tratamiento?",
      "opciones": [
        "15 días hábiles.",
        "1 mes, prorrogable por otros 2 meses más en casos complejos.",
        "3 meses.",
        "10 días hábiles."
      ],
      "correcta": 1,
      "justificacion": "El artículo 12.3 del RGPD establece un plazo de 1 mes para responder, que puede prorrogarse 2 meses más atendiendo a la complejidad o el número de solicitudes.",
      "referencia": "Art. 12.3 RGPD"
    },
    {
      "id": "2300-13",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "¿Qué es el 'responsable del tratamiento'?",
      "opciones": [
        "El informático que gestiona la base de datos.",
        "La persona física o jurídica que determina los fines y los medios del tratamiento.",
        "El empleado que accede a los datos.",
        "El Delegado de Protección de Datos."
      ],
      "correcta": 1,
      "justificacion": "El artículo 4.7 del RGPD define al responsable del tratamiento como la persona física o jurídica que, sola o junto con otras, determina los fines y los medios del tratamiento.",
      "referencia": "Art. 4.7 RGPD"
    },
    {
      "id": "2300-14",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "El 'encargado del tratamiento' es quien trata datos:",
      "opciones": [
        "Para sus propios fines.",
        "Por cuenta del responsable del tratamiento.",
        "Sin consentimiento del interesado.",
        "Con fines estadísticos exclusivamente."
      ],
      "correcta": 1,
      "justificacion": "El artículo 4.8 del RGPD define al encargado del tratamiento como quien trata datos personales por cuenta del responsable (ej.: una empresa de servicios IT que gestiona una BBDD).",
      "referencia": "Art. 4.8 RGPD"
    },
    {
      "id": "2300-15",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "¿Cuándo es obligatorio designar un Delegado de Protección de Datos (DPD/DPO) según el RGPD?",
      "opciones": [
        "En todas las organizaciones sin excepción.",
        "Solo en organismos públicos con más de 250 empleados.",
        "Cuando el responsable sea una autoridad u organismo público, cuando el tratamiento exija observación habitual y sistemática a gran escala, o cuando se traten a gran escala categorías especiales.",
        "Solo en empresas del sector sanitario."
      ],
      "correcta": 2,
      "justificacion": "El artículo 37 del RGPD establece la obligatoriedad del DPO en tres supuestos: autoridades/organismos públicos, tratamiento a gran escala de datos sensibles y observación sistemática a gran escala.",
      "referencia": "Art. 37 RGPD"
    },
    {
      "id": "2300-16",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "El Delegado de Protección de Datos (DPO) tiene entre sus funciones:",
      "opciones": [
        "Aprobar los tratamientos de datos de la organización.",
        "Informar y asesorar al responsable y a los empleados, supervisar el cumplimiento del RGPD y cooperar con la autoridad de control.",
        "Imponer sanciones internas por incumplimiento.",
        "Determinar las finalidades y los medios del tratamiento."
      ],
      "correcta": 1,
      "justificacion": "El artículo 39 del RGPD enumera las funciones del DPO: informar/asesorar, supervisar el cumplimiento, asesorar en evaluaciones de impacto y cooperar con la autoridad de control.",
      "referencia": "Art. 39 RGPD"
    },
    {
      "id": "2300-17",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "¿Qué es una 'Evaluación de Impacto relativa a la Protección de Datos' (EIPD/DPIA)?",
      "opciones": [
        "La auditoría de seguridad informática anual.",
        "Un análisis previo obligatorio cuando el tratamiento pueda entrañar un alto riesgo para los derechos y libertades.",
        "El registro de actividades de tratamiento.",
        "El informe de violaciones de seguridad."
      ],
      "correcta": 1,
      "justificacion": "El artículo 35 del RGPD exige una DPIA/EIPD antes de iniciar tratamientos que por su naturaleza, alcance o finalidad puedan suponer un alto riesgo para los derechos y libertades.",
      "referencia": "Art. 35 RGPD"
    },
    {
      "id": "2300-18",
      "tema": "2300",
      "nivel": "bronce",
      "enunciado": "La autoridad de control competente en materia de protección de datos en España es:",
      "opciones": [
        "El Ministerio de Justicia.",
        "La Agencia Española de Protección de Datos (AEPD).",
        "El Tribunal Constitucional.",
        "La Comisión Nacional del Mercado de la Competencia."
      ],
      "correcta": 1,
      "justificacion": "La Agencia Española de Protección de Datos (AEPD) es la autoridad de control independiente encargada de velar por el cumplimiento de la normativa de protección de datos en España.",
      "referencia": "LOPDGDD / Art. 51 RGPD"
    },
    {
      "id": "2300-19",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "El principio de 'responsabilidad proactiva' (accountability) implica que el responsable del tratamiento debe:",
      "opciones": [
        "Publicar todos los datos que trata en el BOE.",
        "No solo cumplir el RGPD sino también poder demostrarlo.",
        "Informar a todos los interesados de forma mensual.",
        "Obtener la certificación ISO 27001 obligatoriamente."
      ],
      "correcta": 1,
      "justificacion": "El principio de responsabilidad proactiva (art. 5.2 RGPD) exige que el responsable no solo cumpla los principios sino que esté en condiciones de demostrarlo.",
      "referencia": "Art. 5.2 RGPD"
    },
    {
      "id": "2300-20",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "¿En qué plazo debe notificarse una violación de seguridad de los datos a la autoridad de control?",
      "opciones": [
        "Inmediatamente, antes de 24 horas.",
        "En un plazo máximo de 72 horas desde que se tenga conocimiento de ella.",
        "En un plazo máximo de 1 mes.",
        "Solo si se produce daño real a los interesados."
      ],
      "correcta": 1,
      "justificacion": "El artículo 33 del RGPD establece que las brechas de seguridad deben notificarse a la autoridad de control en un plazo máximo de 72 horas desde que se tenga conocimiento.",
      "referencia": "Art. 33 RGPD"
    },
    {
      "id": "2300-21",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "¿Cuándo debe también notificarse la violación de seguridad al propio interesado afectado?",
      "opciones": [
        "Siempre, en cualquier caso.",
        "Cuando sea probable que entrañe un alto riesgo para los derechos y libertades de las personas físicas.",
        "Solo cuando lo ordene la AEPD.",
        "Nunca, es suficiente notificar a la autoridad de control."
      ],
      "correcta": 1,
      "justificacion": "El artículo 34 del RGPD exige comunicar la brecha al interesado cuando sea probable que entrañe un alto riesgo para sus derechos y libertades.",
      "referencia": "Art. 34 RGPD"
    },
    {
      "id": "2300-22",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "El 'Registro de Actividades de Tratamiento' es obligatorio para:",
      "opciones": [
        "Todas las organizaciones sin excepción.",
        "Organizaciones con más de 250 empleados o que traten datos de riesgo o categorías especiales.",
        "Solo las Administraciones Públicas.",
        "Solo empresas con facturación superior a 5 millones."
      ],
      "correcta": 1,
      "justificacion": "El artículo 30 del RGPD obliga a llevar un registro de actividades a las organizaciones con 250 o más empleados, y también a aquellas que realicen tratamientos de riesgo o de categorías especiales.",
      "referencia": "Art. 30 RGPD"
    },
    {
      "id": "2300-23",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "Las sanciones administrativas máximas por infracciones muy graves del RGPD son de:",
      "opciones": [
        "600.000 euros.",
        "10 millones de euros o el 2% del volumen de negocio anual mundial.",
        "20 millones de euros o el 4% del volumen de negocio anual mundial total.",
        "50 millones de euros."
      ],
      "correcta": 2,
      "justificacion": "El artículo 83.5 del RGPD fija para las infracciones más graves multas de hasta 20 millones de euros o el 4% del volumen de negocio anual mundial total (lo que sea mayor).",
      "referencia": "Art. 83.5 RGPD"
    },
    {
      "id": "2300-24",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "Las infracciones menos graves del RGPD tienen una multa máxima de:",
      "opciones": [
        "100.000 euros.",
        "1 millón de euros.",
        "10 millones de euros o el 2% del volumen de negocio.",
        "5 millones de euros."
      ],
      "correcta": 2,
      "justificacion": "El artículo 83.4 fija para las infracciones menos graves (vulneración de principios de privacidad por diseño, obligaciones del encargado, etc.) hasta 10 millones de euros o el 2% del volumen de negocio.",
      "referencia": "Art. 83.4 RGPD"
    },
    {
      "id": "2300-25",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "El principio de 'privacidad desde el diseño' (privacy by design) implica:",
      "opciones": [
        "Instalar medidas de seguridad solo después de que ocurra una brecha.",
        "Integrar la protección de datos desde el momento del diseño del tratamiento, y no solo como cumplimiento posterior.",
        "Diseñar los sistemas informáticos con cifrado total.",
        "Publicar el diseño de los sistemas en el registro de la AEPD."
      ],
      "correcta": 1,
      "justificacion": "El artículo 25 del RGPD consagra la privacidad por diseño y por defecto: implementar medidas técnicas y organizativas desde el inicio del diseño del tratamiento.",
      "referencia": "Art. 25 RGPD"
    },
    {
      "id": "2300-26",
      "tema": "2300",
      "nivel": "bronce",
      "enunciado": "¿Cuál de los siguientes NO es un derecho reconocido expresamente por el RGPD?",
      "opciones": [
        "Derecho de acceso.",
        "Derecho al honor.",
        "Derecho de rectificación.",
        "Derecho de oposición."
      ],
      "correcta": 1,
      "justificacion": "El derecho al honor es un derecho de la personalidad (Ley Orgánica 1/1982), no un derecho específico del RGPD. Los derechos RGPD son: acceso, rectificación, supresión, oposición, portabilidad, limitación y decisiones automatizadas.",
      "referencia": "Arts. 15-22 RGPD"
    },
    {
      "id": "2300-27",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "El derecho a no ser objeto de decisiones basadas únicamente en el tratamiento automatizado de datos (incluida la elaboración de perfiles) está recogido en el artículo:",
      "opciones": [
        "Art. 15 RGPD.",
        "Art. 17 RGPD.",
        "Art. 20 RGPD.",
        "Art. 22 RGPD."
      ],
      "correcta": 3,
      "justificacion": "El artículo 22 del RGPD regula el derecho del interesado a no ser objeto de decisiones automatizadas, incluida la elaboración de perfiles, que produzcan efectos jurídicos significativos.",
      "referencia": "Art. 22 RGPD"
    },
    {
      "id": "2300-28",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "La transferencia internacional de datos a un tercer país fuera de la UE/EEE:",
      "opciones": [
        "Está siempre prohibida.",
        "Es libre sin restricciones si ambas partes consienten.",
        "Solo puede realizarse si el país de destino ofrece un nivel adecuado de protección o se aplican garantías apropiadas.",
        "Requiere siempre autorización judicial."
      ],
      "correcta": 2,
      "justificacion": "El Capítulo V del RGPD (arts. 44-49) regula las transferencias internacionales, requiriendo una decisión de adecuación de la Comisión, garantías apropiadas (cláusulas contractuales tipo) u otras excepciones tasadas.",
      "referencia": "Arts. 44-49 RGPD"
    },
    {
      "id": "2300-29",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "¿Qué ocurre con el consentimiento prestado por un menor de 14 años para el tratamiento de sus datos en servicios de la sociedad de la información en España?",
      "opciones": [
        "Es válido si los padres no se oponen.",
        "No es válido; se requiere el consentimiento del titular de la patria potestad o tutela.",
        "Es válido desde los 13 años.",
        "Solo es válido para redes sociales educativas."
      ],
      "correcta": 1,
      "justificacion": "El artículo 7 de la LOPDGDD fija en 14 años la edad de prestación de consentimiento. Para menores de 14 años, el consentimiento debe otorgarlo el titular de la patria potestad.",
      "referencia": "Art. 7 LOPDGDD"
    },
    {
      "id": "2300-30",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "¿Qué es la 'seudonimización' de datos?",
      "opciones": [
        "La eliminación definitiva e irreversible de los datos.",
        "El tratamiento de datos de forma que no puedan atribuirse a un interesado sin información adicional que se guarda por separado.",
        "La publicación de datos en formato anónimo.",
        "El cifrado total de la base de datos."
      ],
      "correcta": 1,
      "justificacion": "El artículo 4.5 del RGPD define la seudonimización como el tratamiento de datos que, sin información adicional guardada por separado, no pueden atribuirse directamente a un interesado.",
      "referencia": "Art. 4.5 RGPD"
    },
    {
      "id": "2300-31",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "¿Cuándo pueden tratarse datos de categorías especiales (datos sensibles)?",
      "opciones": [
        "Nunca, están absolutamente prohibidos.",
        "Solo si el tratamiento lo realiza un organismo público.",
        "En supuestos tasados del artículo 9.2 RGPD: consentimiento explícito, interés vital, datos manifiestamente públicos, interés público esencial, entre otros.",
        "Cuando el responsable tenga más de 250 empleados."
      ],
      "correcta": 2,
      "justificacion": "El artículo 9.2 del RGPD prohíbe el tratamiento de categorías especiales salvo en las excepciones taxativamente previstas (consentimiento explícito, fines laborales, protección de intereses vitales, etc.).",
      "referencia": "Art. 9.2 RGPD"
    },
    {
      "id": "2300-32",
      "tema": "2300",
      "nivel": "bronce",
      "enunciado": "El RGPD establece el principio de 'limitación de la finalidad'. Esto significa que los datos:",
      "opciones": [
        "Solo pueden tratarse durante 1 año.",
        "No pueden tratarse para finalidades distintas para las que fueron recogidos, salvo compatibilidad o habilitación legal.",
        "Solo pueden usarse para finalidades comerciales.",
        "Deben borrarse cuando se consiga la finalidad."
      ],
      "correcta": 1,
      "justificacion": "El artículo 5.1.b del RGPD exige que los datos se recojan con fines determinados, explícitos y legítimos, no pudiendo tratarse ulteriormente de manera incompatible con dichos fines.",
      "referencia": "Art. 5.1.b RGPD"
    },
    {
      "id": "2300-33",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "Los 'derechos digitales' reconocidos en la LOPDGDD incluyen, entre otros:",
      "opciones": [
        "Derecho al voto electrónico.",
        "Derecho a la desconexión digital en el ámbito laboral.",
        "Derecho a internet gratuito.",
        "Derecho a la identidad digital única."
      ],
      "correcta": 1,
      "justificacion": "El Título X de la LOPDGDD reconoce derechos digitales, entre ellos el derecho a la desconexión digital, a la intimidad en el uso de dispositivos digitales en el trabajo, o a la rectificación en Internet.",
      "referencia": "Título X LOPDGDD"
    },
    {
      "id": "2300-34",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "¿Tiene el responsable del tratamiento la obligación de facilitar información al interesado en el momento de recogida de sus datos?",
      "opciones": [
        "Solo si el interesado lo solicita expresamente.",
        "No, solo cuando se produzca una brecha de seguridad.",
        "Sí, de forma activa y proactiva antes o en el momento de la recogida.",
        "Solo si los datos van a cederse a terceros."
      ],
      "correcta": 2,
      "justificacion": "Los artículos 13 y 14 del RGPD obligan al responsable a informar proactivamente al interesado sobre el tratamiento en el momento de la recogida de datos (o en un plazo razonable si no se recogen del propio interesado).",
      "referencia": "Arts. 13-14 RGPD"
    },
    {
      "id": "2300-35",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "El ejercicio del derecho de 'limitación del tratamiento' implica:",
      "opciones": [
        "La supresión definitiva de los datos.",
        "La suspensión temporal del tratamiento, conservando los datos pero restringiendo su uso.",
        "El derecho a recibir los datos en formato electrónico.",
        "La anonimización inmediata de los datos."
      ],
      "correcta": 1,
      "justificacion": "El artículo 18 del RGPD regula el derecho a la limitación, que suspende el tratamiento de forma temporal pero no implica la supresión, conservándose los datos bajo restricciones.",
      "referencia": "Art. 18 RGPD"
    },
    {
      "id": "2300-36",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "La relación entre el responsable y el encargado del tratamiento debe formalizarse mediante:",
      "opciones": [
        "Una autorización de la AEPD.",
        "Un contrato u otro acto jurídico vinculante que contemple las instrucciones y obligaciones de ambas partes.",
        "Una declaración ante notario.",
        "Un simple correo electrónico de confirmación."
      ],
      "correcta": 1,
      "justificacion": "El artículo 28 del RGPD exige que el tratamiento por el encargado se rija por un contrato u otro acto jurídico que establezca el objeto, duración, naturaleza y finalidad del tratamiento.",
      "referencia": "Art. 28 RGPD"
    },
    {
      "id": "2300-37",
      "tema": "2300",
      "nivel": "bronce",
      "enunciado": "¿Tiene el DPO (Delegado de Protección de Datos) poder para imponer sanciones dentro de la organización?",
      "opciones": [
        "Sí, puede sancionar directamente a los empleados.",
        "Sí, pero solo sanciones económicas.",
        "No, su rol es de asesoramiento, supervisión y enlace con la AEPD, sin potestad sancionadora.",
        "Sí, si así lo dispone el reglamento interno."
      ],
      "correcta": 2,
      "justificacion": "El DPO es una figura asesora y de supervisión, sin potestad sancionadora. Las decisiones sobre el tratamiento y el cumplimiento son responsabilidad del responsable del tratamiento.",
      "referencia": "Art. 38-39 RGPD"
    },
    {
      "id": "2300-38",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "¿Pueden los ciudadanos presentar una reclamación ante la AEPD si consideran que se han vulnerado sus derechos de protección de datos?",
      "opciones": [
        "No, solo pueden acudir a los tribunales.",
        "Sí, tienen derecho a presentar una reclamación ante la autoridad de control.",
        "Solo si primero han agotado la vía administrativa ante la entidad responsable.",
        "Solo si el daño económico supera 1.000 euros."
      ],
      "correcta": 1,
      "justificacion": "El artículo 77 del RGPD y el artículo 64 de la LOPDGDD reconocen el derecho a presentar una reclamación ante la AEPD cuando el interesado considere que sus derechos han sido vulnerados.",
      "referencia": "Art. 77 RGPD / Art. 64 LOPDGDD"
    },
    {
      "id": "2300-39",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "¿Cuál es el principio RGPD que exige conservar los datos solo durante el tiempo necesario para la finalidad del tratamiento?",
      "opciones": [
        "Principio de exactitud.",
        "Principio de minimización.",
        "Principio de limitación del plazo de conservación.",
        "Principio de integridad y confidencialidad."
      ],
      "correcta": 2,
      "justificacion": "El artículo 5.1.e del RGPD consagra la limitación del plazo de conservación: los datos no se mantendrán más tiempo del necesario para los fines del tratamiento.",
      "referencia": "Art. 5.1.e RGPD"
    },
    {
      "id": "2300-40",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "El tratamiento de datos de personas fallecidas:",
      "opciones": [
        "Está regulado íntegramente por el RGPD.",
        "No está sujeto al RGPD, que solo protege a personas físicas vivas.",
        "Está permitido sin restricciones.",
        "Está prohibido absolutamente."
      ],
      "correcta": 1,
      "justificacion": "El Considerando 27 del RGPD aclara que el Reglamento no se aplica a los datos de personas fallecidas. Puede ser que la normativa nacional establezca normas al respecto (como hace la LOPDGDD en su art. 3).",
      "referencia": "Considerando 27 RGPD / Art. 3 LOPDGDD"
    },
    {
      "id": "2300-41",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "El 'principio de exactitud' en el RGPD exige que los datos:",
      "opciones": [
        "Se almacenen en formato cifrado.",
        "Sean exactos y, si fuera necesario, actualizados, adoptándose medidas razonables para suprimir o rectificar los inexactos.",
        "Sean verificados por un notario.",
        "Sean idénticos en todas las bases de datos de la organización."
      ],
      "correcta": 1,
      "justificacion": "El artículo 5.1.d del RGPD obliga a mantener los datos exactos y actualizados, adoptando todas las medidas razonables para suprimir o rectificar los datos inexactos.",
      "referencia": "Art. 5.1.d RGPD"
    },
    {
      "id": "2300-42",
      "tema": "2300",
      "nivel": "bronce",
      "enunciado": "¿Qué son los 'datos biométricos' según el RGPD?",
      "opciones": [
        "Datos sobre enfermedades crónicas.",
        "Datos obtenidos a partir de un tratamiento técnico específico, relativos a las características físicas, fisiológicas o conductuales que permitan la identificación única (huella dactilar, reconocimiento facial).",
        "Los datos del perfil bancario de una persona.",
        "Los datos de geolocalización en tiempo real."
      ],
      "correcta": 1,
      "justificacion": "El artículo 4.14 define los datos biométricos como los resultantes de tratamientos técnicos específicos relativos a características físicas, fisiológicas o conductuales que permiten la identificación única (huellas, iris, reconocimiento facial).",
      "referencia": "Art. 4.14 RGPD"
    },
    {
      "id": "2300-43",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "El derecho de 'oposición' del interesado le permite:",
      "opciones": [
        "Obtener una copia de sus datos.",
        "Oponerse en cualquier momento al tratamiento de sus datos por motivos relacionados con su situación particular, cuando el tratamiento se base en interés público o interés legítimo.",
        "Impedir el acceso de la AEPD a sus datos.",
        "Solicitar la portabilidad de sus datos."
      ],
      "correcta": 1,
      "justificacion": "El artículo 21 del RGPD regula el derecho de oposición, que permite oponerse al tratamiento cuando este se base en los fundamentos del artículo 6.1.e) o f) (interés público o interés legítimo).",
      "referencia": "Art. 21 RGPD"
    },
    {
      "id": "2300-44",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "Las Administraciones Públicas pueden ser sancionadas por la AEPD por incumplimiento del RGPD. La LOPDGDD prevé para ellas:",
      "opciones": [
        "Las mismas multas que para las empresas privadas.",
        "Multas reducidas al 50% del importe que correspondería a una empresa.",
        "No multas económicas, sino apercibimiento y comunicación al Parlamento u órgano de control, pudiendo iniciarse actuaciones disciplinarias.",
        "Son inmunes a cualquier sanción de la AEPD."
      ],
      "correcta": 2,
      "justificacion": "El artículo 77 de la LOPDGDD prevé que cuando el responsable sea una AA.PP, la AEPD dictará apercibimiento, lo comunicará al Defensor del Pueblo y al organismo de control parlamentario, y podrá proponer inicio de actuaciones disciplinarias.",
      "referencia": "Art. 77 LOPDGDD"
    },
    {
      "id": "2300-45",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "El 'Comité Europeo de Protección de Datos' (CEPD/EDPB) es:",
      "opciones": [
        "Una división de la Comisión Europea.",
        "El organismo europeo independiente formado por las autoridades de control de los Estados miembros que garantiza la aplicación coherente del RGPD.",
        "Un tribunal europeo que resuelve recursos en materia de protección de datos.",
        "La sección del TJUE dedicada a datos personales."
      ],
      "correcta": 1,
      "justificacion": "El CEPD (art. 68 RGPD) es el organismo formado por los representantes de las autoridades de control nacionales de la UE, que garantiza la aplicación coherente del RGPD.",
      "referencia": "Art. 68 RGPD"
    },
    {
      "id": "2300-46",
      "tema": "2300",
      "nivel": "bronce",
      "enunciado": "El tratamiento de datos con fines de videovigilancia por parte de una Administración Pública:",
      "opciones": [
        "Está expresamente prohibido.",
        "Puede realizarse en espacios públicos para garantizar la seguridad, con las garantías previstas en la normativa.",
        "Solo lo puede hacer la Policía Nacional.",
        "Requiere siempre consentimiento expreso de los grabados."
      ],
      "correcta": 1,
      "justificacion": "La LOPDGDD (arts. 22 y ss.) permite la videovigilancia con fines de seguridad pública, requiriendo zonas de información visible (carteles) y cumplimiento de los principios del RGPD.",
      "referencia": "Art. 22 LOPDGDD"
    },
    {
      "id": "2300-47",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "¿Qué mecanismo crea el RGPD para resolver discrepancias entre autoridades de control de distintos Estados miembros cuando el tratamiento afecta a varios países?",
      "opciones": [
        "El recurso ante el TJUE.",
        "La mediación de la Comisión Europea.",
        "El mecanismo de ventanilla única y el procedimiento de coherencia.",
        "La remisión al Comité de Ministros."
      ],
      "correcta": 2,
      "justificacion": "El mecanismo de ventanilla única (one-stop-shop) y el procedimiento de coherencia del RGPD (arts. 56, 60 y 63) permiten que los tratamientos transfronterizos sean supervisados por la autoridad del Estado de establecimiento principal.",
      "referencia": "Arts. 56, 60, 63 RGPD"
    },
    {
      "id": "2300-48",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "¿Qué finalidades pueden justificar el tratamiento ulterior de datos para fines distintos a los originales según el RGPD?",
      "opciones": [
        "Solo finalidades comerciales.",
        "Fines de archivo en interés público, fines de investigación científica, histórica o estadística.",
        "Cualquier fin lucrativo del responsable.",
        "Ninguna, el tratamiento ulterior siempre está prohibido."
      ],
      "correcta": 1,
      "justificacion": "El artículo 5.1.b del RGPD permite como excepción el tratamiento ulterior para fines de archivo en interés público, investigación científica o histórica y fines estadísticos.",
      "referencia": "Art. 5.1.b RGPD"
    },
    {
      "id": "2300-49",
      "tema": "2300",
      "nivel": "oro",
      "enunciado": "El DPO debe ser designado atendiendo a sus cualidades profesionales y, en particular, a sus:",
      "opciones": [
        "Habilidades informáticas y conocimiento de ciberseguridad.",
        "Conocimientos especializados del Derecho y la práctica en materia de protección de datos.",
        "Experiencia en gestión empresarial.",
        "Titulación universitaria en Derecho exclusivamente."
      ],
      "correcta": 1,
      "justificacion": "El artículo 37.5 del RGPD exige que el DPO sea designado atendiendo a sus cualidades profesionales y, especialmente, a sus conocimientos especializados de Derecho y práctica en materia de protección de datos.",
      "referencia": "Art. 37.5 RGPD"
    },
    {
      "id": "2300-50",
      "tema": "2300",
      "nivel": "plata",
      "enunciado": "¿Cuántos años de prescripción tienen las infracciones muy graves de la LOPDGDD?",
      "opciones": [
        "1 año.",
        "2 años.",
        "3 años.",
        "5 años."
      ],
      "correcta": 2,
      "justificacion": "El artículo 72.2 de la LOPDGDD establece que las infracciones muy graves prescriben a los 3 años, las graves a los 2 años y las leves al año.",
      "referencia": "Art. 72-74 LOPDGDD"
    }
  ]
};

fs.writeFileSync(path.join(__dirname, 'src/data/tema2300.json'), JSON.stringify(tema2300, null, 2), 'utf8');
console.log('tema2300.json creado con 50 preguntas.');
