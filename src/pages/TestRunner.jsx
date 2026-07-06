import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { generateSimulacroQuestions } from '../services/simulacroGenerator';
import tema0100 from '../data/tema0100.json';
import tema0500 from '../data/tema0500.json';
import tema0680 from '../data/tema0680.json';
import tema0800 from '../data/tema0800.json';
import tema0850 from '../data/tema0850.json';
import tema1000 from '../data/tema1000.json';
import tema1300 from '../data/tema1300.json';
import tema1880 from '../data/tema1880.json';
import tema2200 from '../data/tema2200.json';
import tema2300 from '../data/tema2300.json';
import tema2350 from '../data/tema2350.json';
import tema2600 from '../data/tema2600.json';
import tema2900 from '../data/tema2900.json';
import tema3339 from '../data/tema3339.json';
import tema4570 from '../data/tema4570.json';
import tema9900 from '../data/tema9900.json';
import tema9950 from '../data/tema9950.json';

const temasData = {
  '0100': tema0100,
  '0500': tema0500,
  '0680': tema0680,
  '0800': tema0800,
  '0850': tema0850,
  '1000': tema1000,
  '1300': tema1300,
  '1880': tema1880,
  '2200': tema2200,
  '2300': tema2300,
  '2350': tema2350,
  '2600': tema2600,
  '2900': tema2900,
  '3339': tema3339,
  '4570': tema4570,
  '9900': tema9900,
  '9950': tema9950
};

export default function TestRunner() {
  const location = useLocation();
  const navigate = useNavigate();
  const { tema, longitud, modo } = location.state || { tema: '0100', longitud: 5, modo: 'libre' };

  const [preguntas, setPreguntas] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [respuestas, setRespuestas] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(modo === 'oficial' ? longitud * 60 : null);

  useEffect(() => {
    if (tema === 'SIMULACRO_OFICIAL') {
      const qs = generateSimulacroQuestions(temasData, longitud);
      setPreguntas(qs);
    } else if (temasData[tema]) {
      const shuffled = [...temasData[tema].preguntas].sort(() => 0.5 - Math.random()).map(q => {
        const optsWithIdx = q.opciones.map((opt, idx) => ({ opt, isCorrect: idx === q.correcta }));
        optsWithIdx.sort(() => 0.5 - Math.random());
        return {
          ...q,
          opciones: optsWithIdx.map(item => item.opt),
          correcta: optsWithIdx.findIndex(item => item.isCorrect)
        };
      });
      setPreguntas(shuffled.slice(0, Math.min(longitud, shuffled.length)));
    }
  }, [tema, longitud]);

  useEffect(() => {
    if (timeLeft !== null && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      finishTest();
    }
  }, [timeLeft]);

  const handleAnswer = (optionIdx) => {
    if (showFeedback) return;
    setRespuestas({ ...respuestas, [currentIdx]: optionIdx });
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    if (currentIdx < preguntas.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    navigate('/results', { state: { preguntas, respuestas, tema } });
  };

  if (preguntas.length === 0) return <div>Cargando...</div>;

  const pregunta = preguntas[currentIdx];
  const answeredIdx = respuestas[currentIdx];

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-panel" style={{ position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
        <span style={{ color: 'var(--text-secondary)' }}>Pregunta {currentIdx + 1} de {preguntas.length}</span>
        {timeLeft !== null && (
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: timeLeft < 300 ? 'var(--error-color)' : 'var(--text-primary)' }}>
            <Clock size={18} /> {formatTime(timeLeft)}
          </span>
        )}
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span className={`level-badge badge-${pregunta.nivel}`}>{pregunta.nivel}</span>
          {pregunta.tema_nombre_corto && (
            <span style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
              {pregunta.tema_nombre_corto}
            </span>
          )}
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{pregunta.id}</span>
        </div>
        <h3 style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>{pregunta.enunciado}</h3>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {pregunta.opciones.map((opcion, idx) => {
          let bg = 'rgba(255,255,255,0.05)';
          let border = '1px solid var(--glass-border)';
          
          if (showFeedback) {
            if (idx === pregunta.correcta) {
              bg = 'rgba(16, 185, 129, 0.2)';
              border = '1px solid var(--success-color)';
            } else if (idx === answeredIdx) {
              bg = 'rgba(239, 68, 68, 0.2)';
              border = '1px solid var(--error-color)';
            }
          } else if (answeredIdx === idx) {
            bg = 'rgba(255,255,255,0.15)';
          }

          return (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={showFeedback}
              style={{
                background: bg,
                border: border,
                padding: '1rem',
                borderRadius: '8px',
                color: 'white',
                textAlign: 'left',
                cursor: showFeedback ? 'default' : 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>{String.fromCharCode(97 + idx)}) {opcion}</span>
              {showFeedback && idx === pregunta.correcta && <CheckCircle color="var(--success-color)" size={20} />}
              {showFeedback && idx === answeredIdx && idx !== pregunta.correcta && <XCircle color="var(--error-color)" size={20} />}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              marginTop: '2rem',
              padding: '1.5rem',
              background: 'rgba(0,0,0,0.2)',
              borderRadius: '8px',
              borderLeft: '4px solid var(--accent-color)'
            }}
          >
            <p style={{ fontWeight: '600', marginBottom: '0.5rem', color: answeredIdx === pregunta.correcta ? 'var(--success-color)' : 'var(--error-color)' }}>
              {answeredIdx === pregunta.correcta ? '¡Correcto!' : answeredIdx === undefined ? 'En blanco' : 'Incorrecto'}
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', fontSize: '0.95rem' }}>{pregunta.justificacion}</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--accent-hover)' }}>{pregunta.referencia}</p>
            
            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button className="btn btn-secondary" onClick={() => navigate('/')} style={{ borderColor: 'var(--error-color)', color: 'var(--error-color)' }}>
                Salir
              </button>
              <button className="btn btn-primary" onClick={nextQuestion}>
                {currentIdx < preguntas.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showFeedback && (
         <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button className="btn btn-secondary" onClick={() => navigate('/')} style={{ borderColor: 'var(--error-color)', color: 'var(--error-color)' }}>
              Salir
            </button>
            <button className="btn btn-secondary" onClick={() => {
                setRespuestas({ ...respuestas, [currentIdx]: undefined });
                setShowFeedback(true);
            }}>
                Dejar en blanco
            </button>
         </div>
      )}
    </motion.div>
  );
}
