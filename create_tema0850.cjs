const fs = require('fs');
const path = require('path');

const tema0850 = {
  "tema_id": "0850",
  "tema_nombre": "Instituciones Estatutarias Canarias",
  "preguntas": [
    {
      "id": "0850-01",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "¿Qué mayoría se exige para la elección del Diputado del Común por el Parlamento de Canarias?",
      "opciones": [
        "Mayoría absoluta.",
        "Mayoría simple.",
        "Mayoría de dos tercios.",
        "Mayoría de tres quintas partes."
      ],
      "correcta": 3,
      "justificacion": "El artículo 57.3 del Estatuto de Autonomía y el artículo 4.2 de la Ley 7/2001 establecen que el Diputado del Común será elegido por una votación favorable de tres quintas (3/5) partes del Parlamento.",
      "referencia": "Art. 4.2 Ley 7/2001 / Art. 57.3 EAC"
    },
    {
      "id": "0850-02",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "¿Cuál es la duración del mandato del Diputado del Común?",
      "opciones": [
        "4 años.",
        "5 años.",
        "6 años.",
        "Vvitalicio."
      ],
      "correcta": 1,
      "justificacion": "El artículo 3 de la Ley 7/2001 indica que será elegido por un período de 5 años.",
      "referencia": "Art. 3 Ley 7/2001"
    },
    {
      "id": "0850-03",
      "tema": "0850",
      "nivel": "bronce",
      "enunciado": "¿Dónde tiene su sede el Diputado del Común?",
      "opciones": [
        "En Las Palmas de Gran Canaria.",
        "En Santa Cruz de Tenerife.",
        "En San Cristóbal de La Laguna.",
        "En Santa Cruz de La Palma."
      ],
      "correcta": 3,
      "justificacion": "El artículo 2.1 de la Ley 7/2001 fija la sede del Diputado del Común en la ciudad de Santa Cruz de La Palma.",
      "referencia": "Art. 2.1 Ley 7/2001"
    },
    {
      "id": "0850-04",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "El Diputado del Común podrá ser auxiliado por:",
      "opciones": [
        "Tres Adjuntos y un Letrado Mayor.",
        "Un Adjunto Primero y un Adjunto Segundo.",
        "Exclusivamente por una Adjuntía Especial.",
        "Un Secretario General y cinco Auditores."
      ],
      "correcta": 1,
      "justificacion": "El artículo 11.1 señala que estará auxiliado por un Adjunto primero y un Adjunto segundo, además de la reciente creación de la Adjuntía especial.",
      "referencia": "Art. 11.1 Ley 7/2001"
    },
    {
      "id": "0850-05",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "El Diputado del Común encomendará a uno de sus Adjuntos la responsabilidad especial de velar por la protección de los derechos de:",
      "opciones": [
        "Las personas con discapacidad.",
        "Los consumidores y usuarios.",
        "Los menores.",
        "Los mayores."
      ],
      "correcta": 3,
      "justificacion": "El artículo 11.4 de la Ley 7/2001 indica que encomendará a uno de sus Adjuntos velar especialmente por la protección de los derechos de los mayores.",
      "referencia": "Art. 11.4 Ley 7/2001"
    },
    {
      "id": "0850-06",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "¿Es posible presentar quejas anónimas ante el Diputado del Común?",
      "opciones": [
        "Sí, si existe un principio de prueba.",
        "No, el Diputado del Común no tramitará las quejas anónimas.",
        "Sí, es un requisito para proteger al denunciante.",
        "Solo en materia de corrupción política."
      ],
      "correcta": 1,
      "justificacion": "El artículo 25.2 de la Ley 7/2001 establece de forma expresa que el Diputado del Común no tramitará las quejas anónimas.",
      "referencia": "Art. 25.2 Ley 7/2001"
    },
    {
      "id": "0850-07",
      "tema": "0850",
      "nivel": "bronce",
      "enunciado": "La actuación de cualquier funcionario que dificulte la labor del Diputado del Común, sin justificación adecuada, será considerada:",
      "opciones": [
        "Infracción leve.",
        "Causa de recusación.",
        "Obstruccionista y entorpecedora.",
        "Fraude de ley."
      ],
      "correcta": 2,
      "justificacion": "El artículo 34.1 dispone que será considerada obstruccionista y entorpecedora de las funciones, pudiendo hacerse pública en el Boletín Oficial del Parlamento.",
      "referencia": "Art. 34.1 Ley 7/2001"
    },
    {
      "id": "0850-08",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "¿Qué mayoría se requiere para aprobar la propuesta de destitución del Diputado del Común por negligencia notoria (art. 9.1.f)?",
      "opciones": [
        "Mayoría absoluta.",
        "Mayoría de dos tercios.",
        "Mayoría de tres quintas partes.",
        "Mayoría simple."
      ],
      "correcta": 2,
      "justificacion": "El artículo 9.3 de la Ley 7/2001 señala que se requerirá para su aprobación por el Pleno el voto de las tres quintas (3/5) partes de los miembros.",
      "referencia": "Art. 9.3 Ley 7/2001"
    },
    {
      "id": "0850-09",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "¿Cuántos miembros integran el Consejo Consultivo de Canarias?",
      "opciones": [
        "5 miembros.",
        "7 miembros.",
        "11 miembros.",
        "27 miembros."
      ],
      "correcta": 1,
      "justificacion": "El artículo 4.1 de la Ley 5/2002 indica que está integrado por 7 consejeros o consejeras.",
      "referencia": "Art. 4.1 Ley 5/2002"
    },
    {
      "id": "0850-10",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "¿Cómo se eligen los miembros del Consejo Consultivo de Canarias?",
      "opciones": [
        "Todos a propuesta del Parlamento.",
        "4 a propuesta del Parlamento (por mayoría de 3/5) y 3 a propuesta del Gobierno.",
        "3 a propuesta del Parlamento, 3 del Gobierno y 1 por el TSJC.",
        "5 a propuesta del Parlamento y 2 del Gobierno."
      ],
      "correcta": 1,
      "justificacion": "El artículo 4.1 de la Ley 5/2002 establece que 4 son propuestos por el Parlamento y 3 por el Gobierno, entre juristas de reconocida competencia.",
      "referencia": "Art. 4.1 Ley 5/2002"
    },
    {
      "id": "0850-11",
      "tema": "0850",
      "nivel": "bronce",
      "enunciado": "La sede del Consejo Consultivo de Canarias se encuentra en:",
      "opciones": [
        "Las Palmas de Gran Canaria.",
        "San Cristóbal de La Laguna.",
        "Santa Cruz de Tenerife.",
        "Puerto del Rosario."
      ],
      "correcta": 1,
      "justificacion": "El artículo 2 de la Ley 5/2002 establece la sede en la ciudad de San Cristóbal de La Laguna.",
      "referencia": "Art. 2 Ley 5/2002"
    },
    {
      "id": "0850-12",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "¿Qué vigencia temporal tiene el mandato de los Consejeros del Consejo Consultivo de Canarias?",
      "opciones": [
        "4 años.",
        "5 años.",
        "6 años.",
        "Vitalicio."
      ],
      "correcta": 0,
      "justificacion": "El artículo 4.2 de la Ley 5/2002 indica que se nombrarán por un período de 4 años.",
      "referencia": "Art. 4.2 Ley 5/2002"
    },
    {
      "id": "0850-13",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "Los dictámenes del Consejo Consultivo de Canarias:",
      "opciones": [
        "Son siempre vinculantes.",
        "Son vinculantes salvo que la ley disponga lo contrario.",
        "No son vinculantes, salvo en los casos en que se disponga expresamente lo contrario.",
        "Son dictámenes de oportunidad política."
      ],
      "correcta": 2,
      "justificacion": "El artículo 3.1 señala que los dictámenes, salvo disposición en contrario, no son vinculantes y no pueden contener valoraciones de oportunidad o conveniencia.",
      "referencia": "Art. 3.1 Ley 5/2002"
    },
    {
      "id": "0850-14",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "¿Cuál es la fórmula empleada si la resolución administrativa se aparta del dictamen emitido por el Consejo Consultivo?",
      "opciones": [
        "De acuerdo con el dictamen del Consejo Consultivo.",
        "Contra el dictamen del Consejo Consultivo.",
        "Leído el dictamen del Consejo Consultivo.",
        "Visto el dictamen del Consejo Consultivo de Canarias."
      ],
      "correcta": 3,
      "justificacion": "El artículo 11.3 indica que si se apartan del dictamen se usará la fórmula 'visto el dictamen del Consejo Consultivo de Canarias'.",
      "referencia": "Art. 11.3 Ley 5/2002"
    },
    {
      "id": "0850-15",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "El plazo general de que dispone el Consejo Consultivo para emitir sus consultas es de:",
      "opciones": [
        "15 días.",
        "30 días.",
        "2 meses.",
        "3 meses."
      ],
      "correcta": 1,
      "justificacion": "El artículo 20.1 fija un plazo de 30 días, salvo ampliación justificada o tramitación por vía de urgencia (que sería 15 días).",
      "referencia": "Art. 20.1 Ley 5/2002"
    },
    {
      "id": "0850-16",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "¿Cuál de las siguientes cuestiones debe someterse a dictamen preceptivo del Consejo Consultivo?",
      "opciones": [
        "Reclamaciones de responsabilidad patrimonial por cuantía igual o superior a 6.000 euros.",
        "Reclamaciones de responsabilidad patrimonial por cuantía igual o superior a 60.000 euros.",
        "Los nombramientos de altos cargos.",
        "Las resoluciones sobre vacaciones del personal de una Consejería."
      ],
      "correcta": 1,
      "justificacion": "El artículo 11.1.D.e) de la Ley 5/2002, modificado recientemente, establece el dictamen preceptivo para reclamaciones de responsabilidad patrimonial iguales o superiores a 60.000 euros.",
      "referencia": "Art. 11.1.D.e) Ley 5/2002"
    },
    {
      "id": "0850-17",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "La Audiencia de Cuentas de Canarias es un órgano dependiente de:",
      "opciones": [
        "La Consejería de Hacienda.",
        "El Gobierno de Canarias.",
        "El Parlamento de Canarias.",
        "El Tribunal de Cuentas del Estado."
      ],
      "correcta": 2,
      "justificacion": "El artículo 1.2 de la Ley 4/1989 establece que depende directamente del Parlamento de Canarias y ejerce sus funciones con autonomía.",
      "referencia": "Art. 1.2 Ley 4/1989"
    },
    {
      "id": "0850-18",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "¿Cuántos consejeros auditores integran la Audiencia de Cuentas de Canarias?",
      "opciones": [
        "3 consejeros auditores.",
        "5 consejeros auditores.",
        "7 consejeros auditores.",
        "9 consejeros auditores."
      ],
      "correcta": 1,
      "justificacion": "El artículo 21.1 de la Ley 4/1989 indica que la Audiencia está integrada por 5 consejeros auditores elegidos por el Parlamento.",
      "referencia": "Art. 21.1 Ley 4/1989"
    },
    {
      "id": "0850-19",
      "tema": "0850",
      "nivel": "bronce",
      "enunciado": "¿Cuál es la sede permanente de la Audiencia de Cuentas de Canarias?",
      "opciones": [
        "San Cristóbal de La Laguna.",
        "Las Palmas de Gran Canaria.",
        "Santa Cruz de Tenerife.",
        "Puerto del Rosario."
      ],
      "correcta": 2,
      "justificacion": "La Disposición adicional segunda de la Ley 4/1989 establece su sede permanente en la ciudad de Santa Cruz de Tenerife.",
      "referencia": "DA 2ª Ley 4/1989"
    },
    {
      "id": "0850-20",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "¿Qué mayoría parlamentaria se precisa para la elección de los miembros de la Audiencia de Cuentas de Canarias?",
      "opciones": [
        "Mayoría simple.",
        "Mayoría absoluta.",
        "Mayoría de dos tercios.",
        "Mayoría de tres quintos."
      ],
      "correcta": 3,
      "justificacion": "El artículo 21.1 requiere que sean elegidos por el Parlamento de Canarias por mayoría de tres quintos (3/5) de sus miembros.",
      "referencia": "Art. 21.1 Ley 4/1989"
    },
    {
      "id": "0850-21",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "El mandato de los miembros de la Audiencia de Cuentas tendrá una duración de:",
      "opciones": [
        "4 años.",
        "5 años.",
        "6 años.",
        "7 años."
      ],
      "correcta": 1,
      "justificacion": "El artículo 21.2 señala que el mandato de los miembros tendrá una duración de 5 años.",
      "referencia": "Art. 21.2 Ley 4/1989"
    },
    {
      "id": "0850-22",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "El Presidente de la Audiencia de Cuentas será elegido:",
      "opciones": [
        "Por el Parlamento por mayoría absoluta.",
        "Por el Gobierno a propuesta del Consejero de Hacienda.",
        "Por y de entre los propios miembros de la Audiencia por mayoría absoluta.",
        "Por y de entre los propios miembros de la Audiencia por mayoría simple."
      ],
      "correcta": 2,
      "justificacion": "El artículo 26.2 establece que será elegido por y de entre sus miembros, por mayoría absoluta, en votación secreta.",
      "referencia": "Art. 26.2 Ley 4/1989"
    },
    {
      "id": "0850-23",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "El mandato del Presidente de la Audiencia de Cuentas será de:",
      "opciones": [
        "2 años y medio.",
        "3 años.",
        "4 años.",
        "5 años."
      ],
      "correcta": 3,
      "justificacion": "El artículo 26.2 establece expresamente que su mandato será de 5 años, pudiendo ser reelegido.",
      "referencia": "Art. 26.2 Ley 4/1989"
    },
    {
      "id": "0850-24",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "Si transcurridos 15 días desde el requerimiento, una Administración pública se niega a colaborar con la Audiencia de Cuentas, ¿qué sanción se le puede aplicar?",
      "opciones": [
        "Disolución del órgano infractor.",
        "Multa coercitiva del 10% del presupuesto.",
        "Retención del 2% de los pagos que le correspondan por parte de la Tesorería de la CAC.",
        "Inhabilitación de su titular."
      ],
      "correcta": 2,
      "justificacion": "El artículo 14.3 de la Ley 4/1989 dispone que la Audiencia lo pondrá en conocimiento de la Tesorería, que procederá a retener el 2% de los pagos.",
      "referencia": "Art. 14.3 Ley 4/1989"
    },
    {
      "id": "0850-25",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "La Audiencia de Cuentas de Canarias examinará la Cuenta General de la Comunidad Autónoma y deberá elevar un informe al Parlamento:",
      "opciones": [
        "Antes del 30 de junio del año siguiente.",
        "Antes del 31 de diciembre inmediato posterior al ejercicio a que se refiera.",
        "Antes del 30 de septiembre del año siguiente.",
        "En un plazo de tres meses tras su recepción."
      ],
      "correcta": 1,
      "justificacion": "El artículo 19.3 establece que se elevará el informe al Parlamento y Tribunal de Cuentas antes del 31 de diciembre inmediato posterior al ejercicio correspondiente.",
      "referencia": "Art. 19.3 Ley 4/1989"
    },
    {
      "id": "0850-26",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "La aprobación del Reglamento de régimen interno de la Audiencia de Cuentas corresponde a:",
      "opciones": [
        "El Parlamento de Canarias.",
        "El Presidente del Gobierno de Canarias.",
        "El Pleno de la Audiencia de Cuentas.",
        "El Secretario General de la Audiencia."
      ],
      "correcta": 2,
      "justificacion": "El artículo 31.a) señala que corresponde al Pleno de la Audiencia de Cuentas aprobar su Reglamento de régimen interno.",
      "referencia": "Art. 31.a) Ley 4/1989"
    },
    {
      "id": "0850-27",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "Para la válida constitución del Pleno de la Audiencia de Cuentas en primera convocatoria, se requerirá la presencia de:",
      "opciones": [
        "3 de sus miembros.",
        "4 de sus miembros.",
        "Los 5 Auditores.",
        "2 Auditores y el Presidente."
      ],
      "correcta": 1,
      "justificacion": "El artículo 30.2 indica que será necesaria en primera convocatoria la presencia de 4 de sus miembros (incluyendo a quien presida).",
      "referencia": "Art. 30.2 Ley 4/1989"
    },
    {
      "id": "0850-28",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "La estructura organizativa del Consejo Consultivo de Canarias prevé que actúe en Pleno o en Secciones. ¿Cuántas secciones tiene?",
      "opciones": [
        "No tiene secciones, sólo actúa en Pleno.",
        "2 Secciones integradas por 3 Consejeros cada una.",
        "3 Secciones integradas por 2 Consejeros cada una.",
        "4 Secciones especializadas por materia."
      ],
      "correcta": 1,
      "justificacion": "El artículo 15.2 de la Ley 5/2002 establece que se constituirán 2 Secciones integradas por 3 Consejeros cada una.",
      "referencia": "Art. 15.2 Ley 5/2002"
    },
    {
      "id": "0850-29",
      "tema": "0850",
      "nivel": "bronce",
      "enunciado": "Las quejas dirigidas al Diputado del Común deben presentarse:",
      "opciones": [
        "Verbalmente ante cualquier oficina de registro.",
        "Por escrito razonado, firmado por el promotor y con indicación de datos personales.",
        "Mediante llamada telefónica al número de asistencia ciudadana.",
        "Exclusivamente de forma telemática."
      ],
      "correcta": 1,
      "justificacion": "El artículo 24.1 de la Ley 7/2001 exige escrito razonado, firmado y con indicación de datos personales y domicilio.",
      "referencia": "Art. 24.1 Ley 7/2001"
    },
    {
      "id": "0850-30",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "El Diputado del Común, en el cumplimiento de su misión, informará al Parlamento de la gestión realizada cada ejercicio:",
      "opciones": [
        "Antes del 30 de marzo del año siguiente.",
        "Antes del 30 de mayo del año siguiente.",
        "Antes del 31 de diciembre.",
        "No existe plazo legal establecido."
      ],
      "correcta": 1,
      "justificacion": "El artículo 46 indica que el informe anual se presentará antes del 30 de mayo del año siguiente.",
      "referencia": "Art. 46 Ley 7/2001"
    },
    {
      "id": "0850-31",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "Para la designación de los miembros de los órganos de relevancia estatutaria (Diputado del Común, Consejo Consultivo, Audiencia de Cuentas), el Estatuto exige:",
      "opciones": [
        "La paridad estricta (50% hombres, 50% mujeres).",
        "Una composición equilibrada (ningún sexo superará el 60% ni será inferior al 40%).",
        "Que todos sean licenciados en Derecho.",
        "Una edad mínima de 50 años."
      ],
      "correcta": 1,
      "justificacion": "Las leyes de estas instituciones (modificadas en 2019) incorporaron la exigencia de una composición equilibrada (40-60%) de mujeres y hombres.",
      "referencia": "Art. 12 Ley 7/2001 / Art. 4.4 Ley 5/2002"
    },
    {
      "id": "0850-32",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "El personal al servicio de la Audiencia de Cuentas se estructura en los cuerpos de Letrados, Técnicos, Gestión, Administrativos y Auxiliares Administrativos. ¿Qué titulación se exige para el Cuerpo de Letrados?",
      "opciones": [
        "Cualquier titulación universitaria superior.",
        "Licenciado o Grado en Economía.",
        "Licenciado o Grado en Derecho.",
        "Doctor, Ingeniero o equivalente."
      ],
      "correcta": 2,
      "justificacion": "El artículo 36.3.2 establece que para ingresar en el Cuerpo de Letrados se precisa el título de Licenciado en Derecho.",
      "referencia": "Art. 36.3.2 Ley 4/1989"
    },
    {
      "id": "0850-33",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "Contra los dictámenes emitidos por el Consejo Consultivo de Canarias:",
      "opciones": [
        "Cabe recurso de alzada ante el Gobierno de Canarias.",
        "Cabe recurso potestativo de reposición.",
        "Cabe recurso de inconstitucionalidad.",
        "No cabe recurso alguno por ser órganos consultivos."
      ],
      "correcta": 3,
      "justificacion": "Los dictámenes son actos de trámite no vinculantes que preparan la voluntad del órgano decisor, por lo que no son directamente recurribles.",
      "referencia": "Naturaleza consultiva (Principios grles)"
    },
    {
      "id": "0850-34",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "Si en la instrucción de un expediente el Diputado del Común advierte posibles responsabilidades penales (delictivas):",
      "opciones": [
        "Sancionará directamente al funcionario implicado.",
        "Remitirá las actuaciones al Tribunal de Cuentas.",
        "Pondrá los hechos en conocimiento del Ministerio Fiscal.",
        "Solicitará el indulto al Parlamento."
      ],
      "correcta": 2,
      "justificacion": "El artículo 32 de la Ley 7/2001 señala que cuando tenga conocimiento de una conducta presumiblemente delictiva lo pondrá en conocimiento del Ministerio Fiscal.",
      "referencia": "Art. 32 Ley 7/2001"
    },
    {
      "id": "0850-35",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "¿Tienen los Ayuntamientos canarios la obligación de remitir sus cuentas a la Audiencia de Cuentas de Canarias?",
      "opciones": [
        "No, solo rinden cuentas al Tribunal de Cuentas del Estado.",
        "Sí, dentro del mes siguiente a su aprobación por los Plenos y en todo caso antes del 30 de septiembre del año siguiente.",
        "Sí, pero solo los municipios de gran población.",
        "Sí, pero el plazo finaliza el 31 de diciembre del año posterior."
      ],
      "correcta": 1,
      "justificacion": "El artículo 16.1.b) de la Ley 4/1989 obliga a las Corporaciones Locales a presentar las cuentas antes del 30 de septiembre del año inmediato posterior.",
      "referencia": "Art. 16.1.b) Ley 4/1989"
    },
    {
      "id": "0850-36",
      "tema": "0850",
      "nivel": "bronce",
      "enunciado": "¿Cómo se inician las actuaciones del Diputado del Común?",
      "opciones": [
        "Únicamente de oficio.",
        "Únicamente a petición de interesado.",
        "De oficio o a petición de interesado.",
        "Por orden judicial exclusivamente."
      ],
      "correcta": 2,
      "justificacion": "El artículo 22.1 dispone que podrán iniciarse de oficio o a petición de interesado.",
      "referencia": "Art. 22.1 Ley 7/2001"
    },
    {
      "id": "0850-37",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "¿Cuál es la función del Letrado Mayor en el Consejo Consultivo de Canarias?",
      "opciones": [
        "Presidir el Pleno del Consejo.",
        "Sustituir a los Consejeros en caso de vacante.",
        "Asistir al Pleno y Secciones, asumiendo la jefatura del personal y de los servicios del Consejo.",
        "Redactar los dictámenes en exclusiva."
      ],
      "correcta": 2,
      "justificacion": "El artículo 25 de la Ley 5/2002 establece que el Letrado Mayor asiste al Pleno y Secciones y ejerce la jefatura del personal y servicios.",
      "referencia": "Art. 25 Ley 5/2002"
    },
    {
      "id": "0850-38",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "La Audiencia de Cuentas de Canarias ejercerá sus funciones de examen y comprobación de la Cuenta General de la Comunidad Autónoma:",
      "opciones": [
        "Por delegación del Tribunal de Cuentas.",
        "Por delegación del Parlamento de Canarias.",
        "Como competencia exclusiva e independiente de cualquier otra institución.",
        "Por encomienda de la Consejería de Hacienda."
      ],
      "correcta": 1,
      "justificacion": "El artículo 59 del Estatuto y el art. 1.2 de la Ley 4/1989 disponen que ejerce sus funciones por delegación del Parlamento de Canarias.",
      "referencia": "Art. 59 EAC / Art. 1.2 Ley 4/1989"
    },
    {
      "id": "0850-39",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "¿Qué mayoría se exige para aprobar un dictamen en una de las Secciones del Consejo Consultivo de Canarias?",
      "opciones": [
        "Mayoría absoluta.",
        "Mayoría simple.",
        "Unanimidad de sus componentes.",
        "Consenso, pudiendo haber votos particulares."
      ],
      "correcta": 2,
      "justificacion": "El artículo 17.1 de la Ley 5/2002 indica que los acuerdos de las Secciones deberán adoptarse por unanimidad. Si no, se somete al Pleno.",
      "referencia": "Art. 17.1 Ley 5/2002"
    },
    {
      "id": "0850-40",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "Los informes emitidos por los órganos de la Audiencia de Cuentas de Canarias:",
      "opciones": [
        "Tienen carácter meramente orientativo hasta su ratificación por el Gobierno.",
        "No son públicos para preservar la intimidad de los auditados.",
        "Una vez aprobados por su Pleno, pondrán fin a cada actuación y serán elevados al Parlamento y publicados.",
        "Admiten recurso de reposición."
      ],
      "correcta": 2,
      "justificacion": "El artículo 18 y 19 señalan que una vez aprobados por su Pleno pondrán fin a la actuación, siendo elevados al Parlamento y publicados en el BOC.",
      "referencia": "Art. 18 y 19 Ley 4/1989"
    },
    {
      "id": "0850-41",
      "tema": "0850",
      "nivel": "bronce",
      "enunciado": "El Presidente de la Comunidad Autónoma de Canarias no acoge en su nombramiento un régimen que permite actuar de forma:",
      "opciones": [
        "Libremente elegida por los ciudadanos.",
        "Dictaminada por el Rey.",
        "Decidida por el Parlamento.",
        "Votada mediante referéndum nacional."
      ],
      "correcta": 3,
      "justificacion": "El Presidente de Canarias es elegido por el Parlamento autonómico de entre sus miembros y nombrado por el Rey. No se elige por referéndum nacional.",
      "referencia": "Lógica institucional"
    },
    {
      "id": "0850-42",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "Según la Ley 5/2002, ¿cuál de los siguientes proyectos normativos está EXENTUADO de solicitar el dictamen preceptivo del Consejo Consultivo de Canarias?",
      "opciones": [
        "Proyectos de Decretos Legislativos.",
        "Propuestas de reforma del Estatuto de Autonomía.",
        "Proyectos de Ley de Presupuestos Generales de la Comunidad Autónoma.",
        "Reglamentos de ejecución de leyes autonómicas."
      ],
      "correcta": 2,
      "justificacion": "El artículo 11.1.A.b) excluye explícitamente a los Proyectos de Ley de Presupuestos Generales de la Comunidad Autónoma.",
      "referencia": "Art. 11.1.A.b) Ley 5/2002"
    },
    {
      "id": "0850-43",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "¿Pueden los miembros del Consejo Consultivo de Canarias compatibilizar su cargo con el ejercicio de la docencia universitaria?",
      "opciones": [
        "No, ejercen sus funciones con dedicación exclusiva sin excepción.",
        "Sí, previa autorización expresa por la Mesa del Parlamento y fijando un número máximo de horas.",
        "Sí, sin necesidad de autorización al ser actividades compatibles de pleno derecho.",
        "Solo si son profesores eméritos."
      ],
      "correcta": 1,
      "justificacion": "El artículo 6.3 permite compatibilizarlo con funciones docentes universitarias a tiempo parcial previa autorización expresa por la Mesa del Parlamento.",
      "referencia": "Art. 6.3 Ley 5/2002"
    },
    {
      "id": "0850-44",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "Cuando se interpone un recurso de inconstitucionalidad por parte de las instituciones autonómicas canarias, ¿se requiere el dictamen del Consejo Consultivo?",
      "opciones": [
        "No, solo es un órgano de asesoramiento administrativo.",
        "Sí, debe solicitarse preceptivamente.",
        "Sólo si lo solicita el Defensor del Pueblo.",
        "Es un trámite meramente potestativo."
      ],
      "correcta": 1,
      "justificacion": "El artículo 11.1.C.a) establece que el dictamen es preceptivo sobre las actuaciones ante el TC (recursos de inconstitucionalidad y conflictos de competencias).",
      "referencia": "Art. 11.1.C.a) Ley 5/2002"
    },
    {
      "id": "0850-45",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "La Adjuntía Especial de igualdad entre mujeres y hombres y violencia de género del Diputado del Común:",
      "opciones": [
        "Se introdujo con el Estatuto de Autonomía de 1982.",
        "Es elegida directamente por el Parlamento de Canarias.",
        "Es nombrada por el Diputado del Común previa conformidad de la comisión parlamentaria competente.",
        "Es un órgano con rango superior al Diputado del Común."
      ],
      "correcta": 2,
      "justificacion": "El artículo 12 de la Ley 7/2001 establece que el titular del Diputado del Común nombrará a las Adjuntías, previa conformidad de la comisión parlamentaria.",
      "referencia": "Art. 12.1 Ley 7/2001"
    },
    {
      "id": "0850-46",
      "tema": "0850",
      "nivel": "bronce",
      "enunciado": "El Tribunal de Cuentas del Estado y la Audiencia de Cuentas de Canarias:",
      "opciones": [
        "Carecen de cualquier tipo de relación.",
        "La Audiencia de Cuentas actúa siempre subordinada jerárquicamente a las directrices del Tribunal de Cuentas.",
        "Coordinarán sus actuaciones para garantizar eficacia y economía, y evitar duplicidades.",
        "Están enfrentados funcionalmente."
      ],
      "correcta": 2,
      "justificacion": "El artículo 7.2 de la Ley 4/1989 dispone que ambas instituciones coordinarán su actividad para garantizar mayor eficacia y evitar duplicidad.",
      "referencia": "Art. 7.2 Ley 4/1989"
    },
    {
      "id": "0850-47",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "Según el régimen disciplinario, si el Diputado del Común tiene conocimiento de que una actuación puede originar responsabilidad disciplinaria de un funcionario, su plazo mínimo concedido para la alegación será de:",
      "opciones": [
        "5 días.",
        "10 días.",
        "15 días.",
        "20 días."
      ],
      "correcta": 1,
      "justificacion": "El artículo 31.2 de la Ley 7/2001 señala que el plazo fijado para que el afectado responda y aporte documentos no será inferior a 10 días.",
      "referencia": "Art. 31.2 Ley 7/2001"
    },
    {
      "id": "0850-48",
      "tema": "0850",
      "nivel": "plata",
      "enunciado": "Si en la elección del Diputado del Común no se logra la mayoría de 3/5 partes del Parlamento, la comisión parlamentaria deberá formular una nueva propuesta en el plazo máximo de:",
      "opciones": [
        "15 días.",
        "1 mes.",
        "2 meses.",
        "3 meses."
      ],
      "correcta": 1,
      "justificacion": "El artículo 4.4 establece que de no obtenerse la mayoría, la comisión formulará nueva propuesta en el plazo máximo de 1 mes.",
      "referencia": "Art. 4.4 Ley 7/2001"
    },
    {
      "id": "0850-49",
      "tema": "0850",
      "nivel": "oro",
      "enunciado": "La Audiencia de Cuentas, a nivel sancionador contable:",
      "opciones": [
        "Tiene capacidad para imponer multas por responsabilidad contable.",
        "Instruye los procedimientos pero dicta la sentencia el Parlamento.",
        "Si advierte indicios de responsabilidad contable, trasladará sin dilación el asunto al Tribunal de Cuentas.",
        "Archiva los expedientes sin necesidad de elevarlos a otro tribunal."
      ],
      "correcta": 2,
      "justificacion": "El artículo 17.1 indica que si advierte indicios de responsabilidad contable, trasladará el asunto al Tribunal de Cuentas, a los efectos de su posible enjuiciamiento.",
      "referencia": "Art. 17.1 Ley 4/1989"
    },
    {
      "id": "0850-50",
      "tema": "0850",
      "nivel": "bronce",
      "enunciado": "El Presidente del Consejo Consultivo de Canarias ostenta el tratamiento protocolario de:",
      "opciones": [
        "Ilustrísimo.",
        "Excelencia.",
        "Magnífico.",
        "Señoría."
      ],
      "correcta": 1,
      "justificacion": "El artículo 10.5 establece que el Presidente del Consejo Consultivo ostentará el tratamiento de excelencia.",
      "referencia": "Art. 10.5 Ley 5/2002"
    }
  ]
};

fs.writeFileSync(path.join(__dirname, 'src/data/tema0850.json'), JSON.stringify(tema0850, null, 2), 'utf8');
console.log('tema0850.json creado con 50 preguntas.');
