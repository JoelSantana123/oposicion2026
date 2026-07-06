import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, Clock, HelpCircle, ArrowLeft, Play, ShieldAlert, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SimulacroConfig() {
  const navigate = useNavigate();
  const [longitud, setLongitud] = useState(50);
  const [modo, setModo] = useState('oficial');

  const handleStart = () => {
    navigate('/test', {
      state: {
        tema: 'SIMULACRO_OFICIAL',
        longitud: Number(longitud),
        modo
      }
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-panel"
      style={{ maxWidth: '650px', margin: '2rem auto', border: '1px solid rgba(245, 158, 11, 0.4)', boxShadow: '0 8px 32px 0 rgba(245, 158, 11, 0.15)' }}
    >
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', padding: '0.8rem', borderRadius: '50%', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', marginBottom: '1rem' }}>
          <Award size={40} />
        </div>
        <h2 style={{ fontSize: '2.2rem', marginBottom: '0.5rem', background: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
          Simulacro Oficial de Examen
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
          Examen Multitema con Ponderación de Temas Oro ⭐⭐ y Aleatorización Total
        </p>
      </header>

      <div style={{ background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '1.2rem', marginBottom: '2rem', borderLeft: '4px solid #f59e0b', fontSize: '0.95rem', lineHeight: '1.6' }}>
        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fbbf24', marginBottom: '0.5rem', fontSize: '1rem' }}>
          <Sparkles size={18} /> ¿Cómo funciona este Examen Real?
        </h4>
        <p style={{ margin: '0 0 0.5rem 0', color: 'var(--text-secondary)' }}>
          Al igual que en los exámenes oficiales reales, las preguntas se extraen aleatoriamente de <strong>los 17 temas del temario</strong> respetando el peso específico de cada materia:
        </p>
        <ul style={{ margin: '0 0 0 1.2rem', padding: 0, color: '#e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
          <li><strong style={{ color: '#fbbf24' }}>~30% Temas Oro ⭐⭐:</strong> Procedimiento Administrativo (Leyes 39/40), TREBEP y Contratos (LCSP).</li>
          <li><strong style={{ color: '#94a3b8' }}>~35% Temas Plata ⭐:</strong> Constitución, Estatuto, Municipios, Subvenciones, Presupuestos y Contencioso.</li>
          <li><strong style={{ color: '#cbd5e1' }}>~35% Resto del Temario:</strong> UE, Cabildos, RGPD, Transparencia, Igualdad, Discapacidad y Archivo.</li>
        </ul>
        <p style={{ margin: '0.6rem 0 0 0', color: '#94a3b8', fontSize: '0.85rem', fontStyle: 'italic' }}>
          * Las opciones (A, B, C, D) se mezclan dinámicamente y la dificultad se equilibra con preguntas Oro, Plata y Bronce.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', color: '#fbbf24', fontWeight: '600' }}>
            <HelpCircle size={18} /> Número de Preguntas del Examen:
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <button
              type="button"
              onClick={() => setLongitud(50)}
              style={{
                padding: '1rem',
                borderRadius: '10px',
                border: longitud === 50 ? '2px solid #f59e0b' : '1px solid var(--glass-border)',
                background: longitud === 50 ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                color: 'white',
                cursor: 'pointer',
                fontWeight: longitud === 50 ? 'bold' : 'normal',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ fontSize: '1.2rem' }}>50 Preguntas</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Estándar Recomendado</div>
            </button>
            <button
              type="button"
              onClick={() => setLongitud(100)}
              style={{
                padding: '1rem',
                borderRadius: '10px',
                border: longitud === 100 ? '2px solid #f59e0b' : '1px solid var(--glass-border)',
                background: longitud === 100 ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                color: 'white',
                cursor: 'pointer',
                fontWeight: longitud === 100 ? 'bold' : 'normal',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ fontSize: '1.2rem' }}>100 Preguntas</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Simulacro Completo</div>
            </button>
          </div>
        </div>

        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', color: '#fbbf24', fontWeight: '600' }}>
            <Clock size={18} /> Modalidad de Tiempo:
          </label>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <button
              type="button"
              onClick={() => setModo('oficial')}
              style={{
                padding: '1rem',
                borderRadius: '10px',
                border: modo === 'oficial' ? '2px solid #f59e0b' : '1px solid var(--glass-border)',
                background: modo === 'oficial' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                color: 'white',
                cursor: 'pointer',
                fontWeight: modo === 'oficial' ? 'bold' : 'normal',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ fontSize: '1.1rem' }}>⏱️ Tiempo Oficial</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{longitud === 50 ? '50 Minutos' : '100 Minutos'}</div>
            </button>
            <button
              type="button"
              onClick={() => setModo('libre')}
              style={{
                padding: '1rem',
                borderRadius: '10px',
                border: modo === 'libre' ? '2px solid #f59e0b' : '1px solid var(--glass-border)',
                background: modo === 'libre' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                color: 'white',
                cursor: 'pointer',
                fontWeight: modo === 'libre' ? 'bold' : 'normal',
                transition: 'all 0.2s'
              }}
            >
              <div style={{ fontSize: '1.1rem' }}>☕ Modo Libre</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Sin límite de tiempo</div>
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
        <button 
          className="btn btn-secondary" 
          onClick={() => navigate('/')}
          style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
        >
          <ArrowLeft size={18} /> Volver
        </button>
        <button 
          className="btn" 
          onClick={handleStart}
          style={{ 
            flex: '2', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '0.5rem',
            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            color: 'white',
            fontWeight: 'bold',
            border: 'none',
            boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)'
          }}
        >
          <Play size={20} /> ¡Comenzar Examen Real!
        </button>
      </div>
    </motion.div>
  );
}
