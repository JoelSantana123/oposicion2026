import React, { useState, useEffect, useRef, useCallback } from 'react';
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

  // --- Timer basado en timestamps reales (funciona bien en iOS/Android) ---
  const endTimeRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(null);
  const timerRef = useRef(null);

  // Ref al top del panel para scroll fiable en móviles
  const topRef = useRef(null);

  // Ref a respuestas actual para acceder en finishTest sin stale closure
  const respuestasRef = useRef(respuestas);
  useEffect(() => { respuestasRef.current = respuestas; }, [respuestas]);

  const finishTest = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    navigate('/results', { state: { preguntas, respuestas: respuestasRef.current, tema } });
  }, [navigate, preguntas, tema]);

  // Inicializar preguntas
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

  // Inicializar timer con timestamp real cuando hay preguntas cargadas
  useEffect(() => {
    if (preguntas.length === 0 || modo !== 'oficial') return;
    const durationMs = longitud * 60 * 1000;
    endTimeRef.current = Date.now() + durationMs;
    setTimeLeft(longitud * 60);

    timerRef.current = setInterval(() => {
      const remaining = Math.round((endTimeRef.current - Date.now()) / 1000);
      if (remaining <= 0) {
        clearInterval(timerRef.current);
        setTimeLeft(0);
        // Navegar a resultados con lo que haya respondido hasta ahora
        navigate('/results', { state: { preguntas, respuestas: respuestasRef.current, tema } });
      } else {
        setTimeLeft(remaining);
      }
    }, 500); // cada 500ms para más precisión

    return () => clearInterval(timerRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [preguntas.length]);

  const scrollToTop = () => {
    // Funciona en todos los navegadores móviles
    try { document.documentElement.scrollTo({ top: 0, behavior: 'smooth' }); } catch(e) {}
    try { document.body.scrollTo({ top: 0, behavior: 'smooth' }); } catch(e) {}
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch(e) {}
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAnswer = (optionIdx) => {
    if (showFeedback) return;
    setRespuestas(prev => ({ ...prev, [currentIdx]: optionIdx }));
    setShowFeedback(true);
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    scrollToTop();
    if (currentIdx < preguntas.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      finishTest();
    }
  };

  const handleBlank = () => {
    if (showFeedback) return;
    setRespuestas(prev => ({ ...prev, [currentIdx]: undefined }));
    setShowFeedback(true);
  };

  if (preguntas.length === 0) {
    return (
      <div className="glass-panel" style={{ textAlign: 'center', padding: '3rem' }}>
        <p>Cargando preguntas...</p>
      </div>
    );
  }

  const pregunta = preguntas[currentIdx];
  const answeredIdx = respuestas[currentIdx];

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progress = ((currentIdx + (showFeedback ? 1 : 0)) / preguntas.length) * 100;

  return (
    <div ref={topRef}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-panel" style={{ position: 'relative' }}>

        {/* Barra de progreso */}
        <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginBottom: '1.5rem', overflow: 'hidden' }}>
          <motion.div
            style={{ height: '100%', background: 'var(--accent-color)', borderRadius: '2px' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Cabecera: pregunta + timer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
          <span style={{ color: 'var(--text-secondary)', fontWeight: '600' }}>
            Pregunta <span style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>{currentIdx + 1}</span> de {preguntas.length}
          </span>
          {timeLeft !== null && (
            <span style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              color: timeLeft < 300 ? 'var(--error-color)' : 'var(--text-primary)',
              fontWeight: 'bold', fontSize: '1.1rem'
            }}>
              <Clock size={18} /> {formatTime(timeLeft)}
            </span>
          )}
        </div>

        {/* Enunciado */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <span className={`level-badge badge-${pregunta.nivel}`}>{pregunta.nivel}</span>
            {pregunta.tema_nombre_corto && (
              <span style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', padding: '0.2rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
                {pregunta.tema_nombre_corto}
              </span>
            )}
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>{pregunta.id}</span>
          </div>
          <h3 style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--text-primary)' }}>{pregunta.enunciado}</h3>
        </div>

        {/* Opciones */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {pregunta.opciones.map((opcion, idx) => {
            let bg = 'rgba(255,255,255,0.05)';
            let border = '1px solid var(--glass-border)';

            if (showFeedback) {
              if (idx === pregunta.correcta) {
                bg = 'rgba(16, 185, 129, 0.2)';
                border = '2px solid var(--success-color)';
              } else if (idx === answeredIdx) {
                bg = 'rgba(239, 68, 68, 0.2)';
                border = '2px solid var(--error-color)';
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
                  padding: '0.9rem 1rem',
                  borderRadius: '10px',
                  color: 'white',
                  textAlign: 'left',
                  cursor: showFeedback ? 'default' : 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '0.5rem',
                  touchAction: 'manipulation', // elimina delay de 300ms en móviles
                  WebkitTapHighlightColor: 'transparent',
                  fontSize: '0.95rem',
                  lineHeight: '1.5'
                }}
              >
                <span><strong style={{ marginRight: '0.5rem', color: 'var(--text-secondary)' }}>{String.fromCharCode(65 + idx)})</strong>{opcion}</span>
                {showFeedback && idx === pregunta.correcta && <CheckCircle color="var(--success-color)" size={22} style={{ flexShrink: 0 }} />}
                {showFeedback && idx === answeredIdx && idx !== pregunta.correcta && <XCircle color="var(--error-color)" size={22} style={{ flexShrink: 0 }} />}
              </button>
            );
          })}
        </div>

        {/* Botón dejar en blanco (solo antes de responder) */}
        {!showFeedback && (
          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
            <button
              onClick={() => navigate('/')}
              style={{
                background: 'transparent', border: '1px solid var(--error-color)', color: 'var(--error-color)',
                padding: '0.7rem 1.2rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '600',
                touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent'
              }}
            >
              Salir
            </button>
            <button
              onClick={handleBlank}
              style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'var(--text-secondary)',
                padding: '0.7rem 1.2rem', borderRadius: '8px', cursor: 'pointer', fontWeight: '600',
                touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent'
              }}
            >
              Dejar en blanco
            </button>
          </div>
        )}

        {/* Tarjeta de feedback + botón SIGUIENTE */}
        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                marginTop: '1.5rem',
                padding: '1.25rem',
                background: 'rgba(0,0,0,0.35)',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.12)'
              }}
            >
              {/* Resultado */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginBottom: '0.75rem', paddingBottom: '0.75rem',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                flexWrap: 'wrap', gap: '0.4rem'
              }}>
                <span style={{
                  fontSize: '1.15rem', fontWeight: 'bold',
                  color: answeredIdx === pregunta.correcta ? 'var(--success-color)' : answeredIdx === undefined ? 'var(--text-secondary)' : 'var(--error-color)'
                }}>
                  {answeredIdx === pregunta.correcta ? '✅ ¡Correcto!' : answeredIdx === undefined ? '⚪ En blanco' : '❌ Incorrecto'}
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Justificación — Pregunta {currentIdx + 1}
                </span>
              </div>

              {/* Justificación */}
              <p style={{ color: 'var(--text-primary)', lineHeight: '1.65', fontSize: '0.92rem', marginBottom: '0.5rem' }}>
                {pregunta.justificacion}
              </p>
              {pregunta.referencia && (
                <p style={{ fontSize: '0.82rem', color: 'var(--accent-hover)', fontWeight: '500', marginTop: '0.5rem' }}>
                  📚 {pregunta.referencia}
                </p>
              )}

              {/* Botón SIGUIENTE — grande, táctil, imposible de no ver */}
              <button
                onClick={nextQuestion}
                style={{
                  marginTop: '1.5rem',
                  width: '100%',
                  padding: '1.1rem',
                  fontSize: '1.05rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.5)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.5rem',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                  letterSpacing: '0.02em'
                }}
              >
                {currentIdx < preguntas.length - 1
                  ? `➡️  Siguiente  (${currentIdx + 2} / ${preguntas.length})`
                  : '🏆  Ver Resultados Finales'}
              </button>

              <div style={{ marginTop: '0.75rem', textAlign: 'center' }}>
                <button
                  onClick={() => navigate('/')}
                  style={{
                    background: 'transparent', border: 'none', color: 'var(--error-color)',
                    fontSize: '0.85rem', cursor: 'pointer', padding: '0.4rem 0.8rem',
                    touchAction: 'manipulation', WebkitTapHighlightColor: 'transparent'
                  }}
                >
                  Salir del test
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}
