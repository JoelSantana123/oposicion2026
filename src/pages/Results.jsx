import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { StorageManager } from '../services/storageManager';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, MinusCircle, Home } from 'lucide-react';

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { preguntas, respuestas, tema } = location.state || { preguntas: [], respuestas: {} };
  const [saved, setSaved] = useState(false);

  let correct = 0;
  let incorrect = 0;
  let blank = 0;
  const failedQuestions = [];

  preguntas.forEach((q, idx) => {
    const ans = respuestas[idx];
    if (ans === undefined) {
      blank++;
    } else if (ans === q.correcta) {
      correct++;
    } else {
      incorrect++;
      failedQuestions.push(q);
    }
  });

  const rawScore = (correct * 0.20) - (incorrect * (0.20 / 3));
  const maxPossible = preguntas.length * 0.20;
  const scaledScore = maxPossible > 0 ? (rawScore / maxPossible) * 10 : 0;
  const passed = scaledScore >= 5;

  useEffect(() => {
    if (!saved && preguntas.length > 0) {
      StorageManager.saveTestResult({
        id: Date.now().toString(),
        date: new Date().toISOString(),
        themeId: tema,
        score: scaledScore,
        correct,
        incorrect,
        blank,
        total: preguntas.length,
        failedQuestions
      });
      setSaved(true);
    }
  }, [saved, preguntas, tema, scaledScore, correct, incorrect, blank, failedQuestions]);

  if (preguntas.length === 0) {
    return <div style={{textAlign: 'center', marginTop: '2rem'}}>No hay resultados. <button className="btn btn-primary" onClick={() => navigate('/')}>Volver</button></div>;
  }

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass-panel">
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: passed ? 'var(--success-color)' : 'var(--error-color)' }}>
          {passed ? '¡Aprobado!' : 'No Apto'}
        </h2>
        {tema === 'SIMULACRO_OFICIAL' && (
          <div style={{ display: 'inline-block', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.2) 100%)', color: '#fbbf24', padding: '0.4rem 1rem', borderRadius: '20px', border: '1px solid rgba(245, 158, 11, 0.5)', marginBottom: '1rem', fontWeight: 'bold' }}>
            🏆 Resultado de Simulacro Oficial (Multitema Ponderado ⭐⭐)
          </div>
        )}
        <div style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          {scaledScore.toFixed(2)} <span style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>/ 10</span>
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>Puntuación directa: {rawScore.toFixed(3)}</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.2)' }}>
          <CheckCircle size={32} color="var(--success-color)" style={{ marginBottom: '0.5rem' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{correct}</span>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Aciertos (+{ (correct * 0.20).toFixed(2) })</span>
        </div>
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(239,68,68,0.1)', borderColor: 'rgba(239,68,68,0.2)' }}>
          <XCircle size={32} color="var(--error-color)" style={{ marginBottom: '0.5rem' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{incorrect}</span>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Fallos (-{ (incorrect * (0.20/3)).toFixed(3) })</span>
        </div>
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(148,163,184,0.1)', borderColor: 'rgba(148,163,184,0.2)' }}>
          <MinusCircle size={32} color="var(--text-secondary)" style={{ marginBottom: '0.5rem' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{blank}</span>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>En blanco</span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="btn btn-primary" onClick={() => navigate('/')}>
          <Home size={18} /> Volver al Inicio
        </button>
      </div>
    </motion.div>
  );
}
