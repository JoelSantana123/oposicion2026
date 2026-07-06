// Generador de Simulacro Oficial Ponderado
// Selecciona preguntas de todos los temas de acuerdo al peso real en exámenes de oposición (Temas Oro ⭐⭐, Plata ⭐ y Bronce)
// y equilibrando la dificultad de las preguntas (nivel oro/plata/bronce).

export const PESOS_TEMAS = {
  ORO: ['3339', '2200', '1300'], // 30% del examen (Procedimiento, TREBEP, Contratos)
  PLATA: ['0100', '0800', '0680', '2900', '4570', '2600'], // 35% del examen (CE, Estatuto, Municipios, Subvenciones, Presupuestos, Contencioso)
  BRONCE: ['0500', '0850', '1000', '1880', '2300', '2350', '9900', '9950'] // 35% del examen (UE, Instituciones, Atención, Cabildos, RGPD, Transparencia, Igualdad, Discapacidad)
};

export function generateSimulacroQuestions(temasData, totalQuestions = 50) {
  const numOro = Math.round(totalQuestions * 0.30);
  const numPlata = Math.round(totalQuestions * 0.35);
  const numBronce = totalQuestions - numOro - numPlata;

  const selectWeightedQuestions = (temaIds, count) => {
    let allQuestions = [];
    temaIds.forEach(id => {
      if (temasData[id] && temasData[id].preguntas) {
        // Añadir el nombre o ID del tema a cada pregunta por si no lo tuvieran explícito
        const qs = temasData[id].preguntas.map(q => ({
          ...q,
          tema_nombre_corto: temasData[id].tema_nombre || `Tema ${id}`
        }));
        allQuestions = allQuestions.concat(qs);
      }
    });

    // Mezclar todas las preguntas del bloque
    allQuestions.sort(() => 0.5 - Math.random());

    // Separar por dificultad de la pregunta (nivel oro, plata, bronce)
    const porDificultad = {
      oro: allQuestions.filter(q => q.nivel === 'oro'),
      plata: allQuestions.filter(q => q.nivel === 'plata'),
      bronce: allQuestions.filter(q => !q.nivel || q.nivel === 'bronce')
    };

    // Intentar seleccionar ~30% oro, ~50% plata, ~20% bronce dentro del bloque
    const countDifOro = Math.round(count * 0.30);
    const countDifPlata = Math.round(count * 0.50);
    const countDifBronce = count - countDifOro - countDifPlata;

    let selected = [];
    selected = selected.concat(porDificultad.oro.slice(0, countDifOro));
    selected = selected.concat(porDificultad.plata.slice(0, countDifPlata));
    selected = selected.concat(porDificultad.bronce.slice(0, countDifBronce));

    // Si falta para llegar a 'count' (porque algún nivel tenía menos preguntas), rellenar con las sobrantes de cualquier nivel
    if (selected.length < count) {
      const selectedIds = new Set(selected.map(q => q.id));
      const remaining = allQuestions.filter(q => !selectedIds.has(q.id));
      selected = selected.concat(remaining.slice(0, count - selected.length));
    }

    return selected.slice(0, count);
  };

  const selectedOro = selectWeightedQuestions(PESOS_TEMAS.ORO, numOro);
  const selectedPlata = selectWeightedQuestions(PESOS_TEMAS.PLATA, numPlata);
  const selectedBronce = selectWeightedQuestions(PESOS_TEMAS.BRONCE, numBronce);

  const combined = [...selectedOro, ...selectedPlata, ...selectedBronce];

  // Mezclar el orden global de las preguntas para que los temas salgan intercalados al azar
  const shuffledQuestions = combined.sort(() => 0.5 - Math.random());

  // Mezclar las opciones A, B, C, D de cada pregunta individualmente
  return shuffledQuestions.map(q => {
    const optsWithIdx = q.opciones.map((opt, idx) => ({ opt, isCorrect: idx === q.correcta }));
    optsWithIdx.sort(() => 0.5 - Math.random());
    return {
      ...q,
      opciones: optsWithIdx.map(item => item.opt),
      correcta: optsWithIdx.findIndex(item => item.isCorrect)
    };
  });
}
