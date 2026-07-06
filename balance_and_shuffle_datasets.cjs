const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.startsWith('tema') && f.endsWith('.json'));

const legalClauses = [
  ", de conformidad con lo dispuesto en la normativa reglamentaria de desarrollo.",
  ", salvo en los supuestos excepcionales debidamente autorizados por el órgano competente.",
  ", sin perjuicio de las competencias estatales y autonómicas legalmente reservadas.",
  ", de acuerdo con los criterios establecidos para el correspondiente procedimiento administrativo.",
  ", en virtud de lo preceptuado para las administraciones territoriales del sector público.",
  ", previo acuerdo favorable del órgano general de coordinación asistencial o técnica.",
  ", con sujeción a los límites y plazos contemplados en la legislación general supletoria.",
  ", conforme a lo previsto en las directrices de ejecución e inspección aplicables.",
  ", salvo que una norma con rango constitucional o legal disponga expresamente lo contrario.",
  ", atendiendo a los principios de proporcionalidad, eficiencia y jerarquía normativa.",
  ", en las condiciones y con los requisitos fijados en las instrucciones técnicas vigentes.",
  ", aplicándose de forma supletoria el régimen general de procedimiento administrativo.",
  ", de acuerdo con la resolución motivada que se dicte al efecto en cada ejercicio.",
  ", siempre que se acredite el cumplimiento de los requisitos formales exigidos por la ley.",
  ", en los términos legalmente fijados para las corporaciones de derecho público y privado.",
  ", según lo acordado en los planes estratégicos y operativos de gestión pública.",
  ", con el visto bueno y la fiscalización previa de los órganos de control económico.",
  ", sin que en ningún caso pueda contravenir los principios rectores del ordenamiento.",
  ", bajo la supervisión y control de la autoridad de inspección competente en la materia.",
  ", conforme a la valoración técnica emitida por la comisión de evaluación correspondiente."
];

function getWordCount(str) {
  return str.trim().split(/\s+/).length;
}

let totalQuestionsProcessed = 0;
let totalOptionsLengthened = 0;

files.forEach(file => {
  const filePath = path.join(dataDir, file);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  if (!content.preguntas || !Array.isArray(content.preguntas)) return;

  content.preguntas.forEach(q => {
    totalQuestionsProcessed++;
    const correctIdx = q.correcta;
    const correctText = q.opciones[correctIdx];
    const correctWords = getWordCount(correctText);

    // 1. Equilibrar longitud de las opciones incorrectas para evitar "la más larga es la correcta"
    const usedClauses = new Set();
    q.opciones = q.opciones.map((opt, idx) => {
      if (idx === correctIdx) return opt;

      let currentWords = getWordCount(opt);
      // Si la opción incorrecta es notablemente más corta que la correcta (diferencia > 6 palabras o < 70% de longitud)
      while (currentWords < correctWords * 0.75 && (correctWords - currentWords) > 6 && usedClauses.size < legalClauses.length) {
        // Elegir una cláusula aleatoria que no hayamos usado en esta pregunta
        const availableClauses = legalClauses.filter(c => !usedClauses.has(c));
        if (availableClauses.length === 0) break;
        const randomClause = availableClauses[Math.floor(Math.random() * availableClauses.length)];
        usedClauses.add(randomClause);

        // Quitar punto final si lo tiene antes de añadir la cláusula
        let cleanOpt = opt.trim();
        if (cleanOpt.endsWith('.')) cleanOpt = cleanOpt.slice(0, -1);
        
        opt = cleanOpt + randomClause;
        currentWords = getWordCount(opt);
        totalOptionsLengthened++;
      }
      return opt;
    });

    // 2. Mezclar aleatoriamente el orden de las 4 opciones para redistribuir q.correcta uniformemente en el JSON
    const optsWithIdx = q.opciones.map((opt, idx) => ({ opt, isCorrect: idx === correctIdx }));
    optsWithIdx.sort(() => 0.5 - Math.random());

    q.opciones = optsWithIdx.map(item => item.opt);
    q.correcta = optsWithIdx.findIndex(item => item.isCorrect);
  });

  fs.writeFileSync(filePath, JSON.stringify(content, null, 2), 'utf8');
  console.log(`Procesado ${file}: OK`);
});

console.log(`\n¡Éxito! Total de preguntas equilibradas y mezcladas: ${totalQuestionsProcessed}`);
console.log(`Total de opciones incorrectas alargadas con terminología jurídica: ${totalOptionsLengthened}`);
