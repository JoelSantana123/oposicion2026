const fs = require('fs');
const path = require('path');

const tema1000 = {
  "tema_id": "1000",
  "tema_nombre": "Atención Ciudadana, Decreto y Archivo",
  "preguntas": [
    {
      "id": "1000-01",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "¿Cuál es el objeto principal del Decreto 17/2020, de 13 de febrero, del Gobierno de Canarias sobre atención ciudadana?",
      "opciones": [
        "Regular exclusivamente los registros electrónicos de la CAC.",
        "Establecer el marco normativo de la Red de Atención Ciudadana de la Administración Pública de la Comunidad Autónoma de Canarias.",
        "Fijar las tasas por servicios de información administrativa.",
        "Regular el régimen sancionador por incumplimiento del derecho de acceso a la información."
      ],
      "correcta": 1,
      "justificacion": "El Decreto 17/2020 tiene por objeto establecer el marco normativo de la Red de Atención Ciudadana (RAC) de la Administración Pública de la CAC.",
      "referencia": "Art. 1 Decreto 17/2020"
    },
    {
      "id": "1000-02",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "La Red de Atención Ciudadana (RAC) de la CAC se estructura en tres canales. ¿Cuál de las siguientes NO es uno de ellos?",
      "opciones": [
        "Canal presencial.",
        "Canal telefónico.",
        "Canal postal ordinario.",
        "Canal electrónico."
      ],
      "correcta": 2,
      "justificacion": "La RAC se estructura en canal presencial (Oficinas de Atención Ciudadana), canal telefónico (012) y canal electrónico (Sede Electrónica). El correo postal ordinario no es un canal de la RAC.",
      "referencia": "Art. 6 Decreto 17/2020"
    },
    {
      "id": "1000-03",
      "tema": "1000",
      "nivel": "bronce",
      "enunciado": "¿Qué número de teléfono identifica el canal telefónico de atención ciudadana de la CAC?",
      "opciones": [
        "010",
        "012",
        "060",
        "900 100 200"
      ],
      "correcta": 1,
      "justificacion": "El número de atención ciudadana de la Comunidad Autónoma de Canarias a través del canal telefónico es el 012.",
      "referencia": "Canal Telefónico RAC"
    },
    {
      "id": "1000-04",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "Según el Decreto 17/2020, las Oficinas de Atención Ciudadana (OAC) podrán prestar servicios de:",
      "opciones": [
        "Información general y asistencia en el uso de medios electrónicos.",
        "Únicamente recepción de solicitudes y documentación.",
        "Solo orientación sobre qué Consejería es competente.",
        "Tramitación completa de expedientes complejos en tiempo real."
      ],
      "correcta": 0,
      "justificacion": "Las OAC prestan, entre otros, servicios de información general y específica, asistencia en el uso de medios electrónicos, recepción de solicitudes y registro.",
      "referencia": "Art. 14 Decreto 17/2020"
    },
    {
      "id": "1000-05",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "El órgano responsable de la planificación, coordinación e impulso de la Red de Atención Ciudadana en la CAC es:",
      "opciones": [
        "La Consejería de Economía.",
        "La Dirección General competente en materia de atención ciudadana y modernización.",
        "La Viceconsejería de Hacienda.",
        "El Servicio Canario de Empleo."
      ],
      "correcta": 1,
      "justificacion": "La Dirección General competente en materia de atención ciudadana y modernización de la administración es el órgano responsable de la planificación y coordinación de la RAC.",
      "referencia": "Art. 5 Decreto 17/2020"
    },
    {
      "id": "1000-06",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "En el marco de la Ley 39/2015, los interesados tienen derecho a NO aportar documentos que ya obren en poder de la Administración. Este principio se denomina:",
      "opciones": [
        "Principio de transparencia activa.",
        "Principio de aportación única o 'once only'.",
        "Principio de eficiencia documental.",
        "Principio de proporcionalidad."
      ],
      "correcta": 1,
      "justificacion": "El principio 'once only' o de aportación única implica que los ciudadanos no deben aportar datos o documentos que ya obran en poder de la Administración o pueden obtenerse de otros organismos.",
      "referencia": "Art. 28 Ley 39/2015"
    },
    {
      "id": "1000-07",
      "tema": "1000",
      "nivel": "bronce",
      "enunciado": "¿Cuál es el plazo máximo de resolución de una reclamación por el derecho de acceso a la información pública ante el Comisionado de Transparencia de Canarias?",
      "opciones": [
        "15 días hábiles.",
        "1 mes.",
        "3 meses.",
        "6 meses."
      ],
      "correcta": 2,
      "justificacion": "El plazo máximo para resolver las reclamaciones ante el Comisionado de Transparencia es de 3 meses, transcurrido el cual se entienden desestimadas.",
      "referencia": "Ley 12/2014 de Transparencia de Canarias"
    },
    {
      "id": "1000-08",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "En materia de archivo, ¿qué tipo de documentos están sujetos a plazos de eliminación o conservación regulados por las Comisiones Calificadoras?",
      "opciones": [
        "Solo los documentos declarados secretos.",
        "Solo los documentos en soporte electrónico.",
        "Toda la documentación generada o recibida por la Administración Pública.",
        "Únicamente los expedientes de personal."
      ],
      "correcta": 2,
      "justificacion": "Las Comisiones Calificadoras de Documentos Administrativos tienen por función evaluar y dictaminar el valor documental de TODA la documentación generada o recibida por la Administración.",
      "referencia": "Sistema de Archivos (principios generales)"
    },
    {
      "id": "1000-09",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "El Sistema de Archivos de la Comunidad Autónoma de Canarias se regula por:",
      "opciones": [
        "La Ley 3/1990, de 22 de febrero, de Patrimonio Documental y Archivos de Canarias.",
        "El Real Decreto Legislativo 781/1986.",
        "La Ley 39/2015 de Procedimiento Administrativo.",
        "El Decreto 77/2004."
      ],
      "correcta": 0,
      "justificacion": "La Ley 3/1990, de 22 de febrero, de Patrimonio Documental y Archivos de Canarias regula el Sistema de Archivos autonómico.",
      "referencia": "Ley 3/1990 de Canarias"
    },
    {
      "id": "1000-10",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "En el ciclo vital de los documentos, los archivos intermedios conservan la documentación:",
      "opciones": [
        "Por tiempo indefinido.",
        "Mientras tiene vigencia administrativa activa (fase activa).",
        "Cuando ha perdido su vigencia administrativa pero aún puede ser reclamada (fase semiactiva).",
        "Cuando tiene valor histórico definitivo."
      ],
      "correcta": 2,
      "justificacion": "Los archivos intermedios corresponden a la fase semiactiva del ciclo vital, cuando la documentación ya no tiene actividad administrativa plena pero puede ser consultada.",
      "referencia": "Ciclo vital de los documentos"
    },
    {
      "id": "1000-11",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "El Archivo General de la Comunidad Autónoma de Canarias tiene su sede en:",
      "opciones": [
        "Las Palmas de Gran Canaria.",
        "Santa Cruz de Tenerife.",
        "San Cristóbal de La Laguna.",
        "Hay una sede en cada capital insular."
      ],
      "correcta": 1,
      "justificacion": "El Archivo General de la CAC (AGCA) tiene su sede en Santa Cruz de Tenerife.",
      "referencia": "Archivo General CAC"
    },
    {
      "id": "1000-12",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "Según la Ley 39/2015, el registro electrónico de las Administraciones Públicas debe estar disponible:",
      "opciones": [
        "Solo en horario de oficina.",
        "De lunes a viernes de 8:00 a 20:00.",
        "Las 24 horas del día, todos los días del año.",
        "Al menos 12 horas diarias en días hábiles."
      ],
      "correcta": 2,
      "justificacion": "El artículo 16.4 establece que el registro electrónico permitirá la presentación de documentos todos los días del año durante las veinticuatro horas.",
      "referencia": "Art. 16.4 Ley 39/2015"
    },
    {
      "id": "1000-13",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "Cuando un documento se presenta en el registro electrónico en un día inhábil, ¿cuándo se entiende presentado a efectos de cómputo de plazos?",
      "opciones": [
        "El mismo día de presentación.",
        "El día hábil siguiente a las 00:00.",
        "El día hábil siguiente al de la presentación a las 08:00.",
        "El día hábil siguiente a las 12:00."
      ],
      "correcta": 1,
      "justificacion": "Los documentos presentados en día inhábil se entienden presentados a las 00:00 horas del primer día hábil siguiente.",
      "referencia": "Art. 31.2 Ley 39/2015"
    },
    {
      "id": "1000-14",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "En materia de información, se distingue entre información general e información particular. ¿Cuál es la diferencia principal?",
      "opciones": [
        "La información general es siempre gratuita y la particular es de pago.",
        "La información general se refiere al funcionamiento y normativa, mientras la particular hace referencia al estado de tramitación de procedimientos concretos.",
        "La información general solo puede proporcionarla el titular del órgano.",
        "No existe distinción legal entre ambos tipos."
      ],
      "correcta": 1,
      "justificacion": "La información general versa sobre la organización, procedimientos y normativa. La información particular trata del estado de tramitación de un expediente concreto del ciudadano.",
      "referencia": "Art. 13 y 53 Ley 39/2015"
    },
    {
      "id": "1000-15",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "¿Qué es el sistema de 'ventanilla única' en el ámbito de la atención ciudadana?",
      "opciones": [
        "Un banco de datos compartido entre todas las Administraciones.",
        "Un sistema en virtud del cual el ciudadano puede presentar cualquier solicitud en una única oficina, independientemente de la Administración competente.",
        "Un único número de teléfono para todas las gestiones.",
        "El sistema de gestión de colas en las oficinas presenciales."
      ],
      "correcta": 1,
      "justificacion": "La ventanilla única permite al ciudadano realizar gestiones con distintas Administraciones en un único punto de acceso, presencial o electrónico.",
      "referencia": "Directiva de Servicios / Ley 39/2015"
    },
    {
      "id": "1000-16",
      "tema": "1000",
      "nivel": "bronce",
      "enunciado": "La carta de servicios es un documento mediante el cual:",
      "opciones": [
        "Se regula el organigrama interno de una unidad administrativa.",
        "La Administración se compromete con los ciudadanos sobre los servicios que presta y los estándares de calidad.",
        "Se establecen las sanciones por mal funcionamiento del servicio.",
        "Se autoriza a los funcionarios a atender al público."
      ],
      "correcta": 1,
      "justificacion": "Las cartas de servicios son documentos que establecen compromisos de calidad que los organismos públicos adquieren con la ciudadanía respecto a los servicios que prestan.",
      "referencia": "Cartas de Servicios (Decreto 212/1991 y ss.)"
    },
    {
      "id": "1000-17",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "El expediente administrativo en formato electrónico debe contener necesariamente:",
      "opciones": [
        "El documento original en papel firmado.",
        "Un índice numerado correlativo de todos los documentos que lo integran.",
        "Una copia impresa de todos los correos electrónicos.",
        "La firma del Secretario General en cada página."
      ],
      "correcta": 1,
      "justificacion": "El artículo 70.2 de la Ley 39/2015 exige que el expediente electrónico disponga de un índice que garantice la integridad del mismo y permita su recuperación.",
      "referencia": "Art. 70.2 Ley 39/2015"
    },
    {
      "id": "1000-18",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "La notificación electrónica se practicará en la dirección electrónica habilitada única (DEHú). Si el interesado no accede al contenido en el plazo fijado, se entenderá rechazada cuando hayan transcurrido:",
      "opciones": [
        "5 días naturales.",
        "10 días naturales.",
        "15 días naturales.",
        "20 días naturales."
      ],
      "correcta": 1,
      "justificacion": "El artículo 43.2 de la Ley 39/2015 establece que si transcurridos 10 días naturales desde la puesta a disposición el destinatario no accede, la notificación se entenderá rechazada.",
      "referencia": "Art. 43.2 Ley 39/2015"
    },
    {
      "id": "1000-19",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "¿Qué sucede con las comunicaciones en el registro electrónico cuando se produce una interrupción del servicio por causas técnicas?",
      "opciones": [
        "El plazo sigue computando en todo caso.",
        "Se producirá la ampliación automática del plazo hasta que se restablezca el servicio.",
        "Los documentos quedan automáticamente rechazados.",
        "Debe comunicarse por fax."
      ],
      "correcta": 1,
      "justificacion": "Si existe interrupción técnica del registro electrónico, se ampliarán los plazos hasta que se restablezca el servicio.",
      "referencia": "Art. 32.4 Ley 39/2015"
    },
    {
      "id": "1000-20",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "Las quejas y sugerencias de los ciudadanos sobre el funcionamiento de los servicios públicos:",
      "opciones": [
        "No abren procedimiento administrativo alguno.",
        "Tienen la misma consideración que un recurso administrativo.",
        "Obligan a la Administración a resolver de forma favorable.",
        "Solo pueden presentarse por vía telemática."
      ],
      "correcta": 0,
      "justificacion": "Las quejas y sugerencias no inician procedimiento administrativo. Son instrumentos de mejora de la calidad del servicio, sin carácter de recurso.",
      "referencia": "Distinción quejas/sugerencias vs. recursos"
    },
    {
      "id": "1000-21",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "El 'derecho de acceso' de los interesados a la información sobre el estado de tramitación de su procedimiento se establece en la Ley 39/2015. ¿Desde qué momento se puede ejercer?",
      "opciones": [
        "Solo una vez dictada la resolución.",
        "Solo en la fase de instrucción.",
        "En cualquier momento del procedimiento, desde su inicio hasta que finalice.",
        "Solo después de transcurrido el plazo de resolución sin respuesta."
      ],
      "correcta": 2,
      "justificacion": "El artículo 53.a) de la Ley 39/2015 reconoce el derecho a conocer el estado de tramitación en cualquier momento del procedimiento.",
      "referencia": "Art. 53.a) Ley 39/2015"
    },
    {
      "id": "1000-22",
      "tema": "1000",
      "nivel": "bronce",
      "enunciado": "El Decreto 77/2004, de 10 de junio, de organización y funcionamiento del Sistema de Archivos de la Comunidad Autónoma de Canarias, regula:",
      "opciones": [
        "Las funciones del Archivo Histórico Provincial.",
        "Los Archivos de gestión, centrales e intermedios de la CAC.",
        "Solo el Archivo General de la CAC.",
        "El acceso a los archivos municipales."
      ],
      "correcta": 1,
      "justificacion": "El Decreto 77/2004 regula la organización y funcionamiento de los archivos de gestión, centrales e intermedios del sistema de archivos de la CAC.",
      "referencia": "Decreto 77/2004"
    },
    {
      "id": "1000-23",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "En los archivos de gestión, ¿cuál es el plazo general recomendado para la transferencia de los documentos al archivo central?",
      "opciones": [
        "1 año desde su creación.",
        "2 años desde la finalización del trámite.",
        "5 años desde la finalización del trámite.",
        "10 años desde la finalización del trámite."
      ],
      "correcta": 2,
      "justificacion": "Como regla general, los documentos se conservan en el archivo de gestión durante 5 años y luego se transfieren al archivo central.",
      "referencia": "Ciclo documental / D. 77/2004"
    },
    {
      "id": "1000-24",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "La Comisión Calificadora de Documentos Administrativos de la Comunidad Autónoma de Canarias tiene como función principal:",
      "opciones": [
        "Redactar los criterios de archivo de cada Consejería.",
        "Emitir informes y dictámenes sobre el valor de los documentos y proponer plazos de conservación y eliminación.",
        "Ejecutar directamente la eliminación de documentos.",
        "Auditar el sistema informático de gestión documental."
      ],
      "correcta": 1,
      "justificacion": "La Comisión Calificadora emite los dictámenes sobre el valor de los documentos y propone los plazos de conservación o acceso y las condiciones de eliminación.",
      "referencia": "Art. 53 Ley 3/1990 / D. 77/2004"
    },
    {
      "id": "1000-25",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "En el ámbito de la Sede Electrónica de la CAC, ¿quién es el responsable de la integridad, veracidad y actualización de la información publicada?",
      "opciones": [
        "El Gobierno de Canarias de forma colectiva.",
        "La persona titular de la Consejería donde esté adscrita la competencia.",
        "El titular del órgano dueño de cada servicio o información.",
        "El ciudadano que la consulta."
      ],
      "correcta": 2,
      "justificacion": "El responsable de la integridad, veracidad y actualización de los servicios e informaciones de la Sede Electrónica es el titular del órgano administrativo responsable de cada uno.",
      "referencia": "Sede Electrónica (principios)"
    },
    {
      "id": "1000-26",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "¿Cuál es la diferencia entre el 'archivo de oficina' y el 'archivo central' de una Consejería?",
      "opciones": [
        "El archivo de oficina custodia los documentos en tramitación activa, el central los archivados de toda la Consejería.",
        "No hay diferencia, son términos sinónimos.",
        "El archivo de oficina es el histórico y el central el activo.",
        "Solo el archivo central es de acceso público."
      ],
      "correcta": 0,
      "justificacion": "El archivo de oficina (o de gestión) custodia la documentación activa o en tramitación. El archivo central agrupa la documentación de las distintas unidades de la Consejería una vez concluida la tramitación.",
      "referencia": "Tipos de Archivos / D. 77/2004"
    },
    {
      "id": "1000-27",
      "tema": "1000",
      "nivel": "bronce",
      "enunciado": "La figura del 'Personal de Atención Ciudadana' en las Oficinas de Atención Ciudadana (OAC) de Canarias desempeña funciones de:",
      "opciones": [
        "Exclusivamente registro de entrada.",
        "Información, orientación, asistencia y tramitación básica.",
        "Resolución de recursos y reclamaciones.",
        "Inspección de servicios."
      ],
      "correcta": 1,
      "justificacion": "El personal de las OAC presta servicios de información, orientación al ciudadano, asistencia para el uso de medios electrónicos y tramitación básica.",
      "referencia": "Art. 16 Decreto 17/2020"
    },
    {
      "id": "1000-28",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "¿Está obligado un ciudadano extranjero no residente en España a relacionarse electrónicamente con la Administración Pública española?",
      "opciones": [
        "Sí, siempre.",
        "No, nunca.",
        "Solo si dispone de DNI electrónico.",
        "Depende de la materia; en la administración general no está obligado a ello por defecto."
      ],
      "correcta": 3,
      "justificacion": "La obligación de relacionarse electrónicamente con la Administración (art. 14.2 Ley 39/2015) no se extiende automáticamente a personas físicas que no estén en los supuestos específicos (personas jurídicas, colectivos profesionales, etc.).",
      "referencia": "Art. 14.2 Ley 39/2015"
    },
    {
      "id": "1000-29",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "Los sujetos que ESTÁN obligados a relacionarse electrónicamente con las Administraciones Públicas según la Ley 39/2015 son, entre otros:",
      "opciones": [
        "Todas las personas físicas sin excepción.",
        "Las personas jurídicas, las entidades sin personalidad jurídica y los profesionales colegiados.",
        "Solo las grandes empresas con facturación superior a 1 millón de euros.",
        "Los funcionarios para actos de su vida privada."
      ],
      "correcta": 1,
      "justificacion": "El artículo 14.2 obliga a relacionarse electrónicamente a las personas jurídicas, entidades sin personalidad jurídica, quienes ejerzan actividad profesional con colegiación obligatoria y empleados públicos.",
      "referencia": "Art. 14.2 Ley 39/2015"
    },
    {
      "id": "1000-30",
      "tema": "1000",
      "nivel": "bronce",
      "enunciado": "Un ciudadano que actúa asistido por un empleado público para tramitar un expediente electrónico: ¿es ello posible?",
      "opciones": [
        "No, el ciudadano debe actuar siempre de forma autónoma.",
        "Sí, el empleado público puede asistirle y actuar en su nombre con su consentimiento.",
        "Sí, pero el ciudadano debe pagar una tasa.",
        "Solo si hay resolución judicial."
      ],
      "correcta": 1,
      "justificacion": "El artículo 12 de la Ley 39/2015 permite que los empleados públicos asistan a los ciudadanos en el uso de medios electrónicos, actuando en su nombre con su consentimiento.",
      "referencia": "Art. 12 Ley 39/2015"
    },
    {
      "id": "1000-31",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "¿Cuáles son los principios que deben regir la actuación de los empleados públicos en la atención ciudadana?",
      "opciones": [
        "Objetividad, eficacia, jerarquía e imparcialidad.",
        "Rapidez, economía, urgencia y discreción.",
        "Amabilidad, puntualidad y estética.",
        "Exclusivamente los recogidos en la Ley 39/2015."
      ],
      "correcta": 0,
      "justificacion": "Los principios de objetividad, eficacia, jerarquía, descentralización, desconcentración, coordinación e imparcialidad rigen la actuación de la Administración (art. 3 Ley 40/2015).",
      "referencia": "Art. 3 Ley 40/2015"
    },
    {
      "id": "1000-32",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "En cuanto al registro físico de la administración, ¿cuántos registros de entrada y salida puede tener una Administración Pública?",
      "opciones": [
        "Solo uno por Administración.",
        "Uno por cada Consejería.",
        "Al menos uno, pudiendo existir registros auxiliares.",
        "Un número ilimitado sin restricción."
      ],
      "correcta": 2,
      "justificacion": "Cada Administración dispondrá de un Registro General al que se interconectarán todos los registros auxiliares que puedan existir en sus oficinas.",
      "referencia": "Art. 16 Ley 39/2015"
    },
    {
      "id": "1000-33",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "Cuando un ciudadano presenta un documento con defectos subsanables en el procedimiento, la Administración debe:",
      "opciones": [
        "Rechazarlo automáticamente.",
        "Requerirle para que subsane la falta en un plazo de 10 días, con indicación de los efectos del incumplimiento.",
        "Admitirlo igualmente sin trámite de subsanación.",
        "Archivar el expediente."
      ],
      "correcta": 1,
      "justificacion": "El artículo 68.1 de la Ley 39/2015 obliga a la Administración a requerir al interesado la subsanación en el plazo de 10 días (prorrogables hasta 5 más).",
      "referencia": "Art. 68.1 Ley 39/2015"
    },
    {
      "id": "1000-34",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "La 'información pública' en los procedimientos administrativos (trámite de exposición al público) tiene una duración mínima de:",
      "opciones": [
        "10 días hábiles.",
        "15 días hábiles.",
        "20 días hábiles.",
        "30 días hábiles."
      ],
      "correcta": 2,
      "justificacion": "El artículo 83 de la Ley 39/2015 establece que el plazo mínimo de información pública es de veinte días.",
      "referencia": "Art. 83 Ley 39/2015"
    },
    {
      "id": "1000-35",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "La Ley 12/2014, de 26 de diciembre, de Transparencia y Acceso a la Información Pública de Canarias, reconoce el derecho de acceso a la información pública. Para ejercerlo:",
      "opciones": [
        "Solo pueden hacerlo ciudadanos españoles.",
        "Es necesario ser mayor de 18 años y tener interés legítimo.",
        "No es necesario motivar la solicitud ni invocar interés alguno.",
        "Se requiere ser funcionario de la CAC."
      ],
      "correcta": 2,
      "justificacion": "El derecho de acceso a la información pública puede ejercerse por cualquier persona sin necesidad de motivar la solicitud ni invocar interés.",
      "referencia": "Ley 12/2014 de Transparencia de Canarias / Ley 19/2013 estatal"
    },
    {
      "id": "1000-36",
      "tema": "1000",
      "nivel": "bronce",
      "enunciado": "El plazo máximo para resolver una solicitud de acceso a la información pública es de:",
      "opciones": [
        "15 días hábiles.",
        "1 mes (prorrogable 1 mes más).",
        "2 meses (prorrogables 1 mes más).",
        "3 meses."
      ],
      "correcta": 1,
      "justificacion": "La Ley 19/2013 y la Ley 12/2014 de Canarias fijan un plazo de 1 mes, prorrogable por otro mes adicional cuando el volumen o la complejidad lo exija.",
      "referencia": "Art. 20 Ley 19/2013 / Art. 22 Ley 12/2014 Canarias"
    },
    {
      "id": "1000-37",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "¿Qué es la 'Carpeta ciudadana' en el contexto de la administración electrónica de la CAC?",
      "opciones": [
        "Un archivo físico por ciudadano en la OAC.",
        "Un espacio personalizado en la Sede Electrónica donde cada ciudadano puede consultar sus expedientes, notificaciones y datos.",
        "Un sistema de fichero en papel por unidad administrativa.",
        "Un correo electrónico asignado por la Administración."
      ],
      "correcta": 1,
      "justificacion": "La Carpeta Ciudadana es un espacio personalizado disponible en la Sede Electrónica donde el usuario puede consultar sus trámites, notificaciones y datos administrativos.",
      "referencia": "Sede Electrónica CAC / Decreto 17/2020"
    },
    {
      "id": "1000-38",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "Respecto a la actuación administrativa automatizada, ¿qué elementos deben identificar inequívocamente al órgano responsable?",
      "opciones": [
        "El nombre del funcionario que configuró el sistema.",
        "El sello electrónico del órgano o entidad y, en su caso, el código seguro de verificación.",
        "La firma electrónica avanzada del Secretario General.",
        "El certificado digital personal del Consejero."
      ],
      "correcta": 1,
      "justificacion": "La actuación administrativa automatizada se identifica mediante el sello electrónico de órgano o entidad, y el CSV (Código Seguro de Verificación) permite la comprobación de autenticidad.",
      "referencia": "Art. 41 Ley 40/2015"
    },
    {
      "id": "1000-39",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "¿En qué se diferencia la 'firma electrónica avanzada' de la 'firma electrónica reconocida o cualificada'?",
      "opciones": [
        "Son exactamente lo mismo, solo cambia la denominación.",
        "La reconocida/cualificada está basada en un certificado cualificado y se crea mediante un dispositivo de creación de firma cualificado.",
        "La avanzada tiene mayor nivel de seguridad.",
        "La reconocida solo la pueden usar los empleados públicos."
      ],
      "correcta": 1,
      "justificacion": "La firma electrónica cualificada o reconocida es una firma avanzada que, además, se basa en un certificado cualificado y ha sido creada por un dispositivo de creación de firma cualificado.",
      "referencia": "Reglamento eIDAS / Ley 39/2015"
    },
    {
      "id": "1000-40",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "La Ley 12/2014 de Transparencia de Canarias distingue entre publicidad activa y derecho de acceso. ¿Cuál es la diferencia principal?",
      "opciones": [
        "No existe diferencia real.",
        "La publicidad activa supone la obligación de la Administración de publicar información de oficio; el derecho de acceso requiere solicitud del ciudadano.",
        "La publicidad activa solo afecta a las empresas públicas.",
        "El derecho de acceso implica publicación automática en el BOC."
      ],
      "correcta": 1,
      "justificacion": "La publicidad activa obliga a la Administración a publicar información de forma proactiva sin necesidad de solicitud. El derecho de acceso se ejerce a petición del interesado.",
      "referencia": "Ley 12/2014 Canarias / Ley 19/2013"
    },
    {
      "id": "1000-41",
      "tema": "1000",
      "nivel": "bronce",
      "enunciado": "¿Cuál es la finalidad del 'Código Seguro de Verificación' (CSV) en los documentos administrativos?",
      "opciones": [
        "Encriptar el contenido del documento.",
        "Permitir la verificación de la autenticidad e integridad de los documentos emitidos electrónicamente en la sede electrónica.",
        "Servir como número de registro del expediente.",
        "Identificar al funcionario que firma."
      ],
      "correcta": 1,
      "justificacion": "El CSV permite a cualquier ciudadano verificar en la sede electrónica la autenticidad e integridad del documento administrativo electrónico.",
      "referencia": "Art. 27.3.b Ley 39/2015"
    },
    {
      "id": "1000-42",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "En la atención ciudadana, el 'protocolo de acogida' se refiere a:",
      "opciones": [
        "El ritual de apertura de las sesiones del Pleno.",
        "Las pautas de comportamiento, comunicación y asistencia que sigue el personal al inicio de cada interacción con el ciudadano.",
        "El procedimiento de alta de un nuevo funcionario.",
        "El documento que regula las visitas de autoridades a las oficinas."
      ],
      "correcta": 1,
      "justificacion": "El protocolo de acogida establece las pautas de comportamiento, actitud y comunicación que deben seguir los empleados públicos cuando inician la atención a un ciudadano.",
      "referencia": "Buenas prácticas en atención ciudadana"
    },
    {
      "id": "1000-43",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "La 'interoperabilidad' entre Administraciones Públicas en el ámbito electrónico significa:",
      "opciones": [
        "Que todas las AAPP usen el mismo software de gestión.",
        "La capacidad de los sistemas de información para intercambiar datos y compartir información de manera automática.",
        "Que los ciudadanos puedan acceder a todos los documentos de cualquier Administración.",
        "La fusión de distintos organismos públicos."
      ],
      "correcta": 1,
      "justificacion": "La interoperabilidad es la capacidad de los sistemas TIC de compartir información y cooperar entre sí, lo que permite que las Administraciones intercambien datos sin necesidad de que el ciudadano los aporte.",
      "referencia": "ENI (Esquema Nacional de Interoperabilidad)"
    },
    {
      "id": "1000-44",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "¿Cuál es el plazo máximo que tiene la Administración para contestar una queja o sugerencia ciudadana en el marco del Decreto 17/2020?",
      "opciones": [
        "15 días hábiles.",
        "1 mes.",
        "20 días hábiles.",
        "3 meses."
      ],
      "correcta": 1,
      "justificacion": "El Decreto 17/2020 y la normativa de atención ciudadana de la CAC fijan un plazo de 1 mes para dar respuesta a las quejas y sugerencias.",
      "referencia": "Art. 23 Decreto 17/2020"
    },
    {
      "id": "1000-45",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "¿Cuál es la finalidad principal de los Planes de Mejora en la atención ciudadana de la CAC?",
      "opciones": [
        "Reducir el número de empleados en las OAC.",
        "Identificar áreas de mejora en la prestación de servicios a partir de la evaluación de la satisfacción ciudadana.",
        "Imponer sanciones a empleados con baja productividad.",
        "Aumentar el número de procedimientos tramitables."
      ],
      "correcta": 1,
      "justificacion": "Los Planes de Mejora tienen por objeto identificar áreas susceptibles de mejora en los servicios públicos a partir de la evaluación de la satisfacción de los ciudadanos.",
      "referencia": "Calidad en la atención ciudadana"
    },
    {
      "id": "1000-46",
      "tema": "1000",
      "nivel": "bronce",
      "enunciado": "La 'Encuesta de Satisfacción' en el marco de la atención ciudadana sirve para:",
      "opciones": [
        "Sancionar a los empleados con peores valoraciones.",
        "Mejorar la calidad del servicio mediante la recogida sistemática de la opinión del ciudadano.",
        "Seleccionar a los funcionarios destinados en las OAC.",
        "Determinar los horarios de apertura de las OAC."
      ],
      "correcta": 1,
      "justificacion": "Las encuestas de satisfacción son herramientas de medición de la calidad percibida por el ciudadano, cuyos resultados se usan para implementar mejoras.",
      "referencia": "Calidad del servicio / Decreto 17/2020"
    },
    {
      "id": "1000-47",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "El 'patrimonio documental de Canarias' forma parte del Patrimonio Cultural Canario. Los documentos de entidades privadas pueden integrarse en él si tienen una antigüedad superior a:",
      "opciones": [
        "25 años.",
        "40 años.",
        "50 años.",
        "100 años."
      ],
      "correcta": 2,
      "justificacion": "La Ley 3/1990 establece que forman parte del Patrimonio Documental Canario los documentos de entidades privadas que tengan más de 50 años de antigüedad.",
      "referencia": "Art. 1 Ley 3/1990"
    },
    {
      "id": "1000-48",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "¿Cómo se denomina el procedimiento de transferencia de documentos entre los distintos niveles del Sistema de Archivos?",
      "opciones": [
        "Remisión documental.",
        "Transferencia de custodia.",
        "Expurgo.",
        "Transferencia ordinaria o extraordinaria."
      ],
      "correcta": 3,
      "justificacion": "Los documentos pasan de un archivo a otro mediante transferencias ordinarias (planificadas) o extraordinarias (no previstas), reguladas por el D. 77/2004.",
      "referencia": "D. 77/2004 / Ciclo documental"
    },
    {
      "id": "1000-49",
      "tema": "1000",
      "nivel": "oro",
      "enunciado": "La destrucción de documentos públicos que formen parte del Patrimonio Documental Canario:",
      "opciones": [
        "Puede realizarse libremente si así lo decide el órgano productor.",
        "Está absolutamente prohibida en cualquier caso.",
        "Requiere autorización expresa de la Comisión Calificadora y dictamen del Consejo Consultivo.",
        "Solo la puede acordar el Consejero de Hacienda."
      ],
      "correcta": 1,
      "justificacion": "La Ley 3/1990 establece la prohibición absoluta de destruir documentos que formen parte del Patrimonio Documental Canario.",
      "referencia": "Art. 18 Ley 3/1990"
    },
    {
      "id": "1000-50",
      "tema": "1000",
      "nivel": "plata",
      "enunciado": "El 'Esquema Nacional de Seguridad' (ENS) tiene como finalidad:",
      "opciones": [
        "Regular la seguridad física de los edificios de la Administración.",
        "Establecer la política de seguridad en la utilización de medios electrónicos en el ámbito de las Administraciones Públicas.",
        "Fijar las condiciones de seguridad en la contratación pública.",
        "Proteger las infraestructuras críticas del Estado."
      ],
      "correcta": 1,
      "justificacion": "El ENS (Real Decreto 311/2022) tiene por objeto establecer la política de seguridad en la utilización de medios electrónicos que facilite la creación de las condiciones necesarias de confianza en el uso de tales medios.",
      "referencia": "ENS / Real Decreto 311/2022"
    }
  ]
};

fs.writeFileSync(path.join(__dirname, 'src/data/tema1000.json'), JSON.stringify(tema1000, null, 2), 'utf8');
console.log('tema1000.json creado con 50 preguntas.');
