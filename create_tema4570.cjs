const fs = require('fs');
const path = require('path');

const tema4570 = {
  "tema_id": "4570",
  "tema_nombre": "Presupuestos y Hacienda Pública de Canarias (Ley 11/2006)",
  "preguntas": [
    {
      "id": "4570-01",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "La norma básica por la que se rige la Hacienda Pública de la Comunidad Autónoma de Canarias es:",
      "opciones": [
        "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.",
        "La Ley 11/2006, de 11 de diciembre, de la Hacienda Pública Canaria.",
        "El Real Decreto Legislativo 1/2002.",
        "La Ley Orgánica 8/1980, de Financiación de las CCAA (LOFCA) en exclusiva."
      ],
      "correcta": 1,
      "justificacion": "La Ley 11/2006, de 11 de diciembre, de la Hacienda Pública Canaria, regula el régimen jurídico de la Hacienda de la Comunidad Autónoma.",
      "referencia": "Ley 11/2006 Hacienda Pública Canaria"
    },
    {
      "id": "4570-02",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "La Hacienda Pública de la Comunidad Autónoma de Canarias está constituida por:",
      "opciones": [
        "El conjunto de tributos e impuestos cobrados en las islas.",
        "El conjunto de derechos y obligaciones de contenido económico cuya titularidad corresponde a la Administración de la Comunidad Autónoma y a sus organismos autónomos y entidades de derecho público.",
        "Exclusivamente las subvenciones recibidas del Estado y de la Unión Europea.",
        "Los presupuestos anuales aprobados por el Parlamento de Canarias."
      ],
      "correcta": 1,
      "justificacion": "El artículo 1 de la Ley 11/2006 define la Hacienda Pública Canaria como el conjunto de derechos y obligaciones de contenido económico de la Administración de la CAC y de su sector público público.",
      "referencia": "Art. 1 Ley 11/2006"
    },
    {
      "id": "4570-03",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "¿Qué es el 'Presupuesto General de la Comunidad Autónoma de Canarias'?",
      "opciones": [
        "La declaración de ingresos y gastos de las empresas privadas canarias.",
        "La expresión cifrada, conjunta y sistemática de los derechos y obligaciones a liquidar durante el ejercicio por cada uno de los órganos y entidades que forman parte de la CAC.",
        "El plan económico comarcal a cinco años vista.",
        "La ley de tributos locales aprobada cada década."
      ],
      "correcta": 1,
      "justificacion": "El artículo 31 de la Ley 11/2006 define los Presupuestos Generales como la expresión cifrada, conjunta y sistemática de los derechos y obligaciones a liquidar durante el ejercicio económico.",
      "referencia": "Art. 31 Ley 11/2006"
    },
    {
      "id": "4570-04",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "El ejercicio presupuestario en la Comunidad Autónoma de Canarias coincidirá con:",
      "opciones": [
        "El curso escolar (1 de septiembre a 31 de agosto).",
        "El año natural, y a él se imputarán los derechos económicos liquidados durante el mismo y las obligaciones reconocidas hasta el fin del mes de diciembre.",
        "Dos años naturales consecutivos.",
        "El periodo legislativo del Parlamento de Canarias."
      ],
      "correcta": 1,
      "justificacion": "El artículo 33 de la Ley 11/2006 establece que el ejercicio presupuestario coincide con el año natural (del 1 de enero al 31 de diciembre).",
      "referencia": "Art. 33 Ley 11/2006"
    },
    {
      "id": "4570-05",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "En la estructura de los estados de gastos del presupuesto canario, la clasificación que ordena los créditos según su naturaleza económica se denomina:",
      "opciones": [
        "Clasificación orgánica.",
        "Clasificación económica, separando los gastos corrientes, los gastos de capital y las operaciones financieras.",
        "Clasificación funcional y de programas.",
        "Clasificación territorial."
      ],
      "correcta": 1,
      "justificacion": "La clasificación económica ordena los créditos según su naturaleza y función económica (Capítulos 1 a 9, agrupados en corrientes, capital y operaciones financieras).",
      "referencia": "Art. 35 Ley 11/2006"
    },
    {
      "id": "4570-06",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "¿Qué capítulos de la clasificación económica del gasto corresponden a operaciones corrientes?",
      "opciones": [
        "Capítulos 6 y 7.",
        "Capítulos 1, 2, 3 y 4 (gastos de personal, bienes corrientes y servicios, gastos financieros y transferencias corrientes).",
        "Capítulos 8 y 9.",
        "Capítulos 4, 5 y 6."
      ],
      "correcta": 1,
      "justificacion": "Las operaciones corrientes integran el Capítulo 1 (Personal), Cap. 2 (Bienes corrientes y servicios), Cap. 3 (Gastos financieros) y Cap. 4 (Transferencias corrientes).",
      "referencia": "Art. 35 Ley 11/2006"
    },
    {
      "id": "4570-07",
      "tema": "4570",
      "nivel": "bronce",
      "enunciado": "El Capítulo 6 del presupuesto de gastos se denomina:",
      "opciones": [
        "Gastos de personal.",
        "Transferencias de capital.",
        "Inversiones reales.",
        "Activos financieros."
      ],
      "correcta": 2,
      "justificacion": "El Capítulo 6 de la clasificación económica del gasto corresponde a las 'Inversiones reales' (gastos de capital).",
      "referencia": "Estructura presupuestaria / Ley 11/2006"
    },
    {
      "id": "4570-08",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "La clasificación por programas (o funcional) del presupuesto tiene como finalidad:",
      "opciones": [
        "Distribuir el dinero equitativamente entre islas.",
        "Establecer los objetivos a alcanzar durante el ejercicio y asignar los recursos de acuerdo con la finalidad que se persiga con los gastos.",
        "Saber qué departamento o consejería gasta el dinero.",
        "Someter las cuentas al control del Estado."
      ],
      "correcta": 1,
      "justificacion": "La clasificación funcional o por programas agrupa los créditos según los objetivos a conseguir y la finalidad de las políticas de gasto que realiza la Administración.",
      "referencia": "Art. 35.3 Ley 11/2006"
    },
    {
      "id": "4570-09",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "¿Cuál es la fecha límite para que el Gobierno de Canarias remita el Proyecto de Ley de Presupuestos Generales al Parlamento de Canarias?",
      "opciones": [
        "Antes del 1 de julio del año anterior.",
        "Antes del 1 de noviembre del año anterior al que se refiera.",
        "El 31 de diciembre del año en curso.",
        "Antes del 1 de octubre, invariablemente."
      ],
      "correcta": 1,
      "justificacion": "El artículo 37 de la Ley 11/2006 y el Estatuto de Autonomía de Canarias establecen que el proyecto se remitirá al Parlamento antes del 1 de noviembre.",
      "referencia": "Art. 37 Ley 11/2006 / Estatuto Autonomía"
    },
    {
      "id": "4570-10",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "¿Qué sucede si la Ley de Presupuestos Generales de la Comunidad Autónoma no se aproba antes del primer día del ejercicio económico correspondiente?",
      "opciones": [
        "El Gobierno entra en funciones obligatoriamente.",
        "Se consideran automáticamente prorrogados los presupuestos del ejercicio anterior hasta la aprobación y publicación de los nuevos.",
        "Se aplican directamente los Presupuestos del Estado.",
        "La Comunidad Autónoma queda paralizada sin poder realizar ningún pago."
      ],
      "correcta": 1,
      "justificacion": "El artículo 38 de la Ley 11/2006 prevé la prórroga automática del presupuesto del ejercicio anterior si no se hubiera aprobado el nuevo al iniciar el año, hasta su aprobación.",
      "referencia": "Art. 38 Ley 11/2006"
    },
    {
      "id": "4570-11",
      "tema": "4570",
      "nivel": "bronce",
      "enunciado": "El principio de 'especialidad cualitativa' del crédito presupuestario implica que:",
      "opciones": [
        "El dinero solo puede gastarse en el ejercicio presupuestario en curso.",
        "Los créditos para gastos se destinarán exclusivamente a la finalidad específica para la que hayan sido autorizados por la Ley de Presupuestos o por modificaciones aprobadas.",
        "No se puede gastar más de lo autorizado.",
        "Las cuentas deben publicarse en el BOC."
      ],
      "correcta": 1,
      "justificacion": "La especialidad cualitativa exige que los créditos presupuestarios se apliquen única y exclusivamente a las finalidades específicas para las que fueron aprobados.",
      "referencia": "Art. 42 Ley 11/2006"
    },
    {
      "id": "4570-12",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "El principio de 'especialidad cuantitativa' establece que:",
      "opciones": [
        "No pueden adquirirse compromisos de gasto ni adquirirse obligaciones por cuantía superior al importe de los créditos autorizados en los estados de gastos.",
        "Todo gasto debe ir en euros, no en moneda extranjera.",
        "El presupuesto debe ser siempre un número entero.",
        "Los ingresos y gastos deben sumar exactamente la misma cifra en todas las consejerías."
      ],
      "correcta": 0,
      "justificacion": "El artículo 43 de la Ley 11/2006 prohíbe adquirir compromisos de gasto u obligaciones por cuantía superior al importe de los créditos autorizados, siendo nulos de pleno derecho los actos que infrinjan esta norma.",
      "referencia": "Art. 43 Ley 11/2006"
    },
    {
      "id": "4570-13",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "¿Qué es una 'modificación presupuestaria'?",
      "opciones": [
        "El cambio de Consejero de Hacienda a mitad de año.",
        "La variación en la cuantía o en la finalidad de los créditos aprobados por la Ley de Presupuestos, tramitada conforme a los procedimientos legalmente establecidos.",
        "La devolución de un recibo tributario.",
        "El aplazamiento de una deuda bancaria."
      ],
      "correcta": 1,
      "justificacion": "Las modificaciones presupuestarias (créditos extraordinarios, suplementos, transferencias, generaciones, etc.) alteran las cifras o finalidades de los créditos iniciales.",
      "referencia": "Arts. 48-57 Ley 11/2006"
    },
    {
      "id": "4570-14",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "Cuando deba realizarse un gasto para el que no exista crédito en el presupuesto de la Comunidad Autónoma, ¿qué figura de modificación presupuestaria procede?",
      "opciones": [
        "Un suplemento de crédito.",
        "Un crédito extraordinario, cuya aprobación corresponderá al Parlamento si no puede financiarse con el Fondo de Contingencia.",
        "Una generación de crédito.",
        "Una incorporación de remanentes."
      ],
      "correcta": 1,
      "justificacion": "El artículo 50 de la Ley 11/2006 dispone que cuando no exista crédito presupuestario para un gasto ineludible, se tramitará un crédito extraordinario; si existe crédito pero es insuficiente, será un suplemento de crédito.",
      "referencia": "Art. 50 Ley 11/2006"
    },
    {
      "id": "4570-15",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "La 'transferencia de crédito' es una modificación presupuestaria que consiste en:",
      "opciones": [
        "El trasvase de dotaciones entre partidas presupuestarias, sin alterar la cuantía global del presupuesto, sujeta a las limitaciones legales (ej. no minorar créditos para inversiones, etc.).",
        "Pedir un préstamo a un banco privado.",
        "El traspaso de dinero entre el Estado y Canarias.",
        "El envío de fondos del presupuesto autonómico a los Ayuntamientos."
      ],
      "correcta": 0,
      "justificacion": "La transferencia de crédito (art. 52 Ley 11/2006) traspasa importe de unas partidas del presupuesto a otras, modificando la asignación interna pero manteniendo invariable el gasto total del presupuesto.",
      "referencia": "Art. 52 Ley 11/2006"
    },
    {
      "id": "4570-16",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "¿Qué es la 'generación de crédito' en el presupuesto autonómico?",
      "opciones": [
        "La creación artificial de dinero por el Banco de España.",
        "Una modificación presupuestaria que incrementa los créditos como consecuencia de haber obtenido mayores ingresos no previstos (ej. aportaciones del Estado, de la UE o reintegros).",
        "La estimación de la recaudación del IGIC.",
        "El ahorro producido al no gastar una partida presupuestaria."
      ],
      "correcta": 1,
      "justificacion": "El artículo 53 de la Ley 11/2006 establece que podrán dar lugar a generación de crédito los mayores ingresos realizados sobre los previstos, derivados de aportaciones de otras AAPP, fondos europeos, ventas de bienes, etc.",
      "referencia": "Art. 53 Ley 11/2006"
    },
    {
      "id": "4570-17",
      "tema": "4570",
      "nivel": "bronce",
      "enunciado": "Los 'créditos de compromiso' o para gastos de carácter plurianual (art. 40 Ley 11/2006) permiten:",
      "opciones": [
        "Que se asuman compromisos de gasto que extiendan sus efectos a ejercicios presupuestarios posteriores a aquel en que se autoricen, dentro de unos límites de porcentaje y anualidades.",
        "Gastar dinero sin ningún control contable.",
        "Que las empresas cobren por adelantado todas las obras.",
        "Eliminar la necesidad de hacer presupuesto anual."
      ],
      "correcta": 0,
      "justificacion": "El artículo 40 permite comprometer gastos para ejercicios futuros (gastos plurianuales), siempre que su ejecución o pago deba extenderse a años posteriores y no superen los porcentajes legales establecidos.",
      "referencia": "Art. 40 Ley 11/2006"
    },
    {
      "id": "4570-18",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "En la ejecución del gasto público, ¿qué fases secuenciales conforman el procedimiento ordinario?",
      "opciones": [
        "Abono, compromiso y factura.",
        "Autorización del gasto (A), Disposición o compromiso del gasto (D), Reconocimiento de la obligación (O) y Ordenación del pago (P).",
        "Propuesta del contratista, aprobación fiscal y cheque bancario.",
        "Reconocimiento de la deuda y pago simultáneo siempre."
      ],
      "correcta": 1,
      "justificacion": "El artículo 68 y siguientes de la Ley 11/2006 ordenan la ejecución del gasto en las fases contables A (Autorización), D (Disposición/compromiso), O (Reconocimiento de obligación) y P (Ordenación del pago).",
      "referencia": "Arts. 68-73 Ley 11/2006"
    },
    {
      "id": "4570-19",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "La fase de 'Reconocimiento de la obligación' (Fase O) supone:",
      "opciones": [
        "La estimación inicial de cuánto costará una obra.",
        "La declaración de la existencia de un crédito exigible contra la Hacienda Pública Canaria, tras haber verificado la realización de la prestación o el derecho del acreedor conforme al acuerdo practicado.",
        "La firma del contrato con el adjudicatario.",
        "El ingreso efectivo del dinero en la cuenta bancaria del proveedor."
      ],
      "correcta": 1,
      "justificacion": "El artículo 71 de la Ley 11/2006 define el reconocimiento de la obligación como el acto administrativo por el que se declara la existencia de un crédito exigible por un tercero, previa justificación de haber realizado la prestación.",
      "referencia": "Art. 71 Ley 11/2006"
    },
    {
      "id": "4570-20",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "¿Qué órgano es el encargado del 'control interno' de la gestión económica y presupuestaria en la Administración Pública de la Comunidad Autónoma de Canarias?",
      "opciones": [
        "El Tribunal de Cuentas del Reino de España en exclusiva.",
        "La Audiencia de Cuentas de Canarias en exclusiva.",
        "La Intervención General de la Comunidad Autónoma de Canarias.",
        "La Consejería de Presidencia y Justicia."
      ],
      "correcta": 2,
      "justificacion": "El artículo 124 de la Ley 11/2006 atribuye a la Intervención General de la Comunidad Autónoma el ejercicio del control interno (función interventora, control financiero y auditoría) del sector público autonómico.",
      "referencia": "Art. 124 Ley 11/2006"
    },
    {
      "id": "4570-21",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "La 'función interventora' o fiscalización previa realizada por la Intervención General tiene por objeto:",
      "opciones": [
        "Inspeccionar las cuentas anuales de los partidos políticos canarios.",
        "Controlar, antes de que sean aprobados, los actos del sector público autonómico que den lugar al reconocimiento de derechos o a la realización de gastos y pagos, asegurando su legalidad.",
        "Juzgar penalmente a los gestores públicos por prevaricación.",
        "Elaborar las normas tributarias del IGIC."
      ],
      "correcta": 1,
      "justificacion": "El artículo 128 de la Ley 11/2006 establece que la función interventora tiene por objeto fiscalizar previamente los actos que reconozcan derechos o generen gastos, para garantizar su legalidad.",
      "referencia": "Art. 128 Ley 11/2006"
    },
    {
      "id": "4570-22",
      "tema": "4570",
      "nivel": "bronce",
      "enunciado": "Si el Interventor formula una 'reparo suspensivo' (disconformidad por ilegalidad o falta de crédito) a un acto de gasto antes de que se apruebe, ¿qué efecto se produce?",
      "opciones": [
        "El gestor puede ignorarlo sin más y pagar.",
        "Se suspende la tramitación del expediente hasta que el reparo sea subsanado o resuelto por el órgano competente (resolución de discrepancias).",
        "El expediente es enviado directamente al Fiscal Anticorrupción.",
        "Se caduca la dotación presupuestaria."
      ],
      "correcta": 1,
      "justificacion": "El artículo 132 de la Ley 11/2006 dispone que el reparo suspensivo detiene la tramitación del gasto hasta que el órgano gestor subsane las deficiencias o, si discrepa, plantee la discrepancia ante la consejería competente en Hacienda.",
      "referencia": "Art. 132 Ley 11/2006"
    },
    {
      "id": "4570-23",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "¿Qué institución realiza el 'control externo' de la gestión económica, financiera y contable del sector público de la Comunidad Autónoma de Canarias y de las entidades locales canarias?",
      "opciones": [
        "El Diputado del Común.",
        "La Audiencia de Cuentas de Canarias (sin perjuicio de las competencias del Tribunal de Cuentas del Estado).",
        "El Consejo Consultivo de Canarias.",
        "El Comisionado de la Transparencia de Canarias."
      ],
      "correcta": 1,
      "justificacion": "El Estatuto de Autonomía de Canarias y la Ley 4/1989 crean la Audiencia de Cuentas de Canarias como el órgano comisionado del Parlamento canario para el control externo del gasto público en el archipiélago.",
      "referencia": "Estatuto Autonomía / Ley 4/1989"
    },
    {
      "id": "4570-24",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "La Ley Orgánica 2/2012, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se aplica a:",
      "opciones": [
        "Solo al Estado central.",
        "A todo el sector público español: Estado, CCAA, Corporaciones Locales y Administración de la Seguridad Social.",
        "Exclusivamente a los municipios de más de 50.000 habitantes.",
        "A las empresas privadas que contraten con la Administración."
      ],
      "correcta": 1,
      "justificacion": "El ámbito de aplicación de la LO 2/2012 (Estabilidad Presupuestaria) abarca a todo el sector público, incluyendo las Comunidades Autónomas como Canarias.",
      "referencia": "Art. 2 LO 2/2012"
    },
    {
      "id": "4570-25",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "El principio de 'estabilidad presupuestaria' en la LO 2/2012 significa que las CCAA y las Corporaciones Locales deben mantener una situación de:",
      "opciones": [
        "Déficit continuado para financiar infraestructuras.",
        "Equilibrio o superávit estructural, no pudiendo incurrir en déficit estructural salvo circunstancias excepcionales legalmente previstas (catástrofes, recesión grave).",
        "Cero gasto público.",
        "Dependencia absoluta de los fondos de contingencia estatales."
      ],
      "correcta": 1,
      "justificacion": "El artículo 3 y el artículo 11 de la LO 2/2012 obligan a las AAPP a elaborar, aprobar y ejecutar sus presupuestos en una situación de equilibrio o superávit estructural.",
      "referencia": "Arts. 3 y 11 LO 2/2012"
    },
    {
      "id": "4570-26",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "¿Qué es la 'regla de gasto' prevista en el artículo 12 de la LO de Estabilidad Presupuestaria?",
      "opciones": [
        "El gasto no puede superar los 1.000 euros por habitante.",
        "La variación del gasto computable de la Administración no podrá superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la economía española.",
        "Toda partida de gasto debe ser probada ante notario.",
        "El gasto en salarios públicos no puede suponer más del 10% del total."
      ],
      "correcta": 1,
      "justificacion": "El artículo 12 de la LO 2/2012 consagra la regla de gasto: el crecimiento del gasto computable de las AAPP no puede sobrepasar la tasa de crecimiento del PIB a medio plazo calculada por el Ministerio de Economía.",
      "referencia": "Art. 12 LO 2/2012"
    },
    {
      "id": "4570-27",
      "tema": "4570",
      "nivel": "bronce",
      "enunciado": "Si una Administración (ej. Comunidad Autónoma) obtiene superávit presupuestario, la LO 2/2012 establece que dicho superávit se destinará prioritariamente a:",
      "opciones": [
        "Subir los salarios de los altos cargos.",
        "Reducir el endeudamiento neto (pago de deuda pública).",
        "Crear nuevas empresas públicas no rentables.",
        "Repartirlo entre los municipios a partes iguales."
      ],
      "correcta": 1,
      "justificacion": "El artículo 32 de la LO 2/2012 obliga a que en el caso de obtenerse superávit presupuestario, este se aplique a reducir el endeudamiento neto (amortización de deuda).",
      "referencia": "Art. 32 LO 2/2012"
    },
    {
      "id": "4570-28",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "¿Qué es el REF (Régimen Económico y Fiscal de Canarias) desde el punto de vista presupuestario y fiscal?",
      "opciones": [
        "Un impuesto temporal canario.",
        "El conjunto de medidas normativas y económicas específicas que compensan el hecho insular y la lejanía (ultraperiferia), consagrado en la Constitución y el Estatuto, incluyendo especialidades impositivas como el IGIC y el AIEM.",
        "Una subvención mensual que da la Unión Europea a los pensionistas.",
        "Una cuenta corriente donde se guardan los impuestos estatales."
      ],
      "correcta": 1,
      "justificacion": "El REF es el régimen económico y fiscal especial e histórico de Canarias, garantizado por la CE (art. 138) y el Estatuto, que compensa los costes de la insularidad y ultraperiferia con figuras como el IGIC, ZEC, AIEM, RIC, etc.",
      "referencia": "REF Canarias / CE / Estatuto"
    },
    {
      "id": "4570-29",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "El impuesto indirecto que sustituye en el territorio de las Islas Canarias al Impuesto sobre el Valor Añadido (IVA) se denomina:",
      "opciones": [
        "Impuesto Único Canario (IUC).",
        "Impuesto General Indirecto Canario (IGIC).",
        "Arbitrio Insular sobre Entrada de Mercancías (AIEM).",
        "Tasa Turística Archipielágica (TTA)."
      ],
      "correcta": 1,
      "justificacion": "El IGIC (Impuesto General Indirecto Canario) creado por la Ley 20/1991 es el impuesto indirecto estatal aplicable en las Islas Canarias que grava el consumo de bienes y prestaciones de servicios en lugar del IVA.",
      "referencia": "Ley 20/1991 / REF"
    },
    {
      "id": "4570-30",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "La Cuenta General de la Comunidad Autónoma de Canarias referida a cada ejercicio económico cerrado debe ser formada por:",
      "opciones": [
        "El Parlamento de Canarias antes de marzo.",
        "La Intervención General de la CAC para ser elevada al Gobierno, quien la remitirá a la Audiencia de Cuentas de Canarias antes del 30 de junio del año siguiente.",
        "El Banco de España directamente.",
        "Los colegios de economistas y auditores."
      ],
      "correcta": 1,
      "justificacion": "El artículo 113 de la Ley 11/2006 dispone que la Intervención General formará la Cuenta General de la CAC del año anterior para su rendición a la Audiencia de Cuentas antes del 30 de junio.",
      "referencia": "Art. 113 Ley 11/2006"
    },
    {
      "id": "4570-31",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "¿Qué son los 'derechos de naturaleza pública' de la Hacienda Pública Canaria (ej. impuestos, tasas, sanciones administrativas)?",
      "opciones": [
        "Derechos de cobro en los que la Administración ostenta prerrogativas como la presunción de legitimidad y la vía de apremio para su exacción forzosa en caso de impago.",
        "Derechos que se cobran exclusivamente por los tribunales civiles.",
        "Deudas que prescriben a los 20 años en todo caso.",
        "Obligaciones que se pagan en moneda virtual."
      ],
      "correcta": 0,
      "justificacion": "Los derechos de naturaleza pública gozan de prerrogativas exorbitantes de Derecho Administrativo: presunción de legitimidad, no suspensividad, ejecutividad y procedimiento de apremio patrimonial sin acudir al juez.",
      "referencia": "Art. 4 y 10 Ley 11/2006"
    },
    {
      "id": "4570-32",
      "tema": "4570",
      "nivel": "bronce",
      "enunciado": "Salvo disposición especial en contrario, los derechos de la Hacienda Pública Canaria prescriben a los:",
      "opciones": [
        "2 años.",
        "4 años, contados desde el día en que el derecho pudo ejercitarse o desde la finalización del plazo de pago voluntario.",
        "10 años.",
        "No prescriben nunca."
      ],
      "correcta": 1,
      "justificacion": "El artículo 15 de la Ley 11/2006 fija la prescripción de los derechos de la Hacienda canaria (para reconocerlos o cobrarlos) en el plazo general de 4 años (coincidente con la Ley General Tributaria).",
      "referencia": "Art. 15 Ley 11/2006"
    },
    {
      "id": "4570-33",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "¿Cuál es el plazo de prescripción de las obligaciones de pago de la Hacienda Pública Canaria a favor de terceros (ej. facturas pendientes de proveedores)?",
      "opciones": [
        "1 año.",
        "4 años desde la fecha en que se concluyó el servicio o la prestación determinante de la obligación, si no se reclama antes.",
        "15 años.",
        "6 meses."
      ],
      "correcta": 1,
      "justificacion": "El artículo 22 de la Ley 11/2006 establece que las obligaciones de pago de la Hacienda Pública Canaria prescriben a los 4 años si no han sido reclamadas por los acreedores legítimos.",
      "referencia": "Art. 22 Ley 11/2006"
    },
    {
      "id": "4570-34",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "¿Puede embargarse el dinero o los bienes de la Hacienda Pública Canaria por mandato judicial o administrativo ordinario para pagar deudas?",
      "opciones": [
        "Sí, cualquier juzgado puede embargar las cuentas de la Comunidad Autónoma incondicionalmente.",
        "No, los tribunales o jueces y autoridades administrativas no podrán despuchar mandamientos de ejecución ni dictar providencias de embargo contra los derechos, fondos, valores o bienes de la Hacienda Pública Canaria.",
        "Sí, pero solo los viernes.",
        "Solo por el Tribunal de Justicia de la UE."
      ],
      "correcta": 1,
      "justificacion": "El artículo 21 de la Ley 11/2006 consagra la inembargabilidad de los fondos, valores y bienes de la Hacienda Pública Canaria (principio general de inembargabilidad del sector público para asegurar la continuidad de los servicios).",
      "referencia": "Art. 21 Ley 11/2006"
    },
    {
      "id": "4570-35",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "La figura del 'Fondo de Contingencia' en los Presupuestos de Canarias se destinará a:",
      "opciones": [
        "Subir los sueldos a los funcionarios al final del año.",
        "Atender necesidades inaplazables, de carácter no discrecional, para las que no exista crédito o el existente sea insuficiente (ej. desastres naturales, emergencias, sentencias firmes no previstas).",
        "Repartir como dividendo entre los Cabildos.",
        "Invertir en bolsa de valores extranjera."
      ],
      "correcta": 1,
      "justificacion": "El Fondo de Contingencia dotado en el presupuesto es una provisión no asignada para financiar modificaciones presupuestarias urgentes e inaplazables durante el ejercicio (art. 31 y 50 Ley 11/2006).",
      "referencia": "Ley 11/2006 / LO 2/2012"
    },
    {
      "id": "4570-36",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "¿Qué es la 'Reserva de Inversiones en Canarias' (RIC)?",
      "opciones": [
        "Una cuenta de ahorro bancaria para colegios públicos.",
        "Un incentivo fiscal del REF de Canarias por el cual las empresas e inversores pueden reducir hasta el 90% de sus beneficios no distribuidos en el Impuesto sobre Sociedades/IRPF si los reinvierten en activos y proyectos en Canarias.",
        "Un impuesto sobre estancias hoteleras.",
        "Una prohibición de invertir fuera del archipiélago."
      ],
      "correcta": 1,
      "justificacion": "La RIC es el principal beneficio fiscal del REF, permitiendo a las entidades y autónomos no tributar por los beneficios empresariales que se doten a esta reserva y se reinviertan en la economía canaria en un plazo máximo de tres años.",
      "referencia": "Ley 19/1994 / REF Canarias"
    },
    {
      "id": "4570-37",
      "tema": "4570",
      "nivel": "bronce",
      "enunciado": "¿Cómo se clasifican los ingresos en la estructura presupuestaria de la Comunidad Autónoma?",
      "opciones": [
        "Por orden alfabético de contribuyentes.",
        "Al igual que los gastos, en una clasificación económica por capítulos (ej. Cap. 1 Impuestos directos, Cap. 2 Impuestos indirectos, Cap. 4 Transferencias corrientes...).",
        "Por la edad del ciudadano que paga.",
        "No existe clasificación para los ingresos."
      ],
      "correcta": 1,
      "justificacion": "El artículo 36 de la Ley 11/2006 establece que el estado de ingresos se estructura de acuerdo con una clasificación económica, dividida en capítulos (impuestos directos/indirectos, tasas, transferencias, etc.).",
      "referencia": "Art. 36 Ley 11/2006"
    },
    {
      "id": "4570-38",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "La Ley 11/2006 establece que quien con dolo, culpa o negligencia graves adopte resoluciones o realice actos que causen perjuicio económico a la Hacienda Pública Canaria incurrirá en:",
      "opciones": [
        "Un simple apercibimiento verbal.",
        "Responsabilidad civil o contable, estando obligado a indemnizar a la Hacienda Pública Canaria por los daños y perjuicios causados, con independencia de las responsabilidades penales o disciplinarias.",
        "Inhabilitación de por vida y pérdida de la ciudadanía.",
        "Una pena automática de 10 años de cárcel sin juicio."
      ],
      "correcta": 1,
      "justificacion": "El Título VI de la Ley 11/2006 (art. 143 y ss.) regula las responsabilidades por alcance o perjuicio a la Hacienda Pública, exigiendo indemnización (responsabilidad contable ante el Tribunal de Cuentas/Audiencia de Cuentas).",
      "referencia": "Arts. 143-149 Ley 11/2006"
    },
    {
      "id": "4570-39",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "Los remanentes de crédito (créditos presupuestarios no comprometidos en el ejercicio y no gastados al 31 de diciembre):",
      "opciones": [
        "Se acumulan indefinidamente y se suman al presupuesto del año que viene por defecto.",
        "Quedan anulados de pleno derecho al finalizar el ejercicio presupuestario, sin perjuicio de los supuestos excepcionales en que la ley permita su incorporación al ejercicio siguiente.",
        "Se regalan a los funcionarios como prima de productividad.",
        "Se transfieren automáticamente a las ONG."
      ],
      "correcta": 1,
      "justificacion": "El artículo 39 de la Ley 11/2006 establece la regla general de que los créditos para gastos que no estén afectos al cumplimiento de obligaciones reconocidas al 31 de diciembre quedan anulados (salvo incorporaciones legales del art. 56).",
      "referencia": "Art. 39 Ley 11/2006"
    },
    {
      "id": "4570-40",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "El control de eficacia de los servicios de la Comunidad Autónoma y sus organismos y empresas públicas es una modalidad del control interno que tiene por objeto:",
      "opciones": [
        "Comprobar que el IGIC se ha cobrado en todas las tiendas.",
        "Comprobar periódicamente el grado de cumplimiento de los objetivos programados, así como el análisis del coste de funcionamiento y del rendimiento de los servicios o inversiones.",
        "Revisar el horario de entrada y salida de los conserjes.",
        "Comprobar las firmas de todos los contratos menores."
      ],
      "correcta": 1,
      "justificacion": "El artículo 138 de la Ley 11/2006 define el control de eficacia y auditoría operativa como la evaluación del rendimiento y coste de los servicios y del grado de consecución de los objetivos de los programas presupuestarios.",
      "referencia": "Art. 138 Ley 11/2006"
    },
    {
      "id": "4570-41",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "¿Qué es la 'auditoría de cuentas' del sector público de la Comunidad Autónoma de Canarias realizada por la Intervención General?",
      "opciones": [
        "La inspección de los bolsos de los trabajadores.",
        "La verificación, mediante la aplicación de técnicas de revisión y verificación contable, de si la contabilidad y estados financieros representan la imagen fiel del patrimonio y de la situación financiera.",
        "El cobro coercitivo de impuestos atrasados.",
        "El escrutinio electoral en el Parlamento de Canarias."
      ],
      "correcta": 1,
      "justificacion": "El artículo 136 de la Ley 11/2006 define la auditoría pública (de regularidad o financiera) como la verificación de que las cuentas anuales reflejan la imagen fiel de la situación de las entidades públicas.",
      "referencia": "Art. 136 Ley 11/2006"
    },
    {
      "id": "4570-42",
      "tema": "4570",
      "nivel": "bronce",
      "enunciado": "La Ley 11/2006 prohíbe las operaciones bancarias de crédito o endeudamiento de la Comunidad Autónoma salvo que:",
      "opciones": [
        "Se realicen con bancos extranjeros únicamente.",
        "Estén previstas y autorizadas expresamente en la Ley de Presupuestos o en una ley del Parlamento de Canarias (dentro de los límites de estabilidad de la LO 2/2012).",
        "El tipo de interés sea cero.",
        "El dinero se destine a fiestas populares."
      ],
      "correcta": 1,
      "justificacion": "El artículo 93 y ss. de la Ley 11/2006 subordinan la emisión de deuda pública o formalización de préstamos a su autorización por ley y al respeto a los límites de endeudamiento del Estado y la LO 2/2012.",
      "referencia": "Arts. 93-98 Ley 11/2006"
    },
    {
      "id": "4570-43",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "¿Quién es el órgano competente para la resolución de las controversias o 'discrepancias' cuando la Intervención formula un reparo a un gasto en una Consejería y el Consejero no lo acepta?",
      "opciones": [
        "El Presidente del Tribunal Supremo.",
        "El Gobierno de Canarias (Consejo de Gobierno), si la discrepancia es planteada por un Consejero; o la consejería competente en materia de hacienda, según los importes y casos.",
        "El jefe de sección del servicio.",
        "Un juez de paz."
      ],
      "correcta": 1,
      "justificacion": "El artículo 133 de la Ley 11/2006 establece que si el órgano gestor (Consejero) discrepa del reparo interventor, la discrepancia será resuelta por el Gobierno de Canarias o el Consejero de Hacienda, según el caso.",
      "referencia": "Art. 133 Ley 11/2006"
    },
    {
      "id": "4570-44",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "En el régimen financiero de Canarias, ¿qué es el Fondo de Compensación Interterritorial (FCI)?",
      "opciones": [
        "Un fondo para pagar indemnizaciones por despido en fábricas.",
        "Un instrumento constitucional de solidaridad destinado a corregir desequilibrios económicos interterritoriales y hacer efectivo el principio de solidaridad, cuyos recursos se destinan a gastos de inversión en las regiones menos desarrolladas.",
        "Un seguro contra erupciones volcánicas del Gobierno de Canarias.",
        "El fondo con el que se compran los billetes de avión a los residentes."
      ],
      "correcta": 1,
      "justificacion": "El FCI (art. 158 CE) financia inversiones públicas en las CCAA con menor renta o insulares para corregir desequilibrios y garantizar la solidaridad interterritorial.",
      "referencia": "Art. 158 CE / Ley LOFCA"
    },
    {
      "id": "4570-45",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "¿Qué principio presupuestario exige que la cuantía global de los gastos autorizados en el presupuesto no puede ser superior a la estimación de los ingresos a liquidar en el ejercicio?",
      "opciones": [
        "Principio de publicidad.",
        "Principio de equilibrio presupuestario.",
        "Principio de especialidad temporal.",
        "Principio de universalidad y no afectación."
      ],
      "correcta": 1,
      "justificacion": "El principio de equilibrio presupuestario o suficiencia impone que la suma de los créditos aprobados en el estado de gastos debe ser financiada y estar equilibrada con los ingresos previstos para el ejercicio.",
      "referencia": "Art. 31 Ley 11/2006"
    },
    {
      "id": "4570-46",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "La 'no afectación de los ingresos' (art. 29 Ley 11/2006) significa como regla general que:",
      "opciones": [
        "Los impuestos se devuelven al finalizar el año.",
        "Los recursos de la Hacienda Pública Canaria se destinarán a satisfacer el conjunto de sus respectivas obligaciones, sin que un ingreso concreto se destine obligatoriamente a financiar un gasto concreto (salvo excepciones como tasas o fondos finalistas).",
        "El presupuesto canario no puede gastarse en la península.",
        "El Gobierno puede regalar los ingresos a quien quiera."
      ],
      "correcta": 1,
      "justificacion": "El principio de no afectación de ingresos o de caja única (art. 29 Ley 11/2006) implica que todos los ingresos tributarios y ordinarios entran a una masa común para financiar todos los gastos generales.",
      "referencia": "Art. 29 Ley 11/2006"
    },
    {
      "id": "4570-47",
      "tema": "4570",
      "nivel": "bronce",
      "enunciado": "El 'anexo de inversiones' que acompaña al presupuesto canario detalla:",
      "opciones": [
        "El menú de las cafeterías de las sedes públicas.",
        "Los proyectos de inversión pública real y su distribución territorial por islas y municipios.",
        "Los nombres de todos los funcionarios que se jubilarán.",
        "El horario de atención al público en Navidad."
      ],
      "correcta": 1,
      "justificacion": "El anexo de inversiones reales (Capítulo 6) y transferencias de capital detalla los proyectos constructivos o de desarrollo, con su regionalización insular y municipal.",
      "referencia": "Art. 37 y Anexos Ley 11/2006"
    },
    {
      "id": "4570-48",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "Las 'enfermedades' contables del presupuesto: si una obligación se reconoce contra un acreedor legítimo en el ejercicio, pero no da tiempo a pagarse antes del 31 de diciembre, dicha obligación:",
      "opciones": [
        "Se borra y el acreedor pierde su derecho a cobrar.",
        "Pasa a formar parte de los 'Acreedores por obligaciones reconocidas' o remanente de tesorería, y su pago se realizará en el ejercicio siguiente cargándose a la tesorería de ejercicios cerrados.",
        "Debe pagarse obligatoriamente de los bolsillos del director general.",
        "Se aplaza por 5 años."
      ],
      "correcta": 1,
      "justificacion": "Las obligaciones contablemente reconocidas (Fase O) y no pagadas (Fase P) al cierre del año (31 de diciembre) no se pierden; constituyen la deuda pendiente de pago (pasivo) que se abona en los primeros meses del año siguiente.",
      "referencia": "Art. 33 y Contabilidad Pública"
    },
    {
      "id": "4570-49",
      "tema": "4570",
      "nivel": "plata",
      "enunciado": "La 'fiscalización o intervención limitada previa' en gastos reiterativos de la CAC (ej. nóminas o suministros menores) permite al Interventor:",
      "opciones": [
        "No mirar nada nunca más.",
        "Comprobar únicamente una serie de requisitos básicos y esenciales fijados por el Consejo de Gobierno (ej. existencia de crédito, órgano competente), realizando el control completo del resto de requisitos a posteriori mediante muestreo.",
        "Firmar los cheques en lugar del Tesorero.",
        "Denegar todas las nóminas del mes de agosto."
      ],
      "correcta": 1,
      "justificacion": "El artículo 130 de la Ley 11/2006 permite agilizar la gestión mediante la fiscalización previa limitada a extremos esenciales (crédito, competencia), complementándose con auditorías posteriores por muestreo.",
      "referencia": "Art. 130 Ley 11/2006"
    },
    {
      "id": "4570-50",
      "tema": "4570",
      "nivel": "oro",
      "enunciado": "¿En qué se diferencia una 'tasa' de un 'impuesto' en la Hacienda Pública?",
      "opciones": [
        "No se diferencian, son sinónimos legales.",
        "El impuesto se exige sin contraprestación directa según la capacidad económica del sujeto; la tasa se exige por la utilización privativa del dominio público o por la prestación de un servicio público que beneficia individualmente al ciudadano y es de solicitud obligatoria o monopolística.",
        "La tasa es europea y el impuesto es canario.",
        "Los impuestos solo los cobran los ayuntamientos y las tasas el Estado."
      ],
      "correcta": 1,
      "justificacion": "La Ley General Tributaria y el art. 5 de la Ley 11/2006 distinguen los impuestos (sin contraprestación directa, gravan capacidad económica) de las tasas (contraprestación por uso de dominio público o servicios públicos obligatorios o sin concurrencia privada).",
      "referencia": "Ley General Tributaria / Ley 11/2006"
    }
  ]
};

fs.writeFileSync(path.join(__dirname, 'src/data/tema4570.json'), JSON.stringify(tema4570, null, 2), 'utf8');
console.log('tema4570.json creado con 50 preguntas.');
